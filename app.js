let 
drum1SpeedSetting = 50, 
drum2SpeedSetting = 100, 
drum3SpeedSetting = 150;

let 
stopDrum1 = false,
stopDrum2 = false,
stopDrum3 = false,
drumSpinning = null;

let d1, d2, d3;

let match3, match2, noMatch;

let 
drum1Position, 
drum2Position,
drum3Position;

let drumArray=[];
let reverseDrumArray=[drum3Position,drum2Position,drum1Position];
let detectionArray=[];
// console.log(drum1Position);
// console.log(drum2Position);
// console.log(drum3Position);


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
    resetDrums();
    
    
}
function stopDrums(){
    drumSpinning=false;
    stopDrum1=true;
    stopDrum2=true;
    stopDrum3=true;
    // drumArray.push(document.getElementById('firstDrumSymbol').innerText);
    // console.log(drumArray);
    // drumArray.push(document.getElementById('secondDrumSymbol').innerText);
    // console.log(drumArray);
    // drumArray.push(document.getElementById('thirdDrumSymbol').innerText);
    // console.log(drumArray);
    // matchDetection4();
    matchDetection5();
    for1();
    for2();
    for3();
    makeComparable();
    //console.log(detectionArray);
    console.log(typeof(d1) , typeof(d2) , typeof(d3));
    console.log(d1,d2,d3);
    }

let startRoll = document.getElementById('startButton');
startRoll.addEventListener("click",spinDrums);

let stopRoll = document.getElementById('resetButton');
stopRoll.addEventListener('click',stopDrums);



// let  noMatches=null, twoMatches=null, threeMatches=null;
// function matchDetection(){
//     if(drum1Position==drum2Position && drum2Position==drum3Position){
//     threeMatches=true;
//     console.log(threeMatches)
//     return threeMatches;
    
//         }else if(drum1Position==drum2Position || drum1Position==drum3Position ||drum2Position==drum1Position || drum2Position==drum3Position ||drum3Position==drum1Position || drum3Position==drum2Position){
//             twoMatches=true;
    
//             return twoMatches
//                 }else if(drum1Position!=drum2Position && drum2Position!=drum3Position){
//                     noMatches=true;
            
//                     return noMatches;
// }

// }

// function showMatchNum(){
//     if (threeMatches===true){
//         console.log("3!");
//     }else if(twoMatches===true){
//         console.log('2!');
//     }else if(noMatches===true){
//         console.log("0!");
//     }
//     return
// }

// function scoring(){

// }




// drumArray.forEach(MatchDetection2);

// function MatchDetection2(letter){
//      for(i=0;i<2;i++){
//          reverseDrumArray[i]
//      }
//     if(drumArray[i]==drumArray[2]){
//         detectionArray
//     }
// }
//}
// drumArray.forEach();
// function matchDetection3(){
//     for(let i=0;i<3;i++){
//         if(document.getElementById('thirdDrumSymbol').innerText==drumArray[i]){
//             detectionArray.push(i);
//         }else if(document.getElementById('secondDrumSymbol').innerText==drumArray[i]){
//             detectionArray.push(i);
//         }
//     }
// }
//     if(sym!==drumArray[2]){
//   detectionArray.push("match");
//  }


// detectionArray=drumArray.filter(matchDetection3);
// console.log(detectionArray);

// function matchDetection4(){
// drumArray.forEach(element => {
//     for(let i=0; i<drumArray.length; i++){
//  if(drumArray[i] == reverseDrumArray[i]){
//     detectionArray.push(drumArray[i]);
//     //console.log(detectionArray[i]);
//  }/*else{console.log('nothing');}*/
//  }
// });
    
//     }

function matchDetection5(){
    // for (i=0;i<drumArray.length; i++)
   if(d1==d2 && d2==d3){
    match3=true;
    console.log(match3);
   }else if((d1 ==d2 || d1==d3 || d2==d3)){
    match2=true;
    console.log(match2);
    }else if(d1 !==d2 || d1!==d3 || d2!==d3){
    noMatch=true;
    console.log(noMatch);
}
return;
}
   
    


// if (drum1Position == symbolsObj.aSymbol){
// console.log("a is working");
// }
// else{"not A"};

function resetDrums(){
    drum1Position="";
    drum2Position="";
    drum3Position="";
    d1="";
    d2="";
    d3="";
}
function makeComparable(){
    drumArray.push(document.getElementById('firstDrumSymbol').innerText);
    console.log(drumArray);
    drumArray.push(document.getElementById('secondDrumSymbol').innerText);
    console.log(drumArray);
    drumArray.push(document.getElementById('thirdDrumSymbol').innerText);
     console.log(drumArray);
    // console.log(detectionArray);
}
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

