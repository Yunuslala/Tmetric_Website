document.querySelector("#createSpace").addEventListener("click",function(){
    window.location="createWork.html"
    console.log("space")
})
document.querySelector("#Space").addEventListener("click",function(){
    window.location="createWork.html"
    console.log("space")
})


document.querySelector("#logoImg").addEventListener("click",function(){
    window.location="index.html"
})



fetch(`C:\Masai_Projects\images.json`).then((res)=>res.json()).then((data)=>{
    console.log(data)})