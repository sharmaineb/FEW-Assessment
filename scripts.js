// reference DOM elements
// const variables cannot be reassigned
// changes width input
const inputWidth = document.getElementById('input-width')
inputWidth.value = 100

// changes height input
const inputHeight = document.getElementById('input-height')
inputHeight.value = 100

// changes color input
const inputColor = document.getElementById('input-color')
inputColor.value = '#000000'

// displays width
const displayWidth = document.getElementById('display-width')
displayWidth.innerHTML = '100px'

// displays height
const displayHeight = document.getElementById('display-height')
displayHeight.innerHTML = '100px'

// displays color
const displayColor = document.getElementById('display-color')
displayColor.innerHTML = '#000000'

// displays color
const colorBox = document.getElementById('box4color')


// -----------------------------------------------------------------------
// write a function that updates display/colorBox every time input changes
// innerHTML.links HTML markdown

function update() {
    displayWidth.innerHTML = `${inputWidth.value}px`
    displayHeight.innerHTML = `${inputHeight.value}px`
    displayColor.innerHTML = `${inputColor.value}px`

// returns the values of an element's style attribute    
    displayWidth.style.color = inputColor.value
    displayHeight.style.color = inputColor.value
    displayColor.style.color = inputColor.value

    colorBox.style.width = `${inputWidth.value}px`
    colorBox.style.height = `${inputHeight.value}px`
    colorBox.style.backgroundColor = inputColor.value
}

// -----------------------------------------------------------------------
// add event listeners to display values 
// listen for change in inputs

inputWidth.addEventListener('input', update)
inputHeight.addEventListener('input', update)
inputColor.addEventListener('input', update)