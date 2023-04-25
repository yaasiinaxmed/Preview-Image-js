const uploadImage = document.querySelector("#uploadImage");
const imageBox = document.querySelector(".image-box");
const selectBtn = document.querySelector("#select-btn");

selectBtn.addEventListener("click", () => {
    uploadImage.click();
});

uploadImage.addEventListener("change", (e) => {
    selectBtn.innerHTML = `<div id="loader"></div> Uploading...`;

    setTimeout(() => {
        if(e.target.files.length == 0){
            return;
        }
        
        selectBtn.innerText = 'Change Image';

        let image = document.createElement("img");
        let file = e.target.files[0];
        let url = URL.createObjectURL(file);
    
        image.src = url;
    
        imageBox.append(image);
        
    }, 2000)
});