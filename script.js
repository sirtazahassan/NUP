document
.getElementById("signupForm")
.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmpassword = formData.get("confirmpassword");
    const city = formData.get("city");

    if (!name || !email || !password || !confirmpassword || !city) {
        document.getElementById("response").innerHTML =
         '<div class="alert alert-danger">Please fill in all fields.</div>';
        document.getElementById("response").style.display = "block";
        return;
    }

    if (password !== confirmpassword) {
        document.getElementById("response").innerHTML = 
         '<div class="alert alert-danger">Passwords do not match.</div>';
        document.getElementById("response").style.display = "block";
        return;
    }

    const successMessage =
     '<div class="alert alert-success">You are successfully Signed Up!</div>';
    document.getElementById("response").innerHTML = successMessage;
    document.getElementById("response").style.display = "block";

    const signupButton = document.getElementById("signupBtn");
    if (signupButton) {
        signupButton.style.display = "none";
    }

   

    console.log("You are successfully Signed Up!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmpassword);
    console.log("City:", city);

    document.getElementById("signupForm").reset();

    setTimeout(function(){
        window.location.href = "main.html";
    }, 500);
});

