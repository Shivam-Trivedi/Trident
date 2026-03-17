const API_URL = "https://docs.google.com/spreadsheets/d/1Tzw5Xo0oTpvBaxdcKi2jSuSYjUEZrQYOdACXlEOIC-I/edit?gid=0#gid=0";

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
