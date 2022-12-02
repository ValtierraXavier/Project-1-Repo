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

    }   else if(document.getElementById('firstDrumSymbol').innerText === symbolsObj.bSymbol){
        document.getElementById('firstDrumSymbol').innerText = symbolsObj.cSymbol;
    }else if(document.getElementById('firstDrumSymbol').innerText === symbolsObj.cSymbol){
        document.getElementById('firstDrumSymbol').innerText = symbolsObj.dSymbol;
    } else if(document.getElementById('firstDrumSymbol').innerText === symbolsObj.dSymbol){
        document.getElementById('firstDrumSymbol').innerText = symbolsObj.eSymbol;
    }else if(document.getElementById('firstDrumSymbol').innerText === symbolsObj.eSymbol){
        document.getElementById('firstDrumSymbol').innerText = symbolsObj.aSymbol;
    }
    await drum2Speed(1000);
    //console.log(document.getElementById('firstDrumSymbol').innerText);
    i = i-4;
}
}
spinDrum1();

async function spinDrum2(){
for(let j=0;j<=4;j++){
    if (document.getElementById('firstDrumSymbol').innerText === symbolsObj.aSymbol){
        document.getElementById('firstDrumSymbol').innerText = symbolsObj.bSymbol;

    }   else if(document.getElementById('secondDrumSymbol').innerText === symbolsObj.bSymbol){
        document.getElementById('secondDrumSymbol').innerText = symbolsObj.cSymbol;
    }else if(document.getElementById('secondDrumSymbol').innerText === symbolsObj.cSymbol){
        document.getElementById('secondDrumSymbol').innerText = symbolsObj.dSymbol;
    } else if(document.getElementById('secondDrumSymbol').innerText === symbolsObj.dSymbol){
        document.getElementById('secondDrumSymbol').innerText = symbolsObj.eSymbol;
    }else if(document.getElementById('secondDrumSymbol').innerText === symbolsObj.eSymbol){
        document.getElementById('secondDrumSymbol').innerText = symbolsObj.aSymbol;
    }
    await drum2Speed(2000);
    console.log(document.getElementById('secondDrumSymbol').innerText);
    j=j-4;
}
}
spinDrum2();


// for(let i=0;i<=4;i++){
//     if (document.getElementById('thirdDrumSymbol').innerText === symbolsObj.aSymbol){
//         document.getElementById('thirdDrumSymbol').innerText = symbolsObj.bSymbol;

//     }   else if(document.getElementById('firstDrumSymbol').innerText === symbolsObj.bSymbol){
//         document.getElementById('thirdDrumSymbol').innerText = symbolsObj.cSymbol;
//     }else if(document.getElementById('thirdDrumSymbol').innerText === symbolsObj.cSymbol){
//         document.getElementById('thirdDrumSymbol').innerText = symbolsObj.dSymbol;
//     } else if(document.getElementById('thirdDrumSymbol').innerText === symbolsObj.dSymbol){
//         document.getElementById('thirdDrumSymbol').innerText = symbolsObj.eSymbol;
//     }else if(document.getElementById('thirdDrumSymbol').innerText === symbolsObj.eSymbol){
//         document.getElementById('thirdDrumSymbol').innerText = symbolsObj.aSymbol;
//     }
//     //console.log(document.getElementById('thirdDrumSymbol').innerText);
// }

