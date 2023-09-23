var User = document.getElementById("UserName");
var pwd = document.getElementById("pwd");
var button = document.getElementById("submit");

button.addEventListener("click",()=>{
    if(User.value=="Shreya" && pwd.value=="700"){
        alert("Congrats" + " " + User.value + " " + "All the best for Quiz");

        window.location="index.html";
    }
    else{
        alert("error");
    }
})



