export function Validation(values){
    let error = {}
    //const email_pattern = /^[^\s@]+@[^\s@]+[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.username === "")
    {
        error.username = "Name should not be empty";
    }
    // else if(test){}
    else{
        error.username = "";
    }

    if(values.email === "")
    {
        error.email = "Email should not be empty";
    }
    // else if(email_pattern.test(values.email)){
    //     error.email = "Invalid email";
    // }
    else{
        error.email = "";
    }

    if(values.password === "")
    {
        error.password = "Password should not be empty";
    }
    else if(password_pattern.test(values.password)){
        error.password = "Bad password";
    }
    else{
        error.password = "";
    }

    if(values.User === "")
    {
        error.user = "Please select the user";
    }
    else
    {
        error.user = ""
    }

    return error;
}

export function CheckValidation(errors)
{
    return (errors.username === "" && errors.email === "" && errors.password === "" && errors.user === "");
}