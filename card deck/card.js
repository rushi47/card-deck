
var droppedElementId;
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text",ev.target.id);
  console.log("ev.target.id - picked data = ", ev.target.id);
  droppedElementId = ev.target.className;
  console.log(droppedElementId)
 


}

function drop(ev) {
     ev.preventDefault();
    var targetElement = document.getElementById(ev.srcElement.id);
    var dropTarget = targetElement.className;
    console.log("dropTarget", dropTarget);
    if(dropTarget == droppedElementId){
        console.log("dropTarget=" + dropTarget);
        console.log("droppedElementId=" + droppedElementId);
        var data=ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
        var spades=[]
         spades.push(data);
      console.log(spades);            
    }
    
}

// generateRandomDec(52);

// function generateRandomDec(Num){
//   var arr=[];

//   for(var i=0; i<num; i++){
//     arr.push(generateDec());
//   }

//   return arr;
// }






// function generateDec(){
  
//   var dec=Math.floor(Math.random() * 5) 
  
//   var card=Math.floor(Math.random() * 14)
  
//   return "dec+card";

  
// }
//===============================
// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }

// // Used like so
// var arr = [2, 11, 37, 42];
// arr = shuffle(arr);
// console.log(arr);