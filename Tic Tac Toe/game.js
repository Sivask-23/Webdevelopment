// select all boxes

let boxes = document.querySelectorAll(".box");

// getting reset button

let resetBtn = document.querySelector(".reset-btn");

// getting new game btn

let newgameBtn = document.querySelector(".new-btn");

// result part

let result=document.querySelector(".result");

// selecting game container

let gameDiv=document.querySelector(".game");

let playerX = true;

// winning patterns

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



// track each box

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if (playerX) {
            box.innerText = "X";
            playerX = (!playerX);
        } else {
            box.innerText = "O";
            playerX = (!playerX);
        }
        // after taking turn then set the button disable
        // so that the player cant able to change the value
        box.disabled = true;

        checkWinner();
    })
})


// checkWinner

function checkWinner() {

    for (let pat of winPatterns) {

        console.log(pat[0], pat[1], pat[2]);
        console.log(boxes[pat[0]], boxes[pat[1]], boxes[pat[2]]);
        // take values of each boxes
        let box1 = boxes[pat[0]].innerText;
        let box2 = boxes[pat[1]].innerText;
        let box3 = boxes[pat[2]].innerText;

        if (box1 != "" && box2 != "" && box3 != ""){
            if(box1===box2 && box2===box3){
                showWinner(box1);                
            }
        }
    }

}

const showWinner=(winner)=>{
    result.innerText=`Congratulations, player ${winner} won`;
    boxes.forEach((box) => {
        box.disabled = true; 
    });
    resetBtn.style.display='none';
    gameDiv.style.display='none';
}

function resetAll() {
    playerX=true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

    result.innerText="";
    resetBtn.style.display='inline-block';
    gameDiv.style.display='flex';
}

newgameBtn.addEventListener("click",resetAll);


function reset() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    playerX=true;

}

resetBtn.addEventListener("click", reset);