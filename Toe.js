let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset");
let msgcon = document.querySelector(".msgcon");
let msg = document.querySelector("#msg");
let newgame = document.querySelector("#newgame");

let turnO = true ; // turnO , turnX

const winpattrens = [
  [0 , 1 , 2],
  [0 , 3 , 6],
  [0 , 4 , 8],
  [1 , 4 , 7],
  [2 , 5 , 8],
  [2 , 4 , 6],
  [3 , 4 , 5],
  [6 , 7 , 8],
];

const resetgame = () =>{
  turnO = true;
  enabledboxs();
  msgcon.classList.add("hide")

}

boxes.forEach( (box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O"
      turnO = false
    } else {
      box.innerText = "X"
      turnO = true
    }
    box.disabled = true;

    checkwinner();
  })
});

const disabledboxs = () =>{
  for (let box of boxes) {
    box.disabled = true ;
  }
}

const enabledboxs = () =>{
  for (let box of boxes) {
    box.disabled = false ;
    box.innerText=""
  }
}

const showWinner = (winner) =>{
 msg.innerText = `Congratulations, Winner is ${winner}`;
  msgcon.classList.remove("hide")
  disabledboxs();
}

const checkwinner = () =>{
for (let pattren of winpattrens) {
  let pos1val = boxes[pattren[0]].innerText;
  let pos2val = boxes[pattren[1]].innerText;
  let pos3val = boxes[pattren[2]].innerText;

  if (pos1val != "" && pos2val != "" && pos3val != "") {
    if (pos1val === pos2val && pos2val === pos3val) {
      showWinner(pos1val)
    }
  }
}
}

newgame.addEventListener("click" , resetgame)
reset.addEventListener("click" , resetgame)