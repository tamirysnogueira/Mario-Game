let mario = document.getElementById('mario')
console.log('oi')

function marioMove(event){
    let positionXMario = getComputedStyle(mario).getPropertyValue('left')
    event.preventDefault()

    mario.classList.remove('transition')

    if(event.key === 'ArrowLeft'){
        moveMarioLeft(positionXMario)
    }

    if(event.key === 'ArrowRight'){
        moveMarioRight(positionXMario)
    }

    if(event.key === 'ArrowUp'){
        moveMarioUp(positionXMario)
    }

}

function moveMarioLeft(positionMario){
    let positionYMario = getComputedStyle(mario).getPropertyValue('bottom')

    if(positionMario < '1300px' && positionYMario === '312px'){
        mario.classList.add('transition')
        let positionY = parseInt(positionYMario)

        while(positionY > 87){
            positionY -= 25
            mario.style.bottom = `${positionY}px`
        }
        
    }

    if(positionMario === '5px'){
        return
    } else {
        let position = parseInt(positionMario)
        position -= 25
        
        mario.style.left = `${position}px`
        mario.style.transform = 'scaleX(-1)'
    }
    
}

function moveMarioRight(positionMario){
    let positionYMario = getComputedStyle(mario).getPropertyValue('bottom')

    if(positionMario > '1420px' && positionYMario === '312px'){
        mario.classList.add('transition')
        let positionY = parseInt(positionYMario)

        while(positionY > 87){
            positionY -= 25
            mario.style.bottom = `${positionY}px`
        }
        
    }

    if(positionMario === '1730px'){
        return
    } else {
        let position = parseInt(positionMario)
        position += 25
        mario.style.left = `${position}px`
        mario.style.transform = 'scaleX(1)'
    }
    
}

function moveMarioUp(positionXMario){
    let positionYMario = getComputedStyle(mario).getPropertyValue('bottom')
    let positionY = parseInt(positionYMario)

    let positionX = parseInt(positionXMario)

    if(positionX > 1300 && positionX < 1415){
        while(positionY < 300){
            mario.classList.add('transition')
            positionY += 25
            mario.style.bottom = `${positionY}px`
            
        }
    } else {
        while(positionY < 350){
            mario.classList.add('transition')
            positionY += 25
            mario.style.bottom = `${positionY}px`
            
        }
    
        setTimeout(() => {
            while(positionY > 87){
                positionY -= 25
                mario.style.bottom = `${positionY}px`
                
            }
        }, 400);
    }

    console.log(positionY)
}

window.addEventListener('keydown', marioMove)