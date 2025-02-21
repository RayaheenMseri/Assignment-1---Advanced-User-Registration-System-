
const weakPasswords = ["password", "123456", "qwerty", "abc123", "letmein", "welcome"];

export function validateForm(companyName,commercialRegistrationNumber,email,phoneNumber,password,confirmPassword,city,Region,zipCode,businessType,Terms) {
    let errors = {};

    if (!companyName) {
        errors.companyName = "company Name is required!";
    }
    if (!commercialRegistrationNumber) {
        errors.commercialRegistrationNumber = "Commercial Registration Number is required!";
    }else if(commercialRegistrationNumber.length != 10){
        errors.commercialRegistrationNumber = "Commercial Registration Number is must be 10 digits.";
    }
    if (!city) {
        errors.city = "City is required!";
    }
    if (!Region) {
        errors.Region = "Region is required!";
    }
    if (!zipCode) {
        errors.zipCode = "Zip Code is required!";
    }else if(zipCode.length != 5){
        errors.zipCode = "Zip Code must be 5 digit.";
    }
    if (!businessType) {
        errors.businessType = "Business Type is required!";
    }
    if (Terms == false) {
        errors.Terms = "You must accept the Terms & Conditions!";
    }
    if (!phoneNumber) {
        errors.phoneNumber = "Phone number is required!";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.email = "Invalid email format!";
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
        errors.password = "Password must have uppercase, lowercase, number, and special character."
    } else if (weakPasswords.includes(password.toLowerCase())) {
        errors.password = "This password is too common.";
    }if(confirmPassword != password){
        errors.confirmPassword = "Passwords do not match!";
    }

    return errors

}