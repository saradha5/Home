function formValidation() {    
    var uid = document.registration.unamesignup;  
    var uemail = document.registration.emailsignup;  
    var passid = document.registration.passwordsignup;  
    var cpassid = document.registration.passwordsignup_confirm;  

    if(userid_validation(uid,5,12))  
    {  
        if(passid_validation(passid,7,12))  
        {
            if(cpassid_validation(cpassid,7,12))
            {
                if(allLetter(uid))  
                {  
                    if(ValidateEmail(uemail))  
                    {
                        if(ValidatePwd(passid,cpassid))
                        {

                        }

                    }
                }
            }
        }
        
    }
    return false;
}

function loginformValidation() {    
    var uid = document.registration.username;  
    var passid = document.registration.password;  
    
    if(userid_nullvalidation(uid))  
    {  
        if(passid_validation(passid,7,12))  
        {
    
        }
    }
    return false;
}
function userid_nullvalidation(uid)
{
    var uid_len = uid.value.length;  
    if (uid_len == 0)  
    {  
        alert("User Id should not be empty);  
        uid.focus();  
        return false;  
    }  
    return true;  
}  
}
function userid_validation(uid,mx,my)  
{  
    var uid_len = uid.value.length;  
    if (uid_len == 0 || uid_len >= my || uid_len < mx)  
    {  
        alert("User Id should not be empty / length be between "+mx+" to "+my);  
        uid.focus();  
        return false;  
    }  
    return true;  
}  
function passid_validation(passid,mx,my)  
{  
    var passid_len = passid.value.length;  
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)  
    {  
        alert("Password should not be empty / length be between "+mx+" to "+my);  
        passid.focus();  
        return false;  
    }  
    return true;  
}  
function cpassid_validation(cpassid,mx,my)  
{  
    var cpassid_len = cpassid.value.length;  
    if (cpassid_len == 0 ||cpassid_len >= my || cpassid_len < mx)  
    {  
        alert("Confirm Password should not be empty / length be between "+mx+" to "+my);  
        cpassid.focus();  
        return false;  
    }  
    return true;  
}  

function allLetter(uname)  
{   
    var letters = /^[A-Za-z]+$/;  
    if(uname.value.match(letters))  
    {  
        return true;  
    }  
    else  
    {  
        alert('Username must have alphabet characters only');  
        uname.focus();  
        return false;  
    }  
}  
function ValidateEmail(uemail)  
{  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(uemail.value.match(mailformat))  
    {  
        return true;  
    }  
    else  
    {  
        alert("You have entered an invalid email address!");  
        uemail.focus();  
        return false;  
    }  
}
function ValidatePwd(passid,cpassid)
{
    if(passid.value==cpassid.value)
    {
        return true;
    }
    else
    {
        alert("Confirm password must be same as password");  
        cpassid.focus();  
        return false;  
    }
    
}