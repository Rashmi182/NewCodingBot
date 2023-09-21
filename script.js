document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        // Simulate form submission (you can replace this with actual form submission)
        console.log('Form Data:', formData);

        // Optionally, you can send this data to the server using fetch or an AJAX library.
        // Example:
        // fetch('/submit-form', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Handle the response from the server here
        // });
    });
});