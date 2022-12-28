//Elementos:
const $coinbase = document.getElementById('coinbase');
const $users = document.getElementById('netflix');
const $formulario = document.getElementById('formulario')
const $netflix = document.getElementById('netflix');
const $trackgenix = document.getElementById('trackgenix');

// Acciones:
$netflix.addEventListener('click', ()=> {
    window.open('../html/portfolio/netflix_final/index.html', '_blank')
})

$formulario.addEventListener('click', ()=> {
    window.open('../html/portfolio/formulario/index.html', '_blank')
})

$trackgenix.addEventListener('click', ()=> {
    window.open('https://alfon-b-trackgenix-e1mckk0x0-juanitocamo3-gmailcom.vercel.app/', '_blank')
})

$coinbase.addEventListener('click', ()=> {
    console.log('click')
    window.open('../html/portfolio/Coinbase/html/proyecto.html', '_blank')
})

