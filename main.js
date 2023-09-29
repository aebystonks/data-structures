const form = document.querySelector('.form')
const input = document.querySelector('.form-control')
const button = document.querySelector('.btn')
const container = document.querySelector('.container')

let cityList = new Set()

const predefinedCities = []

predefinedCities.forEach(city => {
	cityList.add(city)
	const newElem = document.createElement('div')
	newElem.textContent = city
	newElem.style.color = '#fff'
	container.append(newElem)
})

form.addEventListener('submit', event => {
	event.preventDefault()

	const cityName = input.value.trim()
	if (cityName) {
		cityList.add(cityName)

		container.textContent = ''

		cityList.forEach(element => {
			const newElem = document.createElement('div')
			newElem.textContent = element
			container.append(newElem)
		})

		input.value = ''
	}
})
