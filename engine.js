var SpriteSheet = new function() {
	this.map = { };
	this.load = function(spriteData, callback) {
		this.map = spriteData;
		this.image = new Image();
		this.image.onload = callback;
		this.image.src = 'images/sprites.png';
	};
	this.draw = function(ctx,sprite,x,y,frame) {
	var s = this.map[sprite];
	console.log(s);
	if(!frame) frame = 0;
		ctx.drawImage(this.image,
		s.x + frame * s.w,
		s.y,
		s.w, s.h,
		x, y,
		s.w, s.h);
	};
}
