function checkPassword(str)
            {
              var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
              return re.test(str);
            }
            function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
          
            function checkForm(form)
            {
              if(form.username.value == "") {
                alert("Error: Username cannot be blank!");
                form.username.focus();
                return false;
              }
              else if(form.email.value == "") {
                alert("Error: email cannot be blank!");
                form.email.focus();
                return false;
              }
              else if(form.pwd1.value == "") {
                alert("Error: Password cannot be blank!");
                form.pwd1.focus();
                return false;
              }
              
              else if(!validateEmail(form.email.value)) {
                  alert("The adress mail you have entered is not valid!");
                  form.email.focus();
                  return false;
                }
              
              
                else if(!checkPassword(form.pwd1.value)) {
                  alert("The password you have entered is not valid!");
                  form.pwd1.focus();
                  return false;
                }
           
            
               
              
            }