var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg"
var background_imgTag = null;


//When body loads (FUNCTION ADD)

//When the variable is loaded on the browser, the function "uploadbackground" is created.
//The source of backgroundimagetag should be the same thing as background_image's image.
//New Image() is used to create a new image into the backgroundimagetag when the body loads

//WHITEHATJR "● Once the page is loaded, the body is loaded and this onload event will occur. ● So inside this onload event we have placed an add function. This means when the page is loaded the add function will be called automatically. ● We are doing this because when the page is loaded we want the canvas, rover and the background image to be loaded."
//WHITEHATJR "This means we are setting a new image to the variable background_imgTag. *It is not compulsory to use this variable name, the variable name can be anything."

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    //Same thing but creating a new function for Rover, "uploadrover" 
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}
//(function UPLOADBACKGROUND)

//WHITEHATJR "● Set the background on the canvas. ● The drawImage() method draws an image onto the canvas. ● Syntax: ctx.drawImage(img,x,y,width,height); ○ ctx is the drawing reference of the canvas. ○ img: This should be the image variable, which should be defined before ○ x: at what x coordinate the image should be plotted. ○ y: at what y coordinate the image should be plotted. ○ width of the image ○ height of the image."
function uploadbackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
//Same thing, just for Rover.
function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
//(window.addEventListener)

//Key down means when ANY key is pressed and held, not just the down arrow key. We have created a function for this keydown event.
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    //Varible keypressed. keyCode means whatever key you pressed, get the ASCII code of the key pressed.
keypressed = e.keyCode;
console.log(keypressed);
if(keypressed=='38'){
    car1_up();
    console.log("up arrow key");
}
if(keypressed=='37'){
    car1_left();
    console.log("left arrow key");
}
if(keypressed=='39'){
    car1_right();
    console.log("right arrow key");
}
if(keypressed=='40'){
    car1_down();
    console.log("down arrow key");
}
if(keypressed=='87'){
    car2_up();
    console.log("w key");
}
if(keypressed=='65'){
    car2_left();
    console.log("a key");
}
if(keypressed=='68'){
    car2_right();
    console.log("d key");
}
if(keypressed=='83'){
    car2_down();
    console.log("s key");
}
}

function car1_up(){
    if(car1_y >=0){

    
    car1_y = car1_y - 10;
    console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadbackground();
    uploadcar1();
    uploadcar2();
}
}

function car1_down(){
    if(car1_y <=500){

    
    car1_y = car1_y + 10;
    console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadbackground();
    uploadcar1();
    uploadcar2();
}
}

function car1_left(){
    if(car1_x >=0){

    
    car1_x = car1_x - 10;
    console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadbackground();
    uploadcar1();
    uploadcar2();
}
}

function car1_right(){
    if(car1_x <=500){

    
    car1_x = car1_x + 10;
    console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadbackground();
    uploadcar1();
    uploadcar2();
}
}
//BREAKPOINT //BREAKPOINT //BREAKPOINT
function car2_up(){
    if(car2_y >=0){

    car2_y = car2_y - 10;
    console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadbackground();
    uploadcar1();
    uploadcar2();
}
}

function car2_down(){
    if(car2_y <=500){

    
    car2_y = car2_y + 10;
    console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadbackground();
    uploadcar1();
    uploadcar2();
}
}

function car2_left(){
    if(car2_x >=0){

    
    car2_x = car2_x - 10;
    console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadbackground();
    uploadcar1();
    uploadcar2();
}
}

function car2_right(){
    if(car2_x <=500){

    
    car2_x = car2_x + 10;
    console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadbackground();
    uploadcar1();
    uploadcar2();
}
}

if(car1_x > 700)
{
    console.log("car1 Won")
    document.getElementById('game_status').innerHTML = "Car 1 Won!!"
}

if(car2_x > 700)
{
    console.log("car2 Won")
    document.getElementById('game_status').innerHTML = "Car 2 Won!!"
}