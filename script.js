const imgContainer = document.querySelector('.image-container')
const images = document.querySelectorAll('img')

function selectActiveImage(e){
    if(e.target.nodeName != "IMG") return 
    Array.from(images).forEach(img=>{
        img.classList.remove('img-active')
    })
    const curImg = e.target
    curImg.classList.toggle('img-active')
}


imgContainer.addEventListener('click',selectActiveImage)