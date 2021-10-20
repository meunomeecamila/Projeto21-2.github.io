var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, edges;
var music;

function preload(){
    // carregue o som aqui
    music = loadSound("music.mp3");
}

function setup(){
    tela = createTela(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(515,580,200,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(740,580,220,30);
    bloco4.shapeColor = "green";

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);

    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX = 4;
    bola.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges =createEdgesprites();
    bola.bounceOff(edges);

    //bloco 1
    if(bloco1.isTouching(bola)){ bola.shapeColor = "blue"; bola.velocityX = 0; bola.velocityY = 0; music.stop()};
    //bloco 2
    if(bloco2.isTouching(bola)){ bola.shapeColor = "oranger"; bola.velocityX = 0; bola.velocityY = 0; music.stop()};
    //bloco 3
    if(bloco3.isTouching(bola)){ bola.shapeColor = "red"; bola.velocityX = 0; bola.velocityY = 0; music.stop()};
    //bloco 4
    if(bloco4.isTouching(bola)){ bola.shapeColor = "green"; bola.velocityX = 0; bola.velocityY = 0; music.stop()};

    drawSprites();
}