
// let bag=[];
// console

document.querySelector("#logoImg").addEventListener("click",function(){
    window.location="index.html"
})


let btn=(document.querySelectorAll(".button"))
for(let i=0; i<btn.length;i++){
    
    btn[i].addEventListener("click",function(){
        let value=[];
        value.push(btn[i].innerText);
        display(value);
        console.log(value);
        
    //    let app= document.querySelectorAll(".button>div>.childDiv");
    //    for(let i=0;i<app.length;i++){
    //     app[i].innerHTML=""
    //     let p=document.createElement("p");
    //     p.innerHTML="Capture every task you work on. Take control over time intervals by simple time tracking"
    //     let a=document.createElement("a");
    //     app[i].append(p,a)
    //    }
    })

}

function display(value){
    document.querySelector("#img").innerHTML=""
    let arr=[
        {
            "images":"https://tmetric.com/media/1kxfndjp/img-advantages.svg",
            "name":"Time Tracking"
    
        },
        {
            "images":"https://tmetric.com/media/epxhwygn/img-advantages-project-management.svg",
            "name":"Project management"
        },
        {
            "images":"https://tmetric.com/media/ef3fhhpb/img-advantages-team-management.svg",
            "name":"Team Management"
        },
        {
            "images":"https://tmetric.com/media/hoqdfeg5/img-advantages-invoice.svg",
            "name":"Billing & Invoicing"
        },
        {
            "images":"https://tmetric.com/media/dc0o2m4j/img-advantages-reporting.svg",
            "name":"Reporting"
        },
        {
            "images":"https://tmetric.com/media/eovjubmf/img-advantages-time-off.svg",
            "name":"Time off"
        }
    ];
arr.forEach((el) => {
    if(el.name==value){
        let tag=document.createElement("img");
        tag.setAttribute("src",el.images);
        document.querySelector("#img").append(tag)
    }
    });


}

let res= document.querySelectorAll("#marketlinks>button");
res.forEach((el)=>{
el.addEventListener("click",function(){
    let t=el.innerText;
    console.log(t);
disLin(t);
})
})


function disLin(t){
    let newArr=[
        {
            
            "p":"We ultimately went with TMetric because it checked a lot of items on our want list. It’s both a desktop and web app, and has an API that we were able to integrate with our business management software. While that was the biggest selling point, we also really like the user interface, the Chrome extension, and built-in integration with Jira.",
            "image":"https://tmetric.com/media/hznb1sgs/photo-software-developers.png",
            "Name":"BizStream team",
            "proff":"Software developers"
        },
    
    {
        "p":"We’ve found TMetric to be both user friendly and robust. It was easy to setup which allowed us to begin leveraging the tool immediately. It also provides multiple layers of reporting which provides value to our organization on a number of different levels.",
        "image":"https://tmetric.com/media/dhbotvr1/photo-marketers.png",
        "Name":"Brian Reilly, BankBound",
        "proff":"Marketers"
    },
    {
        "p":"TMetric is faster, more convenient and cheaper, the support is responsive and they fixed some bugs quickly.",
        "image":"https://tmetric.com/media/bxyho4oy/photo-designers.png",
        "Name":"Swen Roethlisberger, Floowedit",
        "proff":"Designer"
    },
    {
        "p":"I recently transitioned from full-time employee to ‘consultant’. Needed an app to track projects, tasks and generate billing based on our agreement. TMetric handles this elegantly and I can access from my iPhone, iPad or PC- awesome!",
        "image":"https://tmetric.com/media/2pdfttnr/photo-contractors.png",
        "Name":"Jim Rolph, Manufacturer's ",
        "proff":"Contractors"
    },
    {
        "p":"After five months we are very happy with the app and will gladly renew the service. We are still finding new uses for it within our organization and it’s been pivotal for helping us gather better decision-making information, grow our topline and reduce our bottomline.",
        "image":"https://tmetric.com/media/ipkhp5ts/photo-consulting.png",
        "Name":"Galeno Chua, The Idea Founding Principal",
        "proff":"Consultants"
    },
        
    
    {
        "p":"There are plenty of available applications to monitor working time. We chose TMetric because of the suitable price and compatibility with Trello and Google Documents, which we use every day in our company.",
        "image":"https://tmetric.com/media/1nlgnvyj/photo-freelance.png",
        "Name":"Patryk Hoffmann, MyLead",
        "proff":"Freelancers"
    }
    ]
    newArr.forEach((elem)=>{
if(t==elem.proff){
    document.querySelector("#text").innerHTML=elem.p;
    document.querySelector("#clientName").innerHTML=elem.Name;
    document.querySelector("#imgClient").innerHTML=""
    let img=document.createElement("img");
    img.setAttribute("src",elem.image);
    document.querySelector("#imgClient").append(img)
}
    })
}

function bgColor(){
    var navBar=document.querySelector(".head_logo");
    var scrollValue=window.scrollY;
    if(scrollValue<120){
        navBar.classList.remove("bgcolor")
        
    }
    else{
    navBar.classList.add("bgcolor")
    console.log("object");
    }
}
window.addEventListener("scroll",bgColor);

document.querySelector("#get").addEventListener("click",function(){
   let ema= document.querySelector("input").value;
   if(ema==""){
    alert("Fill the form")
   }
   else{
    window.location="signUp.html";
   }
})
let start=document.querySelectorAll(".start");
start.forEach((el)=>{
    el.addEventListener("click",function(){
        window.location="signUp.html";
    })
})