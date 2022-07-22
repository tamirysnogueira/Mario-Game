const playGame = document.getElementById('playGame')
const ball = document.getElementById('ball')
const informationsHomeScreen = document.getElementById('informationsHomeScreen')
const homeScreen = document.getElementById('homeScreen')
const tubeScreen = document.getElementById('tubeScreen')

 function ballFunctions(){
    
    function ballClose(){
        ball.classList.remove('ballOpen')
    
        ball.classList.add('ballClose')
        ball.style.width = '0px'
        ball.style.height = '0px'

    }
    
    function ballOpen(){
        ball.style.zIndex = '1'
        ball.style.opacity = '1'
        ball.classList.add('ballOpen')

    }

    return function(){
        ballOpen()

        setTimeout(()=> {
            closeHomeScreen()
            openTubeScreen()
            
        }, 2000)

        setTimeout(()=> {
            ballClose()
        }, 2000)

        setTimeout(()=> {
            homeScreen.style.display = 'none'
        }, 4700)
    }
}

function closeHomeScreen(){
    informationsHomeScreen.style.display = 'none'

}

function openTubeScreen(){
    tubeScreen.style.display = 'flex'

}


playGame.addEventListener('click', ()=> {
    const functionBall = ballFunctions()
    functionBall()

})
