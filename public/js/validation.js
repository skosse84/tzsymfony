
let form = document.querySelector("form");
let file = document.querySelector("#form_src");
let img = new Image();

img.onload = function () {
    console.log("image load!");
};

document.addEventListener("DOMContentLoaded", (e)=>{
    if(file.value){
        img.src = URL.createObjectURL(file.files[0]);
    }
});

file.onchange = function () {
    img.src = URL.createObjectURL(file.files[0]);
}

form.addEventListener("submit", (e)=>{

    let fileData = file.files[0];

    if(!fileData){
        console.log("File is not set!");
        e.preventDefault();
    }else if(file.size > 8000){
        console.log("File size bigger than 8000kb!");
        e.preventDefault();
    }else if(img.height > 150){
        console.log("Image height bigger than 150px!");
        e.preventDefault();
    }else if(img.width > 200){
        console.log("Image width bigger than 200px!");
        e.preventDefault();
    }

})