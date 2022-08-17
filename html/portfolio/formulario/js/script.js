// Elementos: 
const $btn_dark = document.getElementById('btn_dark')
const $body = document.querySelector('body')
const $input = [... document.querySelectorAll('input')]
const $h3 = [... document.querySelectorAll('h3')]
const $span = [... document.querySelectorAll('span')]
const $btn_twitter = document.getElementById('btn_twitter')


// Acción

let is_clicked = false

$btn_dark.addEventListener('click', () => {
    is_clicked = !is_clicked
    $body.classList.toggle('dark')
    $input.forEach(e => e.classList.toggle('input_dark'))
    $h3.forEach(e => e.classList.toggle('h3_dark'))
    $span.forEach(e => e.classList.toggle('span_dark'))
    $btn_twitter.classList.toggle('twitter_dark')


    if (is_clicked === true) {
        $btn_dark.innerHTML = "<i style='color:white;' class='icon bi bi-toggle-on'></i>"
    }
    if (is_clicked === false) {
        $btn_dark.innerHTML = "<i class='icon bi bi-toggle-off'></i>"
    }
})

