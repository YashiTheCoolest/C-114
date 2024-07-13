noseX=0
noseY=0

function preload(){
 mustache_pic = loadImage("https://www.freeiconspng.com/thumbs/mustache-png/mustache-by-hurricamo-on-deviantart-10.png") 
}
function setup(){
  canvas = createCanvas(300,300)
  canvas.position(220,200)
  video = createCapture(VIDEO)
  video.hide()
  video.size(300,300)
  poseNet = ml5.poseNet(video, modelLoaded)
  poseNet.on('pose', gotPoses)
}
function modelLoaded(){
  console.log('PoseNet is Initialized')
}
function gotPoses(results){
  if(results.length > 0)
    {
      console.log(results)
      console.log("nose x = " + results[0].pose.nose.x)
      console.log("nose y = " + results[0].pose.nose.y)
    }
}
function draw(){
  image(video, 0, 0, 300, 300)
  image(mustache_pic, noseX, noseY, 30, 30)
}
function click_pic(){
  save("funnyFacez.png")
}
