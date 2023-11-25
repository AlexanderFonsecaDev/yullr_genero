// Script para aplicar colores aleatorios a cada letra del título
const title = document.getElementById('main-title');
const text = title.textContent;
//const colors = ['#FF0000','#00BFFF','#FFFF00']; // Colores para cada letra
const colors = ['#FFFFFF']; // Colores para cada letra

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
