// Import stylesheets
import './style.css';

// Write Javascript code!
let html = `<h1>Atividade</h1>`;
const text = "Atividade Empírica";

html += `charAt(posicao) => resultado: ${text.charAt(0)} </br></br>`;

html += `charcodeAt(posicao) => resultado: ${text.charCodeAt(0)} </br></br>`;

html += `indexOf(substring) => resultado: ${text.indexOf("a")} </br></br>`;

html += `search(substring) => resultado: ${text.search("a")} </br></br>`;

html += `lastIndexOf(substring) => resultado: ${text.lastIndexOf("a")} </br></br>`;

html += `slice(inicio, fim) => resultado: ${text.slice(0, 8)} </br></br>`;

html += `substr(inicio, tamanho) => resultado: ${text.substr(0, 6)} </br></br>`;

html += `substring(inicio, fim) => resultado: ${text.substring(0, 6)} </br></br>`;

html += `replace(substringExistente, novaString) => resultado: ${text.replace("Atividade", "Super Atividade")} </br></br>`;

html += `toUpperCase(substringExistente, novaString) => resultado: ${text.toUpperCase()} </br></br>`;

html += `toLowerCase(substringExistente, novaString) => resultado: ${text.toLowerCase()} </br></br>`;

html += `concat(string) => resultado: ${text.concat(" - 1")} </br></br>`;

html += `split(separador) => resultado: ${text.split(" ")} </br></br>`;


const appDiv = document.getElementById('app');
appDiv.innerHTML = html;