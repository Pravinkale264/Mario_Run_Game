score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo= new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("key Code is: ", e.keyCode)
    if (e.keyCode == 38) {
        mario = document.querySelector('.mario');
        mario.classList.add('animateMario');
        setTimeout(() => {
            mario.classList.remove('animateMario')
        }, 700);
    }
    if (e.keyCode == 39) {
        mario = document.querySelector('.mario');
        mariox = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = mariox + 112 + "px";
    }
    if (e.keyCode == 37) {
        mario = document.querySelector('.mario');
        mariox = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = (mariox - 112) + "px";
    }
}

setInterval(() => {
    mario = document.querySelector('.mario');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 83 && offsetY < 52) {
        gameover.innerHTML=" Game Over - Reload to Play Again "
        obstacle.classList.remove('obstacleani')
        audiogo.play();
        setTimeout(() => {
            audio.pause();
            audiogo.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 10;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newdur = anidur - 0.1;
            obstacle.style.animationDuration = newdur + 's';
            console.log('New animation duration: ', newdur)
        }, 500);
    }
    
}, 10);

function updatescore(score) {
    scoreCont.innerHTML = "Your Score: " + score;
}