"use strict";

const box = document.querySelectorAll(".box");
const divv = document.getElementById("boxes");
const right = document.getElementById("right");
const textNew = document.querySelectorAll(".game");
console.log(divv);
const winner = document.querySelector(".winPlayer");
const reset = document.querySelector(".reset");
// console.log(reset);
const boxes = new Array(9).fill(NaN);
let currentPlayer = "X";
let winnerExists = false;
let game = false;
let arr = [];
let newText;

const positions = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function gamePlay() {
  function init() {
    box.forEach((elm) => {
      elm.addEventListener("click", () => {
        arr.push(elm, currentPlayer);
        console.log(arr);
      });
    });
  }
  init();

  function create() {
    box.forEach((text) => {
      text.addEventListener("click", () => {
        newText = document.createElement("button");
        newText.classList.add("game");
        let num = 0;
        num++;
        newText.textContent = `${num}.Go to move #${num}`;
        right.appendChild(newText);
        // console.log(newText);

        newText.addEventListener("click", () => {
          console.log("hello");
          box.forEach((elm) => {});
        });
      });
    });
  }
  create();

  function checkWinner(boxes) {
    for (let [x, y, z] of positions) {
      if (boxes[x] === boxes[y] && boxes[y] === boxes[z]) return true;
    }
  }

  function Click(box, idx) {
    const value = box.innerText;
    if (!value && !winnerExists) {
      boxes[idx] = currentPlayer;
      box.innerText = currentPlayer;
      box.style.pointerEvents = "none";
      winnerExists = checkWinner(boxes);

      reset.addEventListener("click", () => {
        box.textContent = "";
        const boxes = new Array(9).fill(NaN);
        let currentPlayer = "X";
        let winnerExists = false;
        box.style.pointerEvents = "all";
        winner.textContent = 'Winner:--'
        // console.log('hel');

        const a = document.querySelectorAll(".game");
        a.forEach((elm) => {
          elm.style.display = "none";
        });
      });

      if (winnerExists) winner.innerText = `Winner -- ${currentPlayer}`;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }

  function sum() {
    box.forEach((box, idx) => {
      box.addEventListener("click", () => {
        Click(box, idx);
      });
    });
  }
  sum();
}

function replace() {
  const b = document.querySelectorAll(".game");
  b.forEach((elm) => {
    b.addEventListener("click", () => {
      console.log(arr);
    });
  });
}
replace()

gamePlay();
