let bananaFruit = (backgroundImage = "url('https://cdn.pixabay.com/photo/2014/04/02/10/40/bananas-304202__340.png')");
let orangeFruit = (backgroundImage = "url('https://st2.depositphotos.com/1007168/48416/v/600/depositphotos_484169170-stock-illustration-illustrated-illustration-orange-fruit-vector.jpg')");
let appleFruit = (backgroundImage = "url('https://cdn.pixabay.com/photo/2020/03/25/12/33/apple-4967157__340.png')");
let grapesFruit = (backgroundImage = "url('https://static.vecteezy.com/system/resources/thumbnails/002/604/045/small_2x/grapes-fresh-fruits-hand-draw-style-icon-free-vector.jpg')");
let strawberryFruit = (backgroundImage = "url('https://thumbs.dreamstime.com/b/strawberry-vector-illustration-isolated-white-background-191972623.jpg')");

const symbols = [bananaFruit,orangeFruit,appleFruit,grapesFruit,strawberryFruit];

function spin(){
    for(i=0; i<5; i++){
    document.getElementById('slot1').style.backgroundImage = symbols[i];
    }
    return symbols[i];
    i = i-5;
}
setInterval(spin, 1000);
