/* SmartNet WiFi Portal - JavaScript */

document.addEventListener('DOMContentLoaded', function() {
    // Portal initialization
    console.log('SmartNet WiFi Portal loaded');
    
    // Form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (!username) {
                e.preventDefault();
                alert('Please enter your username or voucher code');
            }
        });
    }
});

// WhatsApp link handler
function openWhatsApp() {
    const phone = '64363635';
    const message = 'Hello, I need help with SmartNet WiFi';
    window.open('https://wa.me/' + phone + '?text=' + encodeURIComponent(message), '_blank');
}
