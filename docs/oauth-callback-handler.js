document.addEventListener("DOMContentLoaded", function(event) {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const error = urlParams.get('error');

    if (code) {
        console.log('Authorization code:', code); // Log to console or display on the page
        document.getElementById('output').textContent = 'Authorization code received. Please wait...';
        // Optionally, redirect or make a request to a serverless function for token exchange
    } else if (error) {
        console.error('Error during authorization:', error);
        document.getElementById('output').textContent = 'Error during authorization. ' + error;
    } else {
        console.error('No authorization code or error received.');
        document.getElementById('output').textContent = 'No response received from Google.';
    }
});
