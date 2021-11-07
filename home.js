/*const tagContainer = document.querySelector(".tag-container");

const input = document.querySelector(".tag-container input");

var tags = [];

function createTag(label){
    const div = document.createElement("div");
    div.setAttribute("class","tag");
    const span = document.createElement("span");
    span.innerHTML = label;
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class","material-icons");
    closeBtn.setAttribute("data-item",label);
    closeBtn.innerHTML = "close";

    div.appendChild(span);
    div.appendChild(closeBtn);
    return div;
}

function reset(){
    document.querySelectorAll(".tag").forEach(function(tag){
        tag.parentElement.removeChild(tag);
    })
}

function addTags(){
    reset();
    tags.slice().reverse().forEach(tag => {
        const input = createTag(tag);
        tagContainer.prepend(input);
    });
}

input.addEventListener("keyup",function(e){
    if(e.key == "Enter" && input.value.length >= 1){
        tags.push(input.value);
        addTags();
        input.value = "";
    }
    e.preventDefault();
})

tagContainer.addEventListener("click",function(e){
    if(e.target.tagName == "I"){
        const value = e.target.getAttribute("data-item");
        const index = tags.indexOf(value);
        tags = [...tags.slice(0,index),...tags.slice(index+1)];
        addTags();
    }
    e.preventDefault();
})


*/


// let jdiv=document.getElementsByClassName("jobox");
// let listarr=[];
// for(let i=0;i<jdiv;i++){
//     listarr.push(jdiv[i]);
// }
// function searchh(inputTag){
//     for(let j=""; j<inputTag.length;j++)
//     {
//         if(j!=inputTag)
//         {
            
//         }
//     }


// }


let listDiv=document.getElementsByClassName("jobox");
let arrayList=[];
for (let i = 0; i < listDiv.length; i++) {
arrayList.push(listDiv[i]) ;   
}

function searsh(term)
 {
     for (let i = 0; i < arrayList.length; i++) {
         if (arrayList[i].innerhtml.includes(term)!==true && term!=" ") 
         {
             arrayList[i].style.display="none";
         }
         
     }
    
}
let btns =document.querySelectorAll(".bb");
let inp= document.getElementById("arr_input");
for (let i = 0; i < btns.length; i++) 
{
    btns[i].addEventListener("click",function ()
     {
            document.getElementById("arr_input").value=btns[i].innerhtml;
        
    })
    
}
