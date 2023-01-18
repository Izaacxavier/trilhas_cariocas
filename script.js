
function photosNavegation (){
const photos = document.querySelectorAll('.trilhas-photos li')
const photosDetails = document.querySelectorAll('.details')



function photosNavegation (index){
    photosDetails.forEach((foto)=>{
        foto.classList.remove("ativo")
    })
    photosDetails[index].classList.add("ativo")
}

photos.forEach((item, index) => {
    item.addEventListener('click', function(){
        photosNavegation(index)
    })
})
}
photosNavegation();

function accordion (){

const contactTitle = document.querySelectorAll('.js-accordion dt')

function accordionActive (){
    this.classList.toggle("ativo")
    this.nextElementSibling.classList.toggle("ativo")
}

contactTitle.forEach((item) => {
    item.addEventListener('click', accordionActive)
})

}

accordion();

const linkmenu = document.querySelectorAll('.menu a');

function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href")
    const section = document.querySelector(href)
    
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

linkmenu.forEach((item)=>{
    item.addEventListener("click", scrollToSection)
})