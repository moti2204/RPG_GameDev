function Sphere (x) {
	createjs.Shape.call(this)
	this.rayon=15;
	this.graphics.beginFill("rgb(120,0,255)").drawCircle(0,0,this.rayon);
	this.x=x;
	this.y=Math.random()*140|0+10;
	this.vitesse=Math.random()*6-3;
	while (Math.abs(this.vitesse)<1){
		this.vitesse=Math.random()*6-3;
	}

	scene.addChild(this);
}
Sphere.prototype=Object.create(createjs.Shape.prototype);
Sphere.prototype.deplacementSphere=function(){
	this.y=this.y+this.vitesse;
	if (this.y<=15) {
		this.y=15;
		this.vitesse=-this.vitesse;
	}
	if (this.y>=140) {
		this.y=140;
		this.vitesse=-this.vitesse;
	}
}
Sphere.prototype.collisionSphere=function(){
	var distance=Math.sqrt(Math.pow((player.x-this.x),2)+Math.pow((player.y-this.y),2));
	// le 12 ci-dessous est totalement empirique, à ma connaissance, il n'existe pas de "formule magique" pour gérer les collisions,
	//c'est d'ailleurs souvent une source de bug dans beaucoup de jeux (on a pas l'impression d'avoir été touché et pourtant, on est mort !)
	if (distance<(this.rayon+12)){
		player.isAlive=false;
	}
}
