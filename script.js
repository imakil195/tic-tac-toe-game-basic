
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];



boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return; // Prevent overwriting
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});


const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
        disableAllBoxes();
        return;
      }
    }
  }
};

const showWinner = (winner) => {
  msg.innerHTML = `<span style='font-size:1.5rem; color:#222; background:#fff; padding:0.5em 1.2em; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,0.10); font-weight:500;'>${winner} wins!</span>`;
  msgcontainer.style.display = "flex";
  msgcontainer.style.flexDirection = "row";
  msgcontainer.style.justifyContent = "center";
  msgcontainer.style.alignItems = "center";
  msgcontainer.style.gap = "1em";
};

const disableAllBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const resetGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  turnO = true;
  msgcontainer.style.display = "none";
  msg.innerHTML = "";
};

resetbtn.addEventListener("click", () => {
  resetGame();
  // Ensure win message is hidden and alignment is reset
  msgcontainer.style.display = "flex";
  msgcontainer.style.flexDirection = "row";
  msgcontainer.style.justifyContent = "center";
  msgcontainer.style.alignItems = "center";
  msgcontainer.style.gap = "1em";
});


        
    


