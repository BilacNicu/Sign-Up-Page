document.getElementById("createAccountBtn").addEventListener("click", function(event) {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("password_confirm").value;

    if (password !== confirm_password) {
        alert("Passwords do not match!");
        event.preventDefault(); // Prevent form submission
    }
});