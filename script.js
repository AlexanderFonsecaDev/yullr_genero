// Script para aplicar colores aleatorios a cada letra del título
const title = document.getElementById('main-title');
const text = title.textContent;
//const colors = ['#FF0000','#00BFFF','#FFFF00']; // Colores para cada letra
const colors = ['#FFFFFF']; // Colores para cada letra
var contador = 1;

title.innerHTML = ''; // Limpiamos el contenido original del título

for (let i = 0; i < text.length; i++) {
    const letter = document.createElement('span');
    letter.textContent = text[i];
    letter.style.color = colors[Math.floor(Math.random() * colors.length)]; // Aplicamos un color aleatorio
    title.appendChild(letter);
}

// Aplicar círculos en los bordes del "content"
const content = document.querySelector('.content');
const contentCircles = content.querySelectorAll('.header-circle');

contentCircles.forEach(circle => {
    circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Colores aleatorios para los círculos
});

function removeAndReplaceText(newTextReplacement) {
    const textToRemove = document.getElementById('text-to-remove');
    textToRemove.style.transform = 'scale(1.5)';
    textToRemove.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
    contador++;
    setTimeout(() => {
        textToRemove.style.transform = 'scale(0) translateY(-100px)';
        textToRemove.style.opacity = '0';
    }, 500);

    setTimeout(() => {
        textToRemove.innerText = newTextReplacement;
        textToRemove.style.transform = 'scale(1) translateY(0)';
        textToRemove.style.opacity = '1';

        if (contador <= 2) {
            document.getElementById('new-buttons').style.display = 'block';
            document.getElementById('start-btn').style.display = 'none';
        }else{
            showImageAndVideo();
        }
    }, 1500);
}

function selectTeam(team) {
    console.log('Selected team:', team);
    if (contador <= 2) {
        removeAndReplaceText('Papá ¿Qué equipo eres?')
    }else{
        document.getElementById('new-buttons').style.display = 'none';
        removeAndReplaceText('Y la respuesta es...')        
    }
    // Aquí puedes añadir la lógica para manejar la selección de equipo
}

function showImageAndVideo() {
    setTimeout(() => {
        const content = document.querySelector('.content');
        const imageContainer = document.getElementById('image-container');
        const music = document.getElementById('background-music');

        // Eliminar elementos existentes
        const mainTitle = document.getElementById('main-title');
        mainTitle.textContent = '¡Felicidades, por esta princesa!';
        mainTitle.style.color = '#FFF';
        content.style.display = 'none';
    
        
        // Eliminar ambas imágenes
        const characters = document.querySelectorAll('.character');
        characters.forEach(character => {
            character.remove();
        });

        // Crear y mostrar nueva imagen grande
        const largeImage = document.createElement('img');
        largeImage.src = 'https://64.media.tumblr.com/511e4ca88530be4a501bed917ee02c88/b042ccbccdfe556b-73/s1280x1920/4448d5150c1e4ade29ebbe4df2977357b3b57756.png'; // Reemplaza con la URL de la imagen grande
        largeImage.alt = 'Imagen grande';
        largeImage.classList.add('character'); // Añadir la misma clase CSS
        largeImage.style.width = '800px'; // Cambia el tamaño según lo necesites
        largeImage.style.height = 'auto'; // Proporción automática
        largeImage.style.marginRight = '50px'; // Ajustar margen derecho
        imageContainer.appendChild(largeImage);
        // Cambiar la música de fondo
        music.removeAttribute('autoplay');
        music.removeAttribute('loop');

        music.src = 'assets/peaches.mp3'; // Reemplaza con la ruta de la nueva música
        music.play(); // Reproducir la nueva música

    }, 10000); // Retrasar la ejecución por 5000 milisegundos (5 segundos)
}
