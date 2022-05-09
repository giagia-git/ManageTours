function checkAccount(hoten) {
    return true;
}

function checkPassword(password) {
    return true;
}

function checkRepassword(password,repassword) {
    return password.value == repassword.value ? true : false;
}

function checkEmail(email) {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(email.value)) {
        return true;
    }
    return false;
}