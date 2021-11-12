//login
let Email1 = document.getElementById("Email1");
let Pass1 = document.getElementById("Pass1")
function validate2(){
    if(Email1.value.trim()=="" || Pass1.value.trim()==""){
        alert("Fields cannot be empty");
        return false;
    }

    else if(Pass1.value.length<8){
        alert("Password too short");
        Pass1.style.border ="2px solid red";
        return false;
    }
    else if(Pass1.value.length>8){
        Pass1.style.border ="2px solid green";
        return true;
    }
    else{
        return true;
    }
}

//signup
// let firstName = document.getElementById("firstname");
// let lastName = document.getElementById("lastname");
// let signupEmail = document.getElementById("email");
// let phone = document.getElementById("phone");
// let pass = document.getElementById("pass");
// let pass1 = document.getElementById("pass1");
function checkPass()
{
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var message = document.getElementById('confirmMessage');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    if(pass1.value == pass2.value){
        
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match"
    }else{

        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
} 
function validatephone(phone) 
{
    var maintainplus = '';
    var numval = phone.value
    if ( numval.charAt(0)=='+')
    {
        var maintainplus = '';
    }
    curphonevar = numval.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,Š\/<>?|`¬\]\[]/g,'');
    phone.value = maintainplus + curphonevar;
    var maintainplus = '';
    phone.focus;
}
// validates text only
function Validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}
// validate email
function email_validate(email)
{
var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if(regMail.test(email) == false)
    {
    document.getElementById("status").innerHTML    = "<span class='warning'>Email address is not valid yet.</span>";
    }
    else
    {
    document.getElementById("status").innerHTML	= "<span class='valid'>Thanks, you have entered a valid Email address!</span>";	
    }
}
// validate date of birth
function dob_validate(dob)
{
var regDOB = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/;

    if(regDOB.test(dob) == false)
    {
    document.getElementById("statusDOB").innerHTML	= "<span class='warning'>DOB is only used to verify your age.</span>";
    }
    else
    {
    document.getElementById("statusDOB").innerHTML	= "<span class='valid'>Thanks, you have entered a valid DOB!</span>";	
    }
}
// validate address
function add_validate(address)
{
var regAdd = /^(?=.*\d)[a-zA-Z\s\d\/]+$/;
  
    if(regAdd.test(address) == false)
    {
    document.getElementById("statusAdd").innerHTML	= "<span class='warning'>Address is not valid yet.</span>";
    }
    else
    {
    document.getElementById("statusAdd").innerHTML	= "<span class='valid'>Thanks, Address looks valid!</span>";	
    }
}
let date = document.getElementById("date");




// function validate1(){
//     if(firstName.value.trim()=="" || lastName.value.trim()=="" || signupEmail.value.trim()=="" || phone.value.trim()=="" ||date.value.trim()=="" ||pass.value.trim()==" "){
//         alert("Fields cannot be empty");
//         return false;
//     }
// }
// function phone1(phone){
//      var maintainplus = '';
//     var numval = phone.value
//     if ( numval.charAt(0)=='+' ){
//         var maintainplus = '';
//     }
//     curphonevar = numval.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g,'');
//     phone.value = maintainplus + curphonevar;
//     var maintainplus = '';
//     phone.focus;
//     // if(pass.value.length>8){
//     //     Pass1.style.border ="2px solid green";
//     //     return true;
//     // }
// }
// // function checkPass()
// // {
// //     if(pass.value == pass1.value){
// //         pass2.style.broder="2px solid green";
// //     }else{

// //         pass2.style.broder="2px solid red";
// //     }
// // } 