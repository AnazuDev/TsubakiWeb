// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form submission handling (console log)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    
    console.log('Message sent:', { name, email, message });
    
    alert('Thank you for your message, ' + name + '! We will get back to you soon.');
    
    e.target.reset(); // Reset form fields
});