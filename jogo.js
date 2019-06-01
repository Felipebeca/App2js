// Ajustar altura e largura do jogo. 
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

// Nível de dificuldade do jogo.
var criarTempoMosca = 1500
var nivel = window.location.search
// removendo a string ? do código.
 nivel = nivel.replace('?', '')

 if(nivel === 'nomal'){
     // 1500
     criarTempoMosca = 1500
 }else if(nivel === 'dificil'){
     // 1000
     criarTempoMosca = 1000
 }else if ( nivel === 'muito_dificil'){
     // 750 
    criarTempoMosca = 750
}

function ajustaTamanhoPalcoJogo(){
        
    altura = window.innerHeight
    largura = window.innerWidth
}
ajustaTamanhoPalcoJogo()

    // Cronometro.
    var cronometro = setInterval( function(){
        tempo -= 1
        if(tempo < 0){
            clearInterval(cronometro)
            clearInterval(criaMosca)
            window.location.href = 'vitoria.html'
            
        }else{
            document.getElementById('cronometro').innerHTML = tempo 
        }
        
        }, 1000)

function posicaoRandomica(){
// Remover o mosquito anterior (caso exista)
if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()
   
// Controlar as vidas
if(vidas > 3 ){
    window.location.href = 'fim_de_jogo.html'
} else {
    document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
    vidas++ 
} 
}

var posicaox = Math.floor(Math.random() * largura) - 90
var posicaoy = Math.floor (Math.random() * altura) - 90

// Ajustar a probabilidade de posições negativas. Já que as mesmas recebem - 90.
posicaox  = posicaox < 0 ? 0 : posicaox
posicaoy  = posicaoy < 0 ? 0 : posicaoy

// Criar elemento html
var mosca = document.createElement('img')
mosca.src ='imagens/mosca.png'
mosca.className = tamanhoAleatorio() 
mosca.style.left = posicaox + 'px'
mosca.style.top = posicaoy + 'px'
mosca.style.position = 'absolute'
mosca.id="mosquito"
mosca.onclick = function(){
    this.remove()
}
document.body.appendChild(mosca)

}

// Tamanhos aleatorios do mosquito, atraves de classes.
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3) 

    switch(classe) {

        case 0: 
            return 'mosca1'

        case 1: 
            return 'mosca2'

        case 2: 
            return 'mosca3'
    }
}



