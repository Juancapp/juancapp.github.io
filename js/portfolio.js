/*let juan = document.getElementById('juan')

juan.addEventListener('mouseover', (event) => {
    element = event.target
    return juan.innerHTML = 'inicio'
})
juan.addEventListener('mouseout', (event) => {
    element = event.target
    juan.innerHTML = '.juan'
})*/

const $link_netflix = document.getElementById('netflix');

$link_netflix.addEventListener('click', ()=> {
    window.open('../html/portfolio/Netflix/index.html', '_blank')
})