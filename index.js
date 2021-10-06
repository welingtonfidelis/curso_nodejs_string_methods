// Import stylesheets
import './style.css';

// Write Javascript code!
let html = `<h1>Atividade</h1> Welington Fidelis de Sousa </br> </br>`;
const text = "Atividade Empírica";

html += `String usada nos métodos abaixo => ${text} </br></br>`;

html += `charAt(posicao) => Resultado: ${text.charAt(0)} => Resumo do método: Retorna o caractere na posição passada no método. </br></br>`;

html += `charcodeAt(posicao) => Resultado: ${text.charCodeAt(0)} => Resumo do método: Retorna o número na tabela ASCII para o caracteren a posicao passada no método. </br></br>`;

html += `indexOf(substring) => Resultado: ${text.indexOf("a")} => Resumo do método: Retorna a posição (a partir de 0) da primeira aparição da string passada como parâmetro. </br></br>`;

html += `search(substring) => Resultado: ${text.search("a")} => Resumo do método: Retorna a posição (a partir de 0) da primeira aparição da string passada como parâmetro. </br></br>`;

html += `lastIndexOf(substring) => Resultado: ${text.lastIndexOf("a")} => Resumo do método: Retorna a posição (a partir de 0) da última aparição da string passada como parâmetro. </br></br>`;

html += `slice(inicio, fim) => Resultado: ${text.slice(0, 8)} => Resumo do método: Retorna parte da string partindo da posição inicial (primeiro parâmetro passado) e indo até a posição final (segundo parâmetro passado). </br></br>`;

html += `substr(inicio, tamanho) => Resultado: ${text.substr(0, 8)} => Resumo do método: Retorna parte da string partindo da posição inicial (primeiro parâmetro passado) e indo até número de caracteres máximo (segundo parâmetro passado). </br></br>`;

html += `substring(inicio, fim) => Resultado: ${text.substring(0, 8)} => Resumo do método: Retorna parte da string partindo da posição inicial (primeiro parâmetro passado) e indo até a posição final (segundo parâmetro passado). </br></br>`;

html += `replace(substringExistente, novaString) => Resultado: ${text.replace("Atividade", "Super Atividade")} => Resumo do método: Retorna a string com parte substituida (primeiro parâmetro de busca) por outra string (segundo parâmetro). </br></br>`;

html += `toUpperCase(substringExistente, novaString) => Resultado: ${text.toUpperCase()} => Resumo do método: Retorna a string com TODOS os caracteres em maiúsculo. </br></br>`;

html += `toLowerCase(substringExistente, novaString) => Resultado: ${text.toLowerCase()} => Resumo do método: Retorna a string com TODOS os caracteres em minúsculo. </br></br>`;

html += `concat(string) => Resultado: ${text.concat(" - 1")} => Resumo do método: Retorna a string original com uma nova string incluída no fim. </br></br>`;

html += `split(separador) => Resultado: ${text.split(" ")} => Resumo do método: Retorna um array de strings, separando a string original a partir do parâmetro passado. </br></br>`;


const appDiv = document.getElementById('app');
appDiv.innerHTML = html;