const symbolsObj ={
    aSymbol:"A",
    bSymbol:"B",
    cSymbol:"C",
    dSymbol:"D",
    eSymbol:"E"
};

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
    //console.log(document.getElementById('firstDrumSymbol').innerText);
}

// setInterval(changeLetter, 3000);
// drumSymArr = {
//     drum1: document.getElementById('firstDrumSymbol'),
//     drum2: document.getElementById('secondDrumSymbol'),
//     drum3: document.getElementById('thirdDrumSymbol')
// }
// //console.log(symbolsArr);
//  let first = document.getElementById('firstDrumSymbol').innerHTML.style.color='red';
// console.log(drumSym1);

// drumSym1.style.color='red';
// const drumSym2 = document.getElementById('secondDrumSymbol');
// const drumSym3 = document.getElementById('thirdDrumSymbol');





// if (drumSym1===drumSym2 && drumSym1==drumSym3){
//     console.log("Jackpot!");
// }
// if (drumSym2===drumSym1 && drumSym2===drumSym3){
// console.log('Jackpot!');
// }

// if (drumSym3===drumSym2 && drumSym3===drumSym1){
// console.log('Jackpot!');
// }