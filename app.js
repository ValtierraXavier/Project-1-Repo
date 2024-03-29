let 
drum1SpeedSetting = 25, 
drum2SpeedSetting = 30, 
drum3SpeedSetting = 40, 
stopDrum1,
stopDrum2,
stopDrum3,
drum1Spinning = null,
drum2Spinning = null,
drum3Spinning = null,
d1,
d2, 
d3,
winOrLose={
    win: "You Win!",
    lose:"You Lose"
}, 
showWin,
showLoss, 
drum1Position, 
drum2Position,
drum3Position,

 drumArray=[],
 reverseDrumArray=[],
 detectionArray=[],
//used in 
 compareD1, 
 compareD2, 
 compareD3, 
 match3,
 match2,
 modalState
 

const symbolsObj ={
    aSymbol:"A",
    bSymbol:"B",
    cSymbol:"C",
    dSymbol:"D",
    eSymbol:"E"
};



document.addEventListener('keyup', (event) => {
    const name = event.key;
    const code = event.code;
    if(code == 'KeyR'){
        resetGame()
    }
    if(code == 'KeyH'){
        openModal()
    }
    if((code == 'Space') && (drum1Spinning == null || drum1Spinning ==false)){
        spinDrums()
    } else if(code == 'Space'&& drum1Spinning){
        stopDrums()
    }
})

//starts a function to spin all drums when you click on the 'spin' button
let startRoll = document.getElementById('spinButton');
startRoll.addEventListener("click",spinDrums);


//starts a function to stop all drums when you click the "stop" button.
let stopRoll = document.getElementById('stopButton');
stopRoll.addEventListener('click',stopDrums);

//resets all values to initial values.
let resetAll = document.getElementById('resetButton');
resetAll.addEventListener('click',resetGame);

//function to set how quickly the symbols refresh on drum1 takes drum1SpeedSetting.
function drum1Speed(ms){
    return new Promise(resolve =>{
        
        setTimeout(()=>{resolve('')}, ms);
})
}

//function to set how quickly the symbols refresh on drum1 takes drum2SpeedSetting.
function drum2Speed(ms){
    return new Promise(resolve =>{
        
        setTimeout(()=>{resolve('')}, ms);
})
}

//function to set how quickly the symbols refresh on drum1 takes drum3SpeedSetting.
function drum3Speed(ms){
    return new Promise(resolve =>{
        
        setTimeout(()=>{resolve('')}, ms);
})
}

//a function to loop through symbols displayed in drum1
async function spinDrum1(){
for(let i=0;i<=4;i++){
    if (document.getElementById('firstDrumSymbol').innerText === symbolsObj.aSymbol){
        document.getElementById('firstDrumSymbol').innerText = symbolsObj.bSymbol;
    } else if(document.getElementById('firstDrumSymbol').innerText === symbolsObj.bSymbol){
        document.getElementById('firstDrumSymbol').innerText = symbolsObj.cSymbol;
        }else if(document.getElementById('firstDrumSymbol').innerText === symbolsObj.cSymbol){
        document.getElementById('firstDrumSymbol').innerText = symbolsObj.dSymbol;
            } else if(document.getElementById('firstDrumSymbol').innerText === symbolsObj.dSymbol){
        document.getElementById('firstDrumSymbol').innerText = symbolsObj.eSymbol;
                }else if(document.getElementById('firstDrumSymbol').innerText === symbolsObj.eSymbol){
        document.getElementById('firstDrumSymbol').innerText = symbolsObj.aSymbol;
    } 
    i=i-4;
    await drum1Speed(drum1SpeedSetting);
    if(stopDrum1==true){
        return;
        }
    }
    
}

//a function to loop through symbols displayed in drum2
async function spinDrum2(){
for(let j=0;j<=4;j++){
    if (document.getElementById('secondDrumSymbol').innerText === symbolsObj.aSymbol){
        document.getElementById('secondDrumSymbol').innerText = symbolsObj.bSymbol;
     }else if(document.getElementById('secondDrumSymbol').innerText === symbolsObj.bSymbol){
        document.getElementById('secondDrumSymbol').innerText = symbolsObj.cSymbol;
        }else if(document.getElementById('secondDrumSymbol').innerText === symbolsObj.cSymbol){
        document.getElementById('secondDrumSymbol').innerText = symbolsObj.dSymbol;
            } else if(document.getElementById('secondDrumSymbol').innerText === symbolsObj.dSymbol){
        document.getElementById('secondDrumSymbol').innerText = symbolsObj.eSymbol;
                 }else if(document.getElementById('secondDrumSymbol').innerText === symbolsObj.eSymbol){
        document.getElementById('secondDrumSymbol').innerText = symbolsObj.aSymbol;
    }
    await drum2Speed(drum2SpeedSetting);
    //console.log(document.getElementById('secondDrumSymbol').innerText);
    j=j-4;
    if(stopDrum2==true){
        return;
        }
}
}

//a function to loop through symbols displayed in drum3
async function spinDrum3(){
for(let k=0;k<=4;k++){
    if (document.getElementById('thirdDrumSymbol').innerText === symbolsObj.aSymbol){
        document.getElementById('thirdDrumSymbol').innerText = symbolsObj.bSymbol;
        }else if(document.getElementById('thirdDrumSymbol').innerText === symbolsObj.bSymbol){
        document.getElementById('thirdDrumSymbol').innerText = symbolsObj.cSymbol;
            }else if(document.getElementById('thirdDrumSymbol').innerText === symbolsObj.cSymbol){
        document.getElementById('thirdDrumSymbol').innerText = symbolsObj.dSymbol;
                }else if(document.getElementById('thirdDrumSymbol').innerText === symbolsObj.dSymbol){
        document.getElementById('thirdDrumSymbol').innerText = symbolsObj.eSymbol;
                    }else if(document.getElementById('thirdDrumSymbol').innerText === symbolsObj.eSymbol){
        document.getElementById('thirdDrumSymbol').innerText = symbolsObj.aSymbol;
    }
    await drum3Speed(drum3SpeedSetting);
    //console.log(document.getElementById('thirdDrumSymbol').innerText);
    k=k-4
    if(stopDrum3==true){
        return;
        }
}
}

//Function to render teh stop and spin buttons 
function buttonState(button1, button2){
    button1.style.display = "none";
    button2.style.display = "flex";
    return
}

//function to spin all drums simultaneously
function spinDrums(){
    stopRoll.removeAttribute('disabled');
    startRoll.setAttribute('disabled', 'disabled');
    drum1Spinning = true;
    drum2Spinning = true;
    drum3Spinning = true;
    stopDrum1=false;
    stopDrum2=false;
    stopDrum3=false;
    spinDrum1();
    spinDrum2();
    spinDrum3();
    resetDrums();
    buttonState(startRoll,stopRoll);
    match3=null;
    match2=null;
}
//function to stop all drums simultaneously
function stopDrums(){
    startRoll.removeAttribute('disabled');
    drum1Spinning=false;
    drum2Spinning=false;
    drum3Spinning=false;
    stopDrum1=true;
    stopDrum2=true;
    stopDrum3=true;
    buttonState(stopRoll,startRoll);
    matchDetection();
    winnerLoser();
}

//a function to initialize the game.
function resetGame(){
    stopDrums();
    document.getElementById('firstDrumSymbol').innerText="A";
    document.getElementById('secondDrumSymbol').innerText="B";
    document.getElementById('thirdDrumSymbol').innerText="C";
    showWin.innerHTML="";
}

function resetDrums(){
    drum1Position="";
    drum2Position="";
    drum3Position="";
    d1="";
    d2="";
    d3="";
    compareD1="";
    compareD2="";
    compareD3="";
    return;
}
function makeComparable(){
    const results = {
    compareD1:document.getElementById('firstDrumSymbol').innerText,
    
    compareD2:document.getElementById('secondDrumSymbol').innerText,
    
    compareD3:document.getElementById('thirdDrumSymbol').innerText
    }
     
    return results;
}
//sets the value shown in the first drum into the d1 variable
function for1(){
    if(document.getElementById('firstDrumSymbol').innerText === "A"){
        d1=symbolsObj.aSymbol;
        }else if(document.getElementById('firstDrumSymbol').innerText === "B"){
        d1=symbolsObj.bSymbol;
            }else if(document.getElementById('firstDrumSymbol').innerText === "C"){
        d1=symbolsObj.cSymbol;
                 }else if(document.getElementById('firstDrumSymbol').innerText === "D"){
        d1=symbolsObj.dSymbol;
                     }else if(document.getElementById('firstDrumSymbol').innerText === "E"){
        d1=symbolsObj.eSymbol;
    }
    return d1;
}
//sets the value shown in the second drum into the d2 variable
function for2(){
    if(drum2Position === "A"){
        d2=document.getElementById('secondDrumSymbol').innerText.aSymbol; 
        }else if(drum2Position === "B"){
        d2=document.getElementById('secondDrumSymbol').innerText.bSymbol; 
            }else if(drum2Position === "C"){
        d2=document.getElementById('secondDrumSymbol').innerText.cSymbol; 
                }else if(drum2Position === "D"){
        d2=document.getElementById('secondDrumSymbol').innerText.dSymbol; 
                    }else if(drum2Position === "E"){
        d2=document.getElementById('secondDrumSymbol').innerText.eSymbol;         
    }
    return d2;
}
//sets the value shown in the third drum into the d3 variable. this is done to be able to compare drum symbols.
function for3(){
    if(drum3Position === "A"){
        d3=document.getElementById('thirdDrumSymbol').innerText.aSymbol;
    }else if(drum3Position === "B"){
        d3=document.getElementById('thirdDrumSymbol').innerText.bSymbol;
    }else if(drum3Position === "C"){
        d3=document.getElementById('thirdDrumSymbol').innerText.cSymbol;
    }else if(drum3Position === "D"){
        d3=document.getElementById('thirdDrumSymbol').innerText.dSymbol;
    }else if(drum3Position === "E"){
        d3=document.getElementById('thirdDrumSymbol').innerText.eSymbol;
    }
    return d3;
}

function matchDetection(){
if (makeComparable().compareD1==makeComparable().compareD3 && makeComparable().compareD1==makeComparable().compareD2){
    match3=true;
    // console.log("you win");
    }else if((makeComparable().compareD1==makeComparable().compareD2)||(makeComparable().compareD1==makeComparable().compareD3)||(makeComparable().compareD2==makeComparable().compareD3)||(makeComparable().compareD3==makeComparable().compareD2)){
    match3=false
    match2=true
    // console.log("partial Win");
}else{
    // console.log(("You Lose"))
}
return match3, match2;
}
function winnerLoser(){
    if(match3==true){
        showWin = document.getElementById('displayed');
        showWin.innerHTML = "Full Win!!";
            }else if(match3==false && match2==true){
                showWin = document.getElementById('displayed');
                showWin.innerHTML = "Partial Win!!";
            }else{
                showWin = document.getElementById('displayed');
                showWin.innerHTML = "You Lose";
            }
return;
}




const helpButton = document.getElementById('helpButton');
helpButton.addEventListener('click', openModal);
const helpModal = document.getElementById('helpModalBackground');
const closeTheModal = document.getElementsByClassName('closeModalButton')[0]
closeTheModal.addEventListener('click',openModal)
closeTheModal.addEventListener('mouseover',onHover)
closeTheModal.addEventListener('mouseout', noHover)

// function onHover(){
//     closeTheModal.style.transition = 'right .1s ease-in-out'
//     setTimeout(()=>{closeTheModal.innerHTML = 'Close'}, 200)
// }

// function noHover(){
//     closeTheModal.style.borderColor = 'lightgray'
//     setTimeout(()=>{closeTheModal.innerHTML = 'X'}, 50)
// }

function openModal(){
    if((modalState == 'closed') || (modalState == undefined)){
        modalState = 'open'
        helpModal.style.display = 'flex'
    }else if(modalState == 'open'){
        modalState='closed'
        helpModal.style.display = 'none'
    }
}