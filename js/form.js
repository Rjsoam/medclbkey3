// Get the alert modal and buttons
var alertModal = document.getElementById('alert-modal');
var closeBtn = document.getElementById('close-btn');
var redirectBtn = document.getElementById('redirect-btn');

// Get the button that triggers the modal
var alertBtn = document.getElementById('alert-btn');

// When the user clicks the button, show the modal
alertBtn.onclick = function() {
  alertModal.style.display = 'block';
}

// When the user clicks the close button, hide the modal
closeBtn.onclick = function() {
  alertModal.style.display = 'none';
}

// When the user clicks the redirect button, redirect to specified URL
redirectBtn.onclick = function() {
  window.location.href = 'https://example.com';
}

// When the user clicks anywhere outside of the modal, hide it
window.onclick = function(event) {
  if (event.target == alertModal) {
    alertModal.style.display = 'wide';
  }
}
