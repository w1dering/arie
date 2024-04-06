// html references 
const camera = document.getElementById("camera");
const gameWorld = document.getElementById("game-world");

// event listeners
document.addEventListener("keydown", startPlayerMovement);
document.addEventListener("keyup", stopPlayerMovement);


/* variables */
// animation related
let previousTimestamp; // stores timestamp since last frame
let delta; // stores frame duration, in seconds

// player related
const speed = 600; // px/s the player moves at

// game grid
let grid;

let upPressed = false;
let leftPressed = false;
let downPressed = false;
let rightPressed = false;
function startPlayerMovement(ev)
{
    if (ev.key == "w")
    {
        upPressed = true;
    }
    else if (ev.key == "a")
    {
        leftPressed = true;
    }
    else if (ev.key == "s")
    {
        downPressed = true;
    }
    else if (ev.key == "d")
    {
        rightPressed = true;
    }
}

function stopPlayerMovement(ev)
{
    if (ev.key == "w")
    {
        upPressed = false;
    }
    else if (ev.key == "a")
    {
        leftPressed = false;
    }
    else if (ev.key == "s")
    {
        downPressed = false;
    }
    else if (ev.key == "d")
    {
        rightPressed = false;
    }
}

function movePlayer()
{
    let moveDir = [0, 0];
    if (upPressed) moveDir[1]++;
    if (leftPressed) moveDir[0]++;
    if (downPressed) moveDir[1]--;
    if (rightPressed) moveDir[0]--;

    if (moveDir[0] != 0 || moveDir[1] != 0) // proper movement input occurred
    {
        let effectiveSpeed = speed;
        if (Math.abs(moveDir[0]) + Math.abs(moveDir[1]) == 2)
        {
            effectiveSpeed /= Math.sqrt(2);
        }
        gameWorld.style.left = (parseInt(gameWorld.style.left, 10) + effectiveSpeed * delta * moveDir[0]) + "px";
        gameWorld.style.top = (parseInt(gameWorld.style.top, 10) + effectiveSpeed * delta * moveDir[1]) + "px";
    }
}

gameWorld.style.left = "0px";
gameWorld.style.top = "0px"; // ensures these aren't undefined
requestAnimationFrame(gameLoop);

function gameLoop(currentTimestamp)
{
    if (!previousTimestamp)
    {
        previousTimestamp = currentTimestamp;
    }

    delta = (currentTimestamp - previousTimestamp) / 1000;
    previousTimestamp = currentTimestamp;

    movePlayer();
    requestAnimationFrame(gameLoop);
}