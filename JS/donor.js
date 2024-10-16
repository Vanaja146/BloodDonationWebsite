// Function to add a donor to localStorage
function addDonor() {
    const donor = {
        donorName: document.getElementById('DonorName').value,
        age: document.getElementById('Age').value,
        registrationDate: document.getElementById('RegistrationDate').value,
        bloodType: document.getElementById('BloodType').value,
        contact: document.getElementById('Contact').value
    };

    let donors = JSON.parse(localStorage.getItem('donors')) || [];
    donors.push(donor);
    localStorage.setItem('donors', JSON.stringify(donors));

    // Clear form fields after adding the donor
    document.getElementById('addDonorForm').reset();

    displayDonors();  // Update the table with new data
}

// Function to display donors from localStorage in the table
function displayDonors() {
    const donors = JSON.parse(localStorage.getItem('donors')) || [];
    const donorTableBody = document.querySelector('#donorTable tbody');
    donorTableBody.innerHTML = '';  // Clear existing rows

    donors.forEach((donor, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${donor.donorName}</td>
            <td>${donor.age}</td>
            <td>${donor.registrationDate}</td>
            <td>${donor.bloodType}</td>
            <td>${donor.contact}</td>
            <td><button class="btn btn-danger" onclick="deleteDonor(${index})">Remove</button></td>
        `;
        donorTableBody.appendChild(row);
    });
}

// Function to delete a donor from localStorage
function deleteDonor(index) {
    let donors = JSON.parse(localStorage.getItem('donors')) || [];
    donors.splice(index, 1);  // Remove donor at the specified index
    localStorage.setItem('donors', JSON.stringify(donors));
    displayDonors();  // Update the table after deletion
}

// Event listener for the form submission
document.getElementById('addDonorForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form from submitting and refreshing the page
    addDonor();  // Call the function to add the donor
});

// Display donors when the page loads
document.addEventListener('DOMContentLoaded', displayDonors);
