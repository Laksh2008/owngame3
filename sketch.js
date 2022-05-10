var road, beach, garden
var aura, chen
var aliz
var gamestate
var wet_floor
var auraImg
var obstacles
var garbagecan, garbageImg
var garbage2, garbage3, garbage4, garbage5, garbage6, garbage7

function preload() {
  road = loadImage("./Assets/roadforbyju.png")
  beach = loadImage("./Assets/beachforbyju.jpg")
  garden = loadImage("./Assets/gardenforbyju.jpg")

  auraImg = loadImage("./Assets/aura.png")
  chen = loadImage("./Assets/chen.png")
  aliz = loadImage("./Assets/aliz.png")
  wet_floor = loadImage("./Assets/aliz.png")
  garbageImg=loadImage("./Assets/garbagae-removebg-preview.png")
}

function setup() {
  createCanvas(1850,1000);
  aura=createSprite(650,385,10,10)
  aura.addImage(auraImg)
  aura.scale=0.25  

  garbagecan=createSprite(100,200,10,10)
garbagecan.addImage(garbageImg)
garbagecan.scale=0.5

garbage2=createSprite(300,500,10,10)
garbage2.addImage(garbageImg)
garbage2.scale=0.5

garbage3=createSprite(800,100,10,10)
garbage3.addImage(garbageImg)
garbage3.scale=0.5

garbage4=createSprite(1250,420,10,10)
garbage4.addImage(garbageImg)
garbage4.scale=0.5

garbage5=createSprite(1487,101,10,10)
garbage5.addImage(garbageImg)
garbage5.scale=0.5

garbage6=createSprite(1667,601,10,10)
garbage6.addImage(garbageImg)
garbage6.scale=0.5

garbage7=createSprite(890,825,10,10)
garbage7.addImage(garbageImg)
garbage7.scale=0.5
}

function draw() {
  background(beach)
  
  if (keyDown("w")) {
    aura.y= aura.y-5
  }

  if (keyDown("a")) {
    aura.x= aura.x-5
  }

  if (keyDown("s")) {
    aura.y= aura.y+5
  }

  if (keyDown("d")) {
    aura.x= aura.x+5
  }
  drawSprites()
}