const $hola = document.getElementById('hola')
const $soy = document.getElementById('soy')
const $juan = document.getElementById('juan')
const $touch = document.getElementById('touch')
const $container = document.querySelector('.econtainer')

const hover = event => {
	element = event.target
	if (element === $hola) return ($hola.innerHTML = 'Info.')
	if (element === $soy) return ($soy.innerHTML = 'Portfolio')
	if (element === $juan) return ($juan.innerHTML = 'Contacto')
}

const over = event => {
	element = event.target

	if (element === $hola) return ($hola.innerHTML = 'Hola.')
	if (element === $soy) return ($soy.innerHTML = 'Soy')
	if (element === $juan) return ($juan.innerHTML = 'Juan')
}

$hola.addEventListener('mouseover', hover)
$soy.addEventListener('mouseover', hover)
$juan.addEventListener('mouseover', hover)

$hola.addEventListener('mouseout', over)
$soy.addEventListener('mouseout', over)
$juan.addEventListener('mouseout', over)

$hola.addEventListener('click', () => {
	window.open('../html/info.html', "_self")
})

$soy.addEventListener('click', () => {
	window.open('../html/portfolio.html', '_self')
})

$juan.addEventListener('click', () => {
	window.open('../html/contacto.html', '_self')
})

var mobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i)
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i)
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i)
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i)
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i)
	},
	any: function () {
		return (
			mobile.Android() || mobile.BlackBerry() || mobile.iOS() || mobile.Opera() || mobile.Windows()
		)
	},
}

document.addEventListener('click', e => {
	if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) {
		console.log('click')
		$touch.innerText = '';
		$container.classList.add('active')

		$hola.textContent = 'Info.'
		$soy.textContent = 'Portfolio'
		$juan.textContent = 'Contacto'
	}
})
