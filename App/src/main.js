import './style.css'
import palettes from'./palettes.json'
import { cardPalette } from './dom-helpers'
console.log('test')

const paletteGen = (e) =>{
    const paletteInfo = {
        
        "uuid": crypto.randomUUID(),
        "title": e.target.title.value,
        "colors": [
          e.target.color1.value,
          e.target.color2.value,
          e.target.color3.value,
        ],
        "temperature": e.target.temperature.value
      }
      return paletteInfo;
}

const handleSubmit = (e) => {
    e.preventDefault();
    const cardInfo = paletteGen(e);
    cardPalette(cardInfo);
}


const main = () =>{
    const form = document.getElementById('palette-form')
    form.addEventListener('submit', handleSubmit);
}

main();