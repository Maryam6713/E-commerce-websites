


document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Form ko submit hone se roke

    const username = document.getElementById('username').value; // User ka naam le
    localStorage.setItem('username', username); // Local storage me username store kare
    document.getElementById('usernameDisplay').innerText = `Welcome, ${username}!`; // Navbar par naam dikhaye
});





