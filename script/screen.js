const playGame = document.getElementById('playGame')
const ball = document.getElementById('ball')

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
            ballClose()
        }, 2000)
    }
}


playGame.addEventListener('click', ()=> {
    const functionBall = ballFunctions()
    functionBall()
    
})
