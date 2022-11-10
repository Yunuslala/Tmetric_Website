document.querySelector("#why").addEventListener("click",function(){
   let a=document.createElement("a");
   a.setAttribute("href","https://www.google.com/")
   document.querySelector("#why").append(a);
})