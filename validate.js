let USERS_DB = [];

function signup(isSubmit) {
    const firstName = document.getElementById('firstName-input').value;
    const lastName = document.getElementById('lastName-input').value
    const email = document.getElementById('email-input').value
    const password = document.getElementById('password-input').value
    const confirmPassword = document.getElementById('confirm-password-input').value
    const agreeAns = document.getElementById('invalidCheck').checked
    const submit = document.getElementById('submit-input').value

    let error = [];
    if (firstName.length >= 3){
        document.getElementById('valid-feedback-first-name').style.display = 'block';
        document.getElementById('invalid-feedback-first-name').style.display = 'none';
        error.push(false)
    }else{

        document.getElementById('valid-feedback-first-name').style.display = 'none';
        document.getElementById('invalid-feedback-first-name').style.display = 'block';
        
    }

    if (lastName.length >= 3){
        document.getElementById('valid-feedback-last-name').style.display = 'block';
        document.getElementById('invalid-feedback-last-name').style.display = 'none';
        error.push(false)
    }else{
        document.getElementById('valid-feedback-last-name').style.display = 'none';
        document.getElementById('invalid-feedback-last-name').style.display = 'block';
    }
    if (email.includes("@") && 
        email.includes(".") && 
        email.indexOf("@") > 0 &&
        email.substr(email.lastIndexOf('.') + 1).length >= 2){
        document.getElementById('email-valid-feedback').style.display = 'block';
        document.getElementById('email-invalid-feedback').style.display = 'none';
        error.push(false)
    }else{
        document.getElementById('email-valid-feedback').style.display = 'none';
        document.getElementById('email-invalid-feedback').style.display = 'block';
        
    }

    if (password.length >= 8 && password.length !== 0){
        document.getElementById('password-valid-feedback').style.display = 'block';
        document.getElementById('password-invalid-feedback').style.display = 'none';
        error.push(false)
    }else{
        document.getElementById('password-valid-feedback').style.display = 'none';
        document.getElementById('password-invalid-feedback').style.display = 'block';
    }

    if(password !== confirmPassword) {
		document.getElementById('confirm-password-invalid-feedback').style.display = 'block'
		//error = true
	} else {
		document.getElementById('confirm-password-invalid-feedback').style.display = 'none'
        error.push(false);
	}

    if(agreeAns) {
        document.getElementById("invalid-msg").style.display = "none"
        error.push(false);
    } else {
        document.getElementById("invalid-msg").style.display = "block"
       
    }

    console.log("Submit is: "+ isSubmit)
    console.log("error is:"+ error.length)
    if(error.length == 6 && isSubmit) {
        let userDetails = {
      firstName,
      lastName,
      email,
      password,
    }
        USERS_DB.push(userDetails)
        alert('Your details have been saved successfully!')
        document.getElementById('sign-up-form').reset()
        console.log(USERS_DB)
    }
}





