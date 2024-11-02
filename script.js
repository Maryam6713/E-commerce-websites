document.addEventListener('DOMContentLoaded', function() {
    // On page load, show the stored username if available
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('usernameDisplay').innerText = `Welcome, ${savedUsername}!`;
    }

    // Form submission event listener
    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        const username = document.getElementById('username').value; // Get the entered username
        if (username) {
            localStorage.setItem('username', username); // Store the username in localStorage
            document.getElementById('usernameDisplay').innerText = `Welcome, ${username}!`; // Update navbar with username
        }
    });
});