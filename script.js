let btns=document.querySelectorAll(".Btn");
let Input=document.querySelector(".input");
let clear=document.querySelector(".Btn1");
let equal=document.querySelector(".Btn2");
let btns1=document.querySelectorAll(".Btn3");
btns.forEach((Btn) =>{
    console.log(Btn)
    Btn.addEventListener("click",()=>{
        Input.innerHTML+=Btn.innerHTML;
    })
})
clear.addEventListener("click",()=>{
    Input.innerHTML="";
})
btns1.forEach((Btn3) =>{
    Btn3.addEventListener("click",()=>{
        Input.innerHTML+=Btn3.innerHTML;
    })
})
equal.addEventListener("click",()=>{
    if(Input.innerHTML===""){
        Input.innerHTML="";
    }else{
    let ans=eval(Input.innerHTML);
    Input.innerHTML=ans;
    }
})