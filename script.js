//Main Global variables
const
form = document.querySelector('form'),
password = document.getElementById('password'),
confirmPsw = document.getElementById('confirm-password');

//Event Listeners
password.onfocus = showInfo;
password.onblur = () => password.classList.remove('focused');
form.onsubmit = checkIfValid;

//Event Listeners CallBack Functions
function showInfo() {
    this.parentNode.classList.remove('invalid');
    this.parentNode.classList.remove('mis-match');
    confirmPsw.parentNode.classList.remove('invalid');
    confirmPsw.parentNode.classList.remove('mis-match');
    this.classList.add('focused')
}

function checkIfValid() {
    const field1Psw = password.value;
    const field2Psw = confirmPsw.value;
    const regExp = /^.{6,20}$/
    let formIsValid = true;
    console.log(field1Psw +' '+field2Psw)
    console.log(!(regExp.test(field2Psw)))
    if(!(regExp.test(field1Psw))) {
        password.parentNode.classList.add('invalid');
        formIsValid = false;
    } else if(field1Psw !== field2Psw) {
        password.parentNode.classList.add('mis-match');
        confirmPsw.parentNode.classList.add('mis-match');
        formIsValid = false;
    }
    return formIsValid;
}