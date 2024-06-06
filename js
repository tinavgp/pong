let yMinhaRaquete = 195;
let xBolinha = 225;
let yBolinha = 225;
let velocidadeXBolinha = 3;
let velocidadeYBolinha;
let yRaqueteOponente = 195;
let meusPontos=0;
let pontosOponente=0;
let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(450, 450);
  velocidadeYBolinha = random(-3, 3);
  trilha.loop();
}
function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}
function moveMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yMinhaRaquete -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yMinhaRaquete += 5;
  }
}
function criaBolinha() {
  fill("white");
  circle(xBolinha, yBolinha, 15);
}
function moveBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  if (yBolinha <= 0) {
    velocidadeYBolinha = velocidadeYBolinha * -1;
  }
  if (yBolinha >= 450) {
    velocidadeYBolinha = velocidadeYBolinha * -1;
  }
  if (xBolinha >= 450) {
    velocidadeXBolinha = velocidadeXBolinha * -1;
  }
  if (xBolinha <= 0) {
    velocidadeXBolinha = velocidadeXBolinha * -1;
  }
}
function colisaoMinhaRaquete(){
  if(xBolinha - 10 <= 30 && yBolinha > yMinhaRaquete && yBolinha < yMinhaRaquete + 60){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
function criaMinhaRaquete() {
  fill("white");
  rect(20, yMinhaRaquete, 10, 60);
}
function colisaoRaqueteOponente(){
  if(xBolinha + 10 >= 420 && yBolinha > yRaqueteOponente && yBolinha < yRaqueteOponente + 60){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
function criaRaqueteOponente() {
  fill("white");
  rect(420, yRaqueteOponente, 10, 60);
}
function moveRaqueteOponente(){
  let velocidadeRaqueteOponente = random(0,6);
 if(yBolinha>yRaqueteOponente){
    yRaqueteOponente+=velocidadeRaqueteOponente
  }
  if(yBolinha<yRaqueteOponente){
    yRaqueteOponente-=velocidadeRaqueteOponente
  }
}
function calculaPontuacao(){
  if(xBolinha<=0){
    pontosOponente +=1
    ponto.play();
  }
  if(xBolinha>=450){
    meusPontos+=1
    ponto.play();
  }
}
function inicializaCores(){
  fill("white");
  textAlign(CENTER, CENTER);
  textSize(15);
  textStyle(BOLD)
}
function mostraPontuacao(){
  text("Meus Pontos", 150, 50)
  text("Pontos do Oponente", 300, 50)
  text(meusPontos, 150, 75)
  text(pontosOponente, 300,75)
}
function draw() {
  background("black");
  criaBolinha();
  criaMinhaRaquete();
  criaRaqueteOponente();  
  colisaoMinhaRaquete();
  colisaoRaqueteOponente();
  moveMinhaRaquete();
  moveBolinha();
  moveRaqueteOponente();
  inicializaCores();
  calculaPontuacao();
  mostraPontuacao();
}
