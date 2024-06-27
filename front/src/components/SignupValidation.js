function validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (!values.pseudo) {
        error.pseudo = "Pseudo is required";
    } else {
        error.pseudo = "";
    }
    
    if (!values.firstName) {
        error.firstName = "First Name is required";
    } else {
        error.firstName = "";
    }

    if (!values.lastName) {
        error.lastName = "Last Name is required";
    } else {
        error.lastName = "";
    }

    if (!values.email) {
        error.email = "Email is required";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email is invalid";
    } else {
        error.email = "";
    }

    if (!values.password) {
        error.password = "Password is required";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Incorrect password";
    } else {
        error.password = "";
    }
    return error;
}

export default validation;
