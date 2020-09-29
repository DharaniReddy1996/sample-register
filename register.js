function validate() {
    if (document.register.fname.value == "") {
        alert("please enter valid name");
        document.register.fname.focus();
        return false;
    }

    if (document.register.password.value == "") {
        alert("please enter valid password");
        document.register.password.focus();
        return false;
    }
    if (document.register.mobile.value == "" || isNaN(document.register.mobile.value)) {

        alert("Please provide a  valid number")
        document.register.mobile.focus();
        return false;
    }
    return true;
}