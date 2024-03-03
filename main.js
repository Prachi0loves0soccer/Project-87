var canvas = new fabric.Canvas('myCanvas')

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
		block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:block_y,
        left:block_x,
        });    	
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		new_image(pinkiepie.png)
		console.log("r")
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image(rainbowdash.png)
		console.log("g")
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image(twilightsparkle.png)
		console.log("y")
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image(applejack.png)
		console.log("p")
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image(rarity.png)
		console.log("b")
	}
    if(keyPressed == '81')
	{
		block_x = 850;
		new_image(fluttershy.png)
		console.log("q")
	}
	
}

