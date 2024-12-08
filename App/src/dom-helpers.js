//make after you add an event listener for copying the color code
const handleCopy = async(event) =>{
   // Checks if clipboard is available
   if (!navigator.clipboard) return; 
   // Tries to copy text to the clipboard
   try {
     const text = event.target.textContent
     const colorProperties = [event.target.style.backgroundColor, event.target.style.color]
     const colorHex = `${event.target.dataset.hex}`
     await navigator.clipboard.writeText(colorHex)
     event.target.textContent = `Copied Hex!`
     event.target.style.backgroundColor = `#43AA8B`
     event.target.style.color = `#FFFFFF`
     setTimeout(() => {
       event.target.textContent = text
       event.target.style.backgroundColor = colorProperties[0]
       event.target.style.color = colorProperties[1]
    }, 1000)
} catch (error) {
    console.log(error)
}
};

const handleDelete = (e) =>{
    

};


const cardPalette = ({ title, uuid, colors, temperature }) =>{
    //creating the card
    const card = document.createElement('li');
    card.className = 'card'
    //element for the title
    const paletteTitle = document.createElement('h2');
    paletteTitle.textContent = title
    //element for the temp on the bottom
    const paletteTemperature = document.createElement('p');
    paletteTemperature.textContent = temperature
    //creating a div to hold the colors and buttons 
    const divider = document.createElement('div')
    //element for the colors
    colors.forEach((color) =>{
        const paletteColors = document.createElement('p');
        paletteColors.textContent = 'Text Example';
        paletteColors.style.backgroundColor = color;
        const copy = document.createElement('button');
        copy.setAttribute('data-hex', color);
        copy.textContent =  `Copy ${color}`;
        copy.addEventListener('click', handleCopy);
        divider.append(paletteColors, copy);
    })
    const deletePalette = document.createElement('button');
    deletePalette.addEventListener('click', handleDelete)
    deletePalette.textContent = 'delete palette'
    
    
    card.append(paletteTitle, divider, deletePalette, paletteTemperature);
    //element for the copy buttons
    const ul = document.getElementById('list')
    ul.append(card);
}

export { cardPalette };