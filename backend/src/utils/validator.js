const validator =require("validator");

// req.body 

const validate = (data)=>{
   
    const mandatoryField = ['firstName',"email",'password'];

    const IsAllowed = mandatoryField.every((k)=> Object.keys(data).includes(k));

    if(!IsAllowed)
        throw new Error("Some Field Missing");

    if(!validator.isEmail(data.email))
        throw new Error("Invalid Email");

    // More lenient password validation - at least 8 chars with uppercase, lowercase, and number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(!passwordRegex.test(data.password))
        throw new Error("Password must be at least 8 characters with uppercase, lowercase, and number");
}

module.exports = validate;