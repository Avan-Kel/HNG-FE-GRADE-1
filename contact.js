const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  // Clear previous errors
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  const fullName = form.fullName.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  // Full Name
  if (!fullName) {
    document.getElementById('error-fullName').textContent = 'Full name is required.';
    valid = false;
  }

  // Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    document.getElementById('error-email').textContent = 'Email is required.';
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById('error-email').textContent = 'Email is invalid.';
    valid = false;
  }

  // Subject
  if (!subject) {
    document.getElementById('error-subject').textContent = 'Subject is required.';
    valid = false;
  }

  // Message
  if (!message) {
    document.getElementById('error-message').textContent = 'Message is required.';
    valid = false;
  } else if (message.length < 10) {
    document.getElementById('error-message').textContent = 'Message must be at least 10 characters.';
    valid = false;
  }

  if (valid) {
    successMessage.hidden = false;
    form.reset();
  } else {
    successMessage.hidden = true;
  }
});
