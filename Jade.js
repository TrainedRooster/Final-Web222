function formValidation() {
    clearErrors();
    let result=false;
    let phone = document.querySelector("#phonenumber").value;
    let postalCode = document.querySelector("#postalcode").value;
    let city = document.querySelector("#city").value;
    let Province =document.querySelector("#province")

function clearErrors() {
    document.querySelector("#errors").innerHTML = "";
} 
function validationCheck(value) {
    clearErrors();
    formValidation();

} 

function validatePhoneNumber(phone) {
    let errors = document.querySelector("#errors");
    let regex = /^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/;
    if(!regex.test(Phone)){
        alert("Invalid Phone number!");
        return false;
      }
    return true;
}

function validateZipcode(zipCode) {
    let errors = document.querySelector("#errors");
    let regex = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/;
    if(!regex.test(zipCode)){
        alert("Wrong formation of Zipcode");
        return false;
      }
    return true;
} 

function validateCity(city) {
    let errors = document.querySelector("#errors");
    let characters = "abcdefghijklmnopqrstuvwxyz";
    let result=true;
    for (let i = 0; i < city.length; i++) {
        let letter = city.substr(i, 1);
        if (characters.indexOf(letter.toLowerCase()) < 0) {
            errors.innerHTML += "<p>* Please do not include digits for city.</p>";
            result= false;
        }
    }
    return result; 
}

}

function validateFields(){
    if(!formValidation()){       
        event.preventDefault();
        var errors = document.getElementById("errors"); 
        errors.innerHTML += "<p>* Please check invalid field</p>";
    }
}