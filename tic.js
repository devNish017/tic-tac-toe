let turn ="0"

const msg=document.querySelector(".msg");

let winner=[[0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
];
let board_array=new Array(9).fill("E");
function check(){
    for(let [index1,index2,index3] of winner){
        if (board_array[index1] !== "E" &&
            board_array[index1] === board_array[index2] &&
            board_array[index2] === board_array[index3])
    {
        // console.log("1")
        return 1;
    }
        }
        return 0;
}
const board=document.querySelector(".container")



function print(event){

    const element=event.target;
    const index = parseInt(element.id);
    if(board_array[index]==='E'){
    if (turn === "0") {
        element.innerHTML = "⭕";
        board_array[index]="0"
        if(check()){
            msg.innerHTML="Player 1 wins";
            board.removeEventListener('click',print)
            restart.style.transform = "scale(1.2)"; 
                restart.style.transition = "transform 0.3s ease-in-out";
            return
        }
       
         turn ="X"
    }
    else{
         element.innerHTML = "❌";
            board_array[index]="X"
            if(check()){
                msg.innerHTML="Player 2 wins";
                board.removeEventListener('click',print)
                restart.style.transform = "scale(1.2)"; 
                restart.style.transition = "transform 0.3s ease-in-out";
                return
            }
           
        turn ="0"
    }
    animation()
    if(board_array.every(cell=>cell!=='E')){
    msg.innerHTML="Match Draw..";
    restart.style.transform = "scale(1.2)"; 
                restart.style.transition = "transform 0.3s ease-in-out";
      }
}
}
board.addEventListener('click',print);

const restart=document.getElementById("button")
restart.addEventListener('click',()=>{
    const box=document.querySelectorAll(".box")
    Array.from(box).forEach((value)=>{
        value.innerHTML="" 
        
    })
    board.removeEventListener('click',print);
        
        board.addEventListener('click',print);
    board_array.fill("E");
    msg.innerHTML="";
    turn ="0"
  animation()
  restart.style.transform = "scale(1)"; 
  restart.style.transition = "transform 0.3s ease-in-out";
   
})

img1.style.transform = "scale(1.2)"; 
function animation(){

// accessing img 1 and 2

    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");


// checking turn..
if(turn ==="0"){
//     // apply  animation part on img 1....
img1.style.transform = "scale(1.2)";  // Player 1 animation
img1.style.transition = "transform 0.3s ease-in-out";
img2.style.transform = "scale(1)";// reset player 2

}
else{
    // apply  animation part on img 2....
    img2.style.transform = "scale(1.2)";  // Player 2 animation
    img2.style.transition = "transform 0.3s ease-in-out";
    img1.style.transform = "scale(1)";    // reset player 1
 }

    };





