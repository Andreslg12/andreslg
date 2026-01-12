const frases = [
    "Eres el lugar al que siempre quiero volver. ❤️",
    "Cada segundo a tu lado es un regalo.",
    "Gracias por hacerme tan feliz todos los días. ✨",
    "Te amo más de lo que las palabras pueden expresar.",
    "Eres mi persona favorita en el mundo entero. 🌎",
    "Mi corazón late más fuerte cuando estoy contigo."
];

function cambiarFrase() {
    const textoFrase = document.getElementById('frase');
    const indice = Math.floor(Math.random() * frases.length);
    textoFrase.innerText = frases[indice];
    
    // Crear una explosión extra de corazones al hacer clic
    for(let i=0; i<5; i++) {
        crearCorazon();
    }
}

function crearCorazon() {
    const contenedor = document.getElementById('corazones-container');
    const corazon = document.createElement('div');
    
    corazon.classList.add('corazon');
    corazon.innerText = '❤️';
    
    // Posición aleatoria
    corazon.style.left = Math.random() * 100 + 'vw';
    
    // Tamaño aleatorio
    corazon.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    // Velocidad de animación aleatoria
    const duracion = Math.random() * 3 + 2;
    corazon.style.animationDuration = duracion + 's';
    
    contenedor.appendChild(corazon);
    
    // Eliminar el corazón después de que termine la animación
    setTimeout(() => {
        corazon.remove();
    }, duracion * 1000);
}

// Crear corazones continuamente
setInterval(crearCorazon, 300);