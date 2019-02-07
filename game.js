//Cogemos el canvas del HTML
var canvas = document.getElementById('game');
var ctx = canvas.getContext && canvas.getContext('2d');

if(!ctx) {
	// No 2d context available, let the user know
	alert('Please upgrade your browser');
} else {
	startGame();
}
function startGame() {
	/*ctx.fillStyle = "#FFFF00";
	ctx.fillRect(50,100,380,400);
	ctx.fillStyle = "rgba(0,0,128,0.5)";
	ctx.fillRect(25,50,380,400);*/
	var estado = 0;
	var data = {
		"explosion" : {"x":0,"y":75,"w":62,"h":50}
	}
	/*SpriteSheet.load(data,function(){
		//SpriteSheet.draw(ctx,"explosion",0,0,4);
		//SpriteSheet.draw(ctx,"explosion",0,0,0);
		for(var i = 0; i < 10; i++){
			setTimeout(function(){
				SpriteSheet.draw(ctx,"explosion",0,0,i);
			},2000);
		}
		
	});*/
	SpriteSheet.load(data,function(){
		var id = setInterval(expl, 700);
		function expl(){
			if(estado == 12){
				clearInterval(id);
			}
			else{
				estado++;
				SpriteSheet.draw(ctx,"explosion",0,0,estado);
			}
		}
	});
}

//Carga del sprite de la nave principal
/*var img = new Image();
img.src = 'images/sprites.png';
img.onload = function() {
	ctx.drawImage(img,0,0,40,40,100,100,40,40);
}*/
