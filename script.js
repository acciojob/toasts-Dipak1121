//your JS code here. If required.
let addBtn = document.getElementById("add-button");
let cancelBtn = document.getElementById("clear-button");
let textArea = document.getElementById("message-content");
let duration = document.getElementById("duration");
let isCancelable = document.getElementById("cancelable");
let radioBtn = document.getElementById("success");
let toasts = document.getElementById("toasts");
addBtn.addEventListener("click", onAddClick);
cancelBtn.addEventListener("click", onCancelClick);

function onAddClick(){
    let div = document.createElement("div");
    div.classList.add("toast");
    let para = document.createElement("p");
    para.classList.add("message");
    if(textArea.value == ""){
        if(radioBtn.checked){
            para.innerText = "Success!"
        }
        else{
            para.innerText = "Error."
        }
    }
    else{
        para.innerText = textArea.value;
    }

    if(radioBtn.checked){
        div.classList.add("success-toast");
    }
    else{
        div.classList.add("error-toast");
    }

    div.appendChild(para);
    
    if(isCancelable.checked){
        let deleteBtn = document.createElement("button");
        deleteBtn.addEventListener("click", deleteToast);
        deleteBtn.innerText = "X";
        deleteBtn.classList.add("cancel-button");
        div.appendChild(deleteBtn);
    }

    toasts.appendChild(div);

    setTimeout(function(){
    div.remove();
    }, parseInt(duration.value));

    duration.value = "3000";
    textArea.value = "";
    radioBtn.checked = true;
    isCancelable.checked = false;
}

function onCancelClick(){
    // console.log("Deleting...");
    let allToasts = document.getElementsByClassName("toast");

    while(allToasts.length > 0){
        toasts.removeChild(allToasts[0]);
    }
    
}

function deleteToast(event){
    event.target.parentNode.remove();
}