/*Transiçao imgs */

let time= 5000,
      currentImageIndex= 0,
      images= document
                .querySelectorAll("#slider img")

      max = images.length;

function nextImage(){

    images[currentImageIndex]
        .classList.remove("item")

    currentImageIndex++

    if(currentImageIndex >= max)
         currentImageIndex= 0

    images[currentImageIndex]
        .classList.add("item")
    console.log(currentImageIndex)
}

function start(){
    setInterval(() => {
        //TROCA DE IMAGEM
        nextImage()
    }, time)
   
}
window.addEventListener("load", start)

/*Localstorege*/
const form = document.getElementById('form');

form.addEventListener('submit',(e)=> {
    e.preventDefault()
    let nome= document.getElementById('nome').value;
    let email= document.getElementById('email').value;

    let data= {
        nome, 
        email,

    }
    let convertData= JSON.stringify(data);

    localStorage.setItem('lead', convertData)
})

