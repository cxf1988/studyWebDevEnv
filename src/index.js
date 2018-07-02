const $app = document.getElementById('app');

function strReverse(str) {
    return str.split('').reverse().join('');
}

const strInput = 'Hello World';
const srtHolder = 'The result will be here...';
const strHtml = `
<img src="./src/assets/logo.jpg" alt="logo" />  
<h1>${strInput}</h1>  
<button id="do">Show the reverse of "${strInput}"</button>
<button id="reset">Do reset</button>
<p id="result">${srtHolder}</p>
`;

$app.innerHTML = strHtml;

const $result = document.getElementById('result');

document.getElementById('do').onclick = function() {
    $result.innerHTML = `The reverse of "${strInput}" is "${strReverse(strInput)}"`;
};
document.getElementById('reset').onclick = function() {
    $result.innerHTML = srtHolder;
};