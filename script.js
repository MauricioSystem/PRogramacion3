
document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');

    heading.addEventListener('mouseover', function() {
        heading.style.color = '#1e9cff'; 
    });

    heading.addEventListener('mouseout', function() {
        heading.style.color = '#e0e0e0'; 
    });
});
