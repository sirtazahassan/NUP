document
.getElementById("loginForm")
.addEventListener("submit", function(event){
    event.preventDefault();


    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password =formData.get("password");

    if (!email || !password){
        document.getElementById("response").innerHTML = 
        '<div class="alert alert-danger">Please fill in all fields.</div>';
        document.getElementById("response").style.display = "block";
        return;
    }

    const successMessage =
    '<div class="alert alert-success">You are successfully Signed Up!</div>';
   document.getElementById("response").innerHTML = successMessage;
   document.getElementById("response").style.display = "block";

   const loginButton = document.getElementById("loginBtn");
   if (loginButton) {
       loginButton.style.display = "none";
   }

   console.log("You are successfully Loged In!");
   console.log("Email:", email);
   console.log("Password:", password);

   document.getElementById("loginForm").reset();

   setTimeout(function(){
    window.location.href = "main.html";
}, 500);

})