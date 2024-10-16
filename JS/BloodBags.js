// BloodBags.js

document.addEventListener('DOMContentLoaded', () => {
    const addBBForm = document.getElementById('addBBForm');
    const BBTableBody = document.querySelector('#BBTable tbody');

    // Load existing blood bags from localStorage
    loadBloodBags();

    // Form submission handler
    addBBForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const donationDate = document.getElementById('DonationDate').value;
        const expiryDate = document.getElementById('ExpiryDate').value;
        const bloodType = document.getElementById('BloodBagsBloodType').value;
        const volume = document.getElementById('Volume').value;

        // Create a blood bag object
        const bloodBag = {
            donationDate,
            expiryDate,
            bloodType,
            volume,
        };

        // Save to localStorage
        saveBloodBag(bloodBag);

        // Clear the form
        addBBForm.reset();

        // Reload blood bags to display in the table
        loadBloodBags();
    });

    function saveBloodBag(bloodBag) {
        // Get existing blood bags from localStorage
        let bloodBags = JSON.parse(localStorage.getItem('bloodBags')) || [];
        bloodBags.push(bloodBag);
        localStorage.setItem('bloodBags', JSON.stringify(bloodBags));
    }

    function loadBloodBags() {
        // Clear the table body
        BBTableBody.innerHTML = '';

        // Get blood bags from localStorage
        const bloodBags = JSON.parse(localStorage.getItem('bloodBags')) || [];
        bloodBags.forEach(bag => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${bag.donationDate}</td>
                <td>${bag.expiryDate}</td>
                <td>${bag.bloodType}</td>
                <td>${bag.volume}</td>
                <td><button class="btn btn-danger" onclick="removeBloodBag('${bag.donationDate}')">Remove</button></td>
            `;
            BBTableBody.appendChild(row);
        });
    }

    window.removeBloodBag = function(donationDate) {
        let bloodBags = JSON.parse(localStorage.getItem('bloodBags')) || [];
        bloodBags = bloodBags.filter(bag => bag.donationDate !== donationDate);
        localStorage.setItem('bloodBags', JSON.stringify(bloodBags));
        loadBloodBags();
    };
});
