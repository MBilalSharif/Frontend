function handleContact(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation for demonstration
    if (name && email && message) {
        alert('Thank you for your message!');
        // Here you can add the code to send the form data to your email or server
    } else {
        alert('Please fill out all fields.');
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('.project').forEach(project => project.classList.toggle('dark-mode'));
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelectorAll('#contact form input, #contact form textarea').forEach(input => input.classList.toggle('dark-mode'));
}
