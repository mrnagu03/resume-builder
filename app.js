let menuPad=document.querySelector('.menu');
let menuBar=document.querySelector('.menubar');
let button=document.querySelector('.explor');
let load=document.querySelector('.loading');
let card1=document.querySelector('#card1')
menuBar.addEventListener("click",function(){
    menuPad.classList.toggle('add');
})
button.addEventListener("click",()=>{
    window.location="loader.html";
   })

    let textbox=document.querySelectorAll(".textbox");
    textbox.forEach(function(val){
       val.addEventListener("click",()=>{
     val.classList.toggle("active")

       })
    })
    let main=document.querySelector(".main")
    let cardbox=document.querySelector(".cardbox")
    let cursor=document.querySelector(".cursor");
    let cursor2=document.querySelector(".cursor2");
    main.addEventListener("mousemove",(load)=>{
        
    cursor.style.left= load.x+"px";
    cursor.style.top= load.y+"px";
    })
    cardbox.addEventListener("mousemove",(e)=>{
        console.log(e.x)
        console.log(e.y)
        
    cursor2.style.left= e.x+"px";
    cursor2.style.top= e.y+"px";
    })

    main.addEventListener("mouseenter",(load)=>{
    cursor.style.opacity=1;
    
    })
    main.addEventListener("mouseleave",(load)=>{
        cursor.style.opacity=0;
    })
  
    card1.addEventListener("click",()=>{
        window.location="cards.html"
    })