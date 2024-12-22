openMenu.addEventListener('click', () => {
    menu.style.display = 'flex'
    menu.style.right = (menu.offsetWidth * -1) + 'px'

    setTimeout(() => {
        menu.style.opacity = '1'
        menu.style.right = '0'
        openMenu.style.right = '0'
        openMenu.style.display = 'none'
    }, 10);
})

closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0'
    menu.style.right = (menu.offsetWidth * -1) + 'px'

    setTimeout(() => {
        menu.removeAttribute('style')
        openMenu.removeAttribute('style')
    }, 200);
    
})

const imageUrls = [
    './img/Note13Pro.png',
    './img/Galaxy A55.png',
    './img/iphone16pro.png'
    ];

let currentIndex = 0; // Índice da imagem atual
const imgElement = document.getElementById('dynamic-image');

function changeImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length; // Próximo índice
    imgElement.src = imageUrls[currentIndex]; // Atualiza a imagem
}

  // Altera a imagem a cada 3 segundos (3000 milissegundos)
  setInterval(changeImage, 3000);

