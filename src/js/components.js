import "../css/components.css";
import reactImg from '../assets/img/react.svg'

export const saludo = nombre => {
    const h1 = document.createElement('h1')
    h1.innerText = `Bienvenido ${nombre}!!!!`
    document.body.append(h1)
}

const reactLogo = document.createElement('img');
reactLogo.src = reactImg;
document.body.append( reactLogo )