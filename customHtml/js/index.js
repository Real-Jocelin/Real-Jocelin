// SmartNet WiFi Portal - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Portal initialization
    console.log('SmartNet WiFi Portal loaded');
    
    // Form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const username = document.getElementById('username').value;
            
            if (!username) {
                e.preventDefault();
                alert('Please enter your username or voucher code');
            }
        });
    }
});