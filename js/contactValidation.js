const form = document.getElementById('contact-form');
const submit = document.getElementById('submit');
const email = document.getElementById('contact-email');
const telephone = document.getElementById('contact-telephone');
const message = document.getElementById('contact-message');
let valErrors = false;

function handleFormValidation() {
  const validPhone = /\d{3}\-\d{3}\-\d{4}/g;
  const validEmail = /\S+@\S+\.\S+/g;
  valErrors = false;
  //  email validation
  if (!email.value) {
    setErrorFor(email, 'Email is required.');
  } else {
    !validEmail.test(email.value)
      ? setErrorFor(email, 'Please enter a valid email.')
      : setSuccessFor(email);
  }
  // telephone validaiton
  if (!telephone.value) {
    setErrorFor(telephone, 'Phone number is required.');
  } else if (!validPhone.test(telephone.value)) {
    setErrorFor(telephone, 'Phone number must match required format.');
  } else {
    setSuccessFor(telephone);
  }
  //  message validation
  if (message.value.length <= 10) {
    setErrorFor(message, 'Message must be longer than 10 characters');
  } else {
    setSuccessFor(message);
  }
}
form.addEventListener('submit', function (event) {
  handleFormValidation();
  if (valErrors) {
    event.preventDefault();
  }
});

setErrorFor = (input, message) => {
  const span = input.nextElementSibling;
  input.className = 'input-error';
  span.innerText = message;
  valErrors = true;
};
setSuccessFor = (input, message) => {
  const span = input.nextElementSibling;
  input.className = 'input-success';
  span.innerText = '';
};
