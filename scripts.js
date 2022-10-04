// reference DOM elements
const inputWidth = document.getElementById('input-width')
const inputHeight = document.getElementById('input-height')
const inputColor = document.getElementById('input-color')
const displayWidth = document.getElementById('display-width')
const displayHeight = document.getElementById('display-height')
const displayColor = document.getElementById('display-color')
const colorBox = document.getElementById('box4color')

function update() {
    displayWidth.innerHTML = `${inputWidth.value}px`
    displayHeight.innerHTML = `${inputHeight.value}px`
    displayColor.innerHTML = `${inputColor.value}px`

    displayWidth.style.color = inputColor.value
    displayHeight.style.color = inputColor.value
    displayColor.style.color = inputColor.value

    colorBox.style.width = `${inputWidth.value}px`
    colorBox.style.height = `${inputHeight.value}px`
    colorBox.style.backgroundColor = inputColor.value
}

inputWidth.value = 100
displayWidth.innerHTML = '100px'

inputHeight.value = 100
displayHeight.innerHTML = '100px'

inputColor.value = '#000000'
displayColor.innerHTML = '#000000'

// add event listeners to display values 

inputWidth.addEventListener('input', update)
inputHeight.addEventListener('input', update)
inputColor.addEventListener('input', update)