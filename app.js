let 
drum1SpeedSetting = 200, 
drum2SpeedSetting = 300, 
drum3SpeedSetting = 400;
let stopDrum1 = false;
let stopDrum2 = false;
let stopDrum3 = false;
let drumSpinning = null;
let drum1Position=document.getElementById('firstDrumSymbol').innerText, 
drum2Position=document.getElementById('secondDrumSymbol').innerText, drum3Position=document.getElementById('thirdDrumSymbol').innerText;
console.log(drum1Position);
console.log(drum2Position);
console.log(drum3Position);



const symbolsObj ={
    aSymbol:"A",
    bSymbol:"B",
    cSymbol:"C",
    dSymbol:"D",
    eSymbol:"E"
};

function drum1Speed(ms){
    return new Promise(resolve =>{
        
        setTimeout(()=>{resolve('')}, ms);
})
}

function drum2Speed(ms){
    return new Promise(resolve =>{
        
        setTimeout(()=>{resolve('')}, ms);
})
}

function drum3Speed(ms){
    return new Promise(resolve =>{
        
        setTimeout(()=>{resolve('')}, ms);
})
}

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
    //console.log(stopDrum1);
    await drum1Speed(drum1SpeedSetting);
    if(stopDrum1==true){
        return;
        }
    }
    //console.log(document.getElementById('firstDrumSymbol').innerText);  
}
    //document.getElementById('resetButton').addEventListener('click',stopDrum1=true);

async function spinDrum2(){
for(let j=0;j<=4;j++){
    if (document.getElementById('secondDrumSymbol').innerText === symbolsObj.aSymbol){
        document.getElementById('secondDrumSymbol').innerText = symbolsObj.bSymbol;

    }   else if(document.getElementById('secondDrumSymbol').innerText === symbolsObj.bSymbol){
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

async function spinDrum3(){
for(let k=0;k<=4;k++){
    if (document.getElementById('thirdDrumSymbol').innerText === symbolsObj.aSymbol){
        document.getElementById('thirdDrumSymbol').innerText = symbolsObj.bSymbol;

    }   else if(document.getElementById('thirdDrumSymbol').innerText === symbolsObj.bSymbol){
        document.getElementById('thirdDrumSymbol').innerText = symbolsObj.cSymbol;
    }else if(document.getElementById('thirdDrumSymbol').innerText === symbolsObj.cSymbol){
        document.getElementById('thirdDrumSymbol').innerText = symbolsObj.dSymbol;
    } else if(document.getElementById('thirdDrumSymbol').innerText === symbolsObj.dSymbol){
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

function spinDrums(){
    spinDrum1();
    spinDrum2();
    spinDrum3();
    drumSpinning = true;
}
function stopDrums(){
    drumSpinning=false;
    stopDrum1=true;
    stopDrum2=true;
    stopDrum3=true;
    // matchDetection();
}

let startRoll = document.getElementById('startButton');
startRoll.addEventListener("click",spinDrums);

let stopRoll = document.getElementById('resetButton');
stopRoll.addEventListener('click',stopDrums);

// function matchDetection(){
//     let symbolMatches;
// if(drum1Position===drum2Position && drum2Position===drum3Position){
//     symbolMatches=1;
//     console.log(symbolMatches);
// }else if(drum1Position===drum2Position || drum1Position==drum3Position ||drum2Position===drum1Position || drum2Position===drum3Position ||drum3Position===drum1Position || drum3Position===drum2Position){
//     symbolMatches=2;
// console.log(symbolMatches);
// }else if(drum1Position!==drum2Position && drum2Position!==drum3Position){
//     symbolMatches=3;
//     console.log(symbolMatches);
// }
// return symbolMatches;
// }

// function scoring(){

// }