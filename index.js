const buttonE1=document.querySelectorAll("button");

const inputE1=document.getElementById("view");


for(let i=0 ; i<buttonE1.length ; i++){
    buttonE1[i].addEventListener("click", (event)=>{
        event.preventDefault();
      const buttonvalue= buttonE1[i].textContent;
      if(buttonvalue==="c"){
        clear();
      }else if(buttonvalue==="="){
        result();
      }else if(buttonvalue==="del"){
        deletee();
      }
        else{
        appendValue(buttonvalue);
      }
    });
}
let last;
function clear(){
 inputE1.value="";
};
function deletee(){
   inputE1.value= inputE1.value.substring(0,inputE1.value.length -1)
};
function result(){
inputE1.value=eval(inputE1.value);
};
function appendValue(buttonvalue){
inputE1.value += buttonvalue;
};