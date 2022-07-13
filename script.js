var img = document.createElement('img')
img.setAttribute('id', 'foto')
var icone = document.getElementById('icon')
var botao = document.querySelector('input#botao')

function darkmode(){
    var corpo = document.body
    corpo.className = "dark-mode"
    var sun = document.getElementById('sun')
    sun.removeAttribute('src', 'sun.png')
    img.setAttribute('src', 'moon.png')    
    } 
function lightmode(){
    var corpo = document.body
    corpo.className = "light-mode"
    img.setAttribute('src', 'sun.png')
}

icone.style.padding = '10px'
icone.appendChild(img)