const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const cloud = document.querySelector(".cloud");
const gameOver = document.querySelector(".game-over");
const gameBoard = document.querySelector(".game-board");

const teste = () => {
  if (gameOver.style.display == "inline-block") {
    recomecar();
    return;
  }
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  const cloudPosition = cloud.offsetLeft;

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    cloud.style.animation = "none";
    cloud.style.left = `${cloudPosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./img/death.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    gameOver.style.display = "inline-block";
    //gameBoard.style.display = "none";

    clearInterval(loop);
  }
}, 10);

function recomecar() {
  location.reload();
}

document.addEventListener("keydown", teste);
