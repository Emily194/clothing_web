document.addEventListener("DOMContentLoaded", function(){
  const emailInput = document.getElementById("email");
  const nameInput = document.getElementById("username");
  const phoneInput = document.getElementById("phone");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const signupForm = document.getElementById("sign-up");

  //const emailPattern = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3}){0,2}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3}){0,2}$/;
  const namePattern = /^[a-zA-Z0-9._-]+$/;
  const passwordPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
  const phonePattern = /^\d{8}$/;

  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("email-error");
  const phoneError = document.getElementById("phone-error");
  const passwordError = document.getElementById("password-error");
  const passwordMis = document.getElementById("password-mismatch");

  emailInput.addEventListener('blur', function()
  {
    if (!emailPattern.test(emailInput.value))
    {
      emailError.style.display='inline';
      emailError.textContent='Invalid email format'
      //emailInput.setCustomValidity("Invalid email format");
    }
    else
    {
      emailError.style.display='none';
      emailError.textContent='';
      //emailInput.setCustomValidity("");
    }
  });

  nameInput.addEventListener('blur', function()
  {
    setTimeout(()=>{
      if(!namePattern.test(nameInput.value))
      {
        usernameError.style.display='inline';
        usernameError.textContent='Allow only letters, numbers, -, _ and .';
      }
      else
      {
        usernameError.style.display='none';
        usernameError.textContent='';
      }
    }, 200);
  });

  phoneInput.addEventListener('blur', function()
  {
    setTimeout(()=>{
      if(!phonePattern.test(phoneInput.value))
      {
        phoneError.style.display='inline';
        phoneError.textContent='Invalid phone number (no space allowed)';
      }
      else
      {
        phoneError.style.display='none';
        phoneError.textContent='';
      }
    }, 200);
  });

  password.addEventListener('blur', function()
  {
    setTimeout(()=>{
      if(!passwordPattern.test(password.value))
      {
        passwordError.style.display='inline';
        passwordError.textContent='Password must be at least 8 characters long and contain at least one special character ! @ # $ % ^ & * ( ) - _ = + \ | [ ] { } ; : / ? . >';
      }
      else
      {
        passwordError.style.display='none';
        passwordError.textContent='';
      }
    }, 200);
  });

  confirmPassword.addEventListener('blur', function()
  {
    const passwordMis = document.getElementById("password-mismatch");
    setTimeout(()=>{
      if(confirmPassword.value != password.value)
      {
        passwordMis.style.display='inline';
        passwordMis.textContent='Password does not match'
      }
      else
      {
        passwordMis.style.display='none';
        passwordMis.textContent='';
      }
    }, 200);
  });

  signupForm.addEventListener("submit", function(event)
  {
    event.preventDefault();

    let isValid = true;

    nameInput.dispatchEvent(new Event("input"));
    emailInput.dispatchEvent(new Event("input"));
    phoneInput.dispatchEvent(new Event("input"));
    password.dispatchEvent(new Event("input"));
    confirmPassword.dispatchEvent(new Event("input"));

    if(usernameError.textContent || emailError.textContent || phoneError.textContent || 
      passwordError.textContent || passwordMis.textContent)
    {
      isValid=false;
      console.log(isValid);
    }
  
    if(isValid)
    {
      alert("Form is ready to submit");
    }
    else
    {
      alert("Please correct the errors before submitting the form");
    }
  });
});
