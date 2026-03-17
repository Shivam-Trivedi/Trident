const API_URL = "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE";

document.getElementById("bookingForm")
.addEventListener("submit", async function(e){

e.preventDefault();

const data = {
name: document.getElementById("name").value,
phone: document.getElementById("phone").value,
email: document.getElementById("email").value
};

await fetch(API_URL,{
method:"POST",
body:JSON.stringify(data)
});

alert("Registration successful!");

});
