canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
nasa_images=["mars.jpg" , "more_mars.jpg" , "even_more_mars.jpg" , "a_lot_more_mars" , "too_much_mars"];
var random_number=Math.floor(Math.random()*4);
 width=100;
 height=90;
 background_Image=nasa_images[random_number];
 rover_image="rover.png";
 rover_x=10;
 rover_y=10;

 function add() {
    background_Imgtag=new Image();
    background_Imgtag.onload=uploadBackground;
    background_Imgtag.src=background_Image;

   rover_Imgtag=new Image();
   rover_Imgtag.onload=uploadRover;
   rover_Imgtag.src=rover_image;
 }

 function uploadBackground(){
    ctx.drawImage( background_Imgtag , 0 , 0 , canvas.width , canvas.height);
 }

 function uploadRover(){
    ctx.drawImage( rover_Imgtag , rover_x , rover_y , width , height);
 }

  window.addEventListener("keydown" , mykeydown);

  function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        console.log("When up arrow is pressed , x=" + rover_x + "y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if (rover_y<=500){
        rover_y=rover_y+10;
        console.log("When down arrow is preesed , x=" + rover_x + "y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
    function left() {
        if (rover_x>=0){
            rover_x=rover_x-10;
            console.log("When left arrow is preesed , x=" + rover_x + "y=" + rover_y);
            uploadBackground();
            uploadRover();
        }
    }
    
    function right() {
        if (rover_x<=700){
            rover_x=rover_x+10;
            console.log("When right arrow is preesed , x=" + rover_x + "y=" + rover_y);
            uploadBackground();
            uploadRover();
        }
    }


  function mykeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="38"){
        up();
        console.log(up);
    }

    if (keyPressed=="40"){
        down();
        console.log(down);
    }

    if (keyPressed=="37"){
        left();
        console.log(left);
    }

    if (keyPressed=="39"){
        right();
        console.log(right);
    }
  }

