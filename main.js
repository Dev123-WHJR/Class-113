function preload(){
}

function setup()
{
  canvas =  createCanvas(500,500);
  canvas.position(150,150);
  video = createCapture(VIDEO);
  video.hide();
  }

function draw()
{
    image(VIDEO,0,0,500,500);
}

function take_snapshot()
{
    save('your_img.png');
}