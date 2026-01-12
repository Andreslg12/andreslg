const frases = [
    "Eres mi sol en días nublados. ✨",
    "Amo cada detalle de ti. ❤️",
    "Tu sonrisa es mi parte favorita del día.",
    "Eres el sueño del que nunca quiero despertar.",
    "Contigo todo es más bonito. 🌸"
];

function cambiarFrase() {
    const p = document.getElementById('frase');
    const nuevaFrase = frases[Math.floor(Math.random() * frases.length)];
    
    // Efecto de desvanecimiento al cambiar
    p.style.opacity = 0;
    setTimeout(() => {
        p.innerText = nuevaFrase;
        p.style.opacity = 1;
    }, 200);

    for(let i=0; i<10; i++) { crearCorazon(); }
}

function crearCorazon() {
    const c = document.createElement('div');
    c.classList.add('corazon');
    c.innerHTML = '❤️';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.fontSize = (Math.random() * 20 + 10) + 'px';
    c.style.animationDuration = (Math.random() * 3 + 2) + 's';
    c.style.opacity = Math.random();
    document.getElementById('corazones-container').appendChild(c);
    setTimeout(() => c.remove(), 5000);
}

setInterval(crearCorazon, 400);


