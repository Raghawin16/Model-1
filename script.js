document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get email and password values
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const errorMessage = document.getElementById('error-message');
  
    // Clear any previous error messages
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
  
    // Basic email and password validation
    if (!validateEmail(email)) {
      errorMessage.textContent = 'Invalid email format.';
      errorMessage.style.display = 'block';
      return;
    }
  
    if (!validatePassword(password)) {
      errorMessage.textContent = 'Password must contain at least one special character.';
      errorMessage.style.display = 'block';
      return;
    }
  
    // Redirect to the "Senchola" home page
    window.location.href = 'https://university.senchola.com/registration/';
  
    // For demonstration purposes, we'll just show an alert:
    // alert('Email: ' + email + ', Password: ' + password);
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function validatePassword(password) {
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharPattern.test(password);
  }
 
