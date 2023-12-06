var form = document.getElementById('form')
form.addEventListener("submit" , function(a) {
    a.preventDefault() 

    var user = document.getElementById('user').value ;
    var email = document.getElementById('email').value;
    
    var p = document.getElementById('a').innerHTML= user;
    var p = document.getElementById('p').innerHTML= email;
}) 