
let form = document.querySelector("form");
let file = document.querySelector("#form_src");

let img = new Image();

img.onload = function () {
    console.log("image load!");
    clearErrClasses();
    checkSetFile();
};

document.addEventListener("DOMContentLoaded", (e)=>{
    if(file.value){
        img.src = URL.createObjectURL(file.files[0]);
    }
});

file.onchange = function (e) {
    let label = document.querySelector('.custom-file-label');
    label.innerHTML = e.target.files[0].name;
    clearErrClasses();
    checkSetFile();
    img.src = URL.createObjectURL(file.files[0]);
}

function clearErrClasses(){
    if(file.classList.contains("is-invalid")){
        file.classList.remove("is-invalid");
    }

    if(!file.classList.contains("is-valid")){
        file.classList.add("is-valid");
    }
}

function setError(errMess, e){
    if(file.classList.contains("is-valid")){
        file.classList.remove("is-valid");
    }
    file.classList.add("is-invalid");

    let tooltip = document.querySelector(".invalid-tooltip");
    if(tooltip){
        tooltip.innerHTML = errMess;
    }else{
        tooltip = document.createElement("div");
        tooltip.classList.add('invalid-tooltip');
        tooltip.innerHTML = errMess;
        file.insertAdjacentElement('afterend', tooltip);
    }

    if(e){
        e.preventDefault();
    }
}

function checkSetFile(e = null){
    let fileData = file.files[0];
    if(!fileData){
        setError("File size bigger than 8000kb!", e);
        console.log("File is not set!");
    }else if(fileData.size > 8000){
        setError("File size bigger than 8000kb!", e);
        console.log("File size bigger than 8000kb!");
    }else if(img.height > 150){
        setError("Image height bigger than 150px!", e);
        console.log("Image height bigger than 150px!");
    }else if(img.width > 200){
        setError("Image width bigger than 200px!", e);
        console.log("Image width bigger than 200px!");
    }
}

form.addEventListener("submit", (e)=>{
    clearErrClasses();
    checkSetFile(e);
})