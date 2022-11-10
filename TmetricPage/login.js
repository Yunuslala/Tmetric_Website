

document.querySelector("form").addEventListener("submit",function(event){
event.preventDefault();
    var res=JSON.parse(localStorage.getItem("loginData"));
    var ans=display(res);
    if(ans==true){
        // alert("loginSuccesful")
        window.location="workspace.html"
    }else{
        alert("Wrong Credentials")
    }
})




function display(res){
    let flag=false;
    res.forEach((el)=>{
        let email=document.querySelector("#email").value;
        let password=document.querySelector("#password").value;
        if(el.email==email&&el.password==password){
            flag=true;
        }
    })
    if(flag==true){
        return true;
    }
    else{
        return false;
    }
}