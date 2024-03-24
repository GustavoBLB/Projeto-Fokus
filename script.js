const html = document.querySelector('html')

const focoBtn = document.querySelector('.app__card-button--foco')
const curtoBtn = document.querySelector('.app__card-button--curto')
const longoBtn = document.querySelector('.app__card-button--longo')
const botoes = document.querySelectorAll('.app__card-button')

const imagem_banner = document.querySelector('.app__image')

const escrita_banner = document.querySelector('.app__title')

const musica_foco = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
const pause = new Audio('/sons/pause.mp3')
const play = new Audio('/sons/play.wav')
const alarme = new Audio('/sons/beep.mp3')

const iniciar_pausarBtn = document.querySelector('#start-pause span')
const imagem_iniciar_pausarBtn = document.querySelector('#start-pause img')

const temporizador = document.querySelector('#timer')

let tempo_decorrido_segundos = 1500
let intervaloId = null

const start_pauseBtn = document.querySelector('#start-pause')

musica.loop = true
musica_foco.addEventListener('change', () => {
    if(musica.paused){
        musica.play()
    }
    else{
        musica.pause()
    }
})


focoBtn.addEventListener('click', () => { 
    tempo_decorrido_segundos = 1500
    alterarContexto('foco')
    focoBtn.classList.add('active')

})

curtoBtn.addEventListener('click', () => {
    tempo_decorrido_segundos = 300
    alterarContexto('descanso-curto')
    curtoBtn.classList.add('active')
    
})

longoBtn.addEventListener('click', () => {
    tempo_decorrido_segundos = 900
    alterarContexto('descanso-longo')
    longoBtn.classList.add('active')
    
}) 

function alterarContexto(contexto){
    zerar()
    mostrarTimer()

    botoes.forEach(function (btn){
        btn.classList.remove('active')
    })    

    html.setAttribute('data-contexto' , contexto)
    imagem_banner.setAttribute('src', `/imagens/${contexto}.png`)


    switch (contexto) {
        case "foco":
            escrita_banner.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "descanso-curto":
            escrita_banner.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;

        case "descanso-longo":
            escrita_banner.innerHTML = `Hora de voltar à superície<br>
            <strong class="app__title-strong">Faça uma pausa longa!</strong>`
            break;
    
        default:
            break;
    }
}




const contagemRegressiva = () =>{
    if(tempo_decorrido_segundos <= 0){
        alarme.play()
        alert('Tempo Finalizado')
        const focoAtivo = html.getAttribute('data-contexto') == 'foco'
        if(focoAtivo){
            const evento = new CustomEvent('focoFinalizado')
            document.dispatchEvent(evento)
        }
        tempo_decorrido_segundos = 1500
        alterarContexto('foco')
        return
    }
    tempo_decorrido_segundos -= 1
    mostrarTimer()
}

start_pauseBtn.addEventListener('click', iniciar_pausar)

function iniciar_pausar(){
    if(intervaloId){
        pause.play()
        zerar()
        
        return
    }
    play.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciar_pausarBtn.textContent = "Pausar"
    imagem_iniciar_pausarBtn.setAttribute('src', `/imagens/pause.png`)
}

function zerar(){
    iniciar_pausarBtn.textContent = "Começar"
    imagem_iniciar_pausarBtn.setAttribute('src', `/imagens/play_arrow.png`)
    clearInterval(intervaloId)
    intervaloId = null


}


function mostrarTimer (){
    const tempo = new Date(tempo_decorrido_segundos * 1000)
    const tempo_formatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    temporizador.innerHTML = `${tempo_formatado}`
}

mostrarTimer()