var ghost,hunter,bg,lantern
function preload(){
ghostImage = loadImage('ghost.png')
hunterImage = loadImage('hunter.jpg')
bgImage = loadImage('bg2.jpg')
lanternImage = loadImage('lantern2.jpg')
logImage = loadImage('log sprite.jpg')
}
function setup(){
  createCanvas(800,800)
  bg = createSprite(0,0,800,800)
  bg.addImage(bgImage)
  bg.scale = 6.2 
  ghost = createSprite(700,300)
  ghost.addImage(ghostImage)
  ghost.scale = 0.6
  hunter = createSprite(100,300)
  hunter.addImage(hunterImage)
  hunter.scale = 0.6
  lantern = createSprite(400,200)
  lantern.addImage(lanternImage)
  lantern.scale = 0.2
  log = createSprite(25,200)
  log.addImage(logImage)
  log.scale = 0.5



}
function draw(){
  background('white')
  drawSprites()

}
  
