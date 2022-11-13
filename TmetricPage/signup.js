let arr=JSON.parse(localStorage.getItem("loginData"))||[];
document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault()
    // console.log("object");
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    let check=document.querySelector("#checkbox").value;
    console.log(check);
    var obj={
        name,
        email,
        password
    }
    if(name==""||email==""||password==""){
        alert("Please Fill the Full deatails")
    }
    else{
        arr.push(obj)
        localStorage.setItem("loginData",JSON.stringify(arr));
        window.location="login.html";
    }
});
let btn=document.querySelector("#button").addEventListener("click",function(){
    
})

document.querySelector("#logoImg").addEventListener("click",function(){
    window.location="index.html"
})