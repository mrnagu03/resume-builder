let back=document.querySelector(".back");
back.addEventListener("click", ()=>{
    window.location="index.html";
})
let slides=document.querySelectorAll(".slider");
let noOfslides=slides.length;
console.log(noOfslides)
let counter=0;
slides.forEach(
    (slider,index)=>{
        slider.style.top = `${index * 100}%`
        
    }
)
let nextBt=document.querySelector(".next");
let prevBt=document.querySelector(".prev");

nextBt.addEventListener("click",()=>{
    counter++
    slideBox()   
})
prevBt.addEventListener("click",()=>{
      counter--
        slideBox()
        })

let slideBox=()=>{
    slides.forEach((slider)=>{
        slider.style.transform= `translateY(-${counter * 100}%)`

    })
}

let addbtn=document.querySelector(".add");
let addbtn2=document.querySelector(".add-p");
let workPage=document.querySelector(".work");
let deletBtn=document.querySelector(".delet");
let deletBtn2=document.querySelector(".delet-p");
let projectPage=document.querySelector(".project")

addbtn.addEventListener("click",()=>{
  let addBox=document.createElement("textarea");
  addBox.setAttribute("rows",5)
  addBox.className="newWork";
  workPage.insertBefore(addBox,addbtn)
  deletBtn.addEventListener("click",()=>{
    workPage.removeChild(addBox);
  });


})
addbtn2.addEventListener("click",()=>{
    let addBox1=document.createElement("textarea");
    addBox1.setAttribute("rows",5)
    addBox1.className="newWork";
    projectPage.insertBefore(addBox1,addbtn2)
    deletBtn2.addEventListener("click",()=>{
       
      projectPage.removeChild(addBox1);
    });
  
  
  })
  //generate btn
 
  let genrateBtn=document.querySelector(".cv")
  genrateBtn.addEventListener("click",()=>{
    document.querySelector(".box2").style.display="flex"
    document.querySelector(".box2").style.alignItems="center"
    document.querySelector(".box2").style.juctifyContent="center"
    //personal feilds
    document.querySelector(".name").innerHTML=document.querySelector(".fname").value;
    document.querySelector(".number").innerHTML=document.querySelector(".phonen").value;
    document.querySelector(".addr").innerHTML=document.querySelector(".adress").value;
    document.querySelector(".statename").innerHTML=document.querySelector(".state").value;
    document.querySelector(".cityname").innerHTML=document.querySelector(".city").value;
   document.querySelector(".email").innerHTML=document.querySelector(".mail").value;
  //  social mediea feilds
   document.querySelector(".fbl").innerHTML=document.querySelector(".fb").value;
   document.querySelector(".igl").innerHTML=document.querySelector(".ig").value;
   document.querySelector(".lnl").innerHTML=document.querySelector(".ln").value;
   
   //eductional feilds

   document.querySelector(".schname").innerHTML=document.querySelector(".scname").value;
   document.querySelector(".schpass").innerHTML=document.querySelector(".scpass").value;
   document.querySelector(".schscore").innerHTML=document.querySelector(".scscore").value;
   document.querySelector(".objbox").innerHTML=document.querySelector(".obj").value;
   document.querySelector(".puname").innerHTML=document.querySelector(".pucname").value;
   document.querySelector(".pupass").innerHTML=document.querySelector(".pucpass").value;
   document.querySelector(".puscore").innerHTML=document.querySelector(".pucresult").value;
   document.querySelector(".degname").innerHTML=document.querySelector(".degreename").value;
   document.querySelector(".degpass").innerHTML=document.querySelector(".degreepass").value;
   document.querySelector(".degscore").innerHTML=document.querySelector(".degreescore").value;
  //  objective feild..
   document.querySelector(".objbox").innerHTML=document.querySelector(".obj").value;

   
  })
 