function Enemy(){
	var data_ssenemy = {
		//image utilisée pour créer le sprite sheet
		images:[imgEnemy],
		//taille des images dans le sprite sheet
		frames:{width:32, height:32, regX:16, regY:16},
		//définition des animations
		animations:{
			marche_g:[12, 14,true,6], 
			marche_d:[24, 26,true,6],
			marche_bas:[0, 2,true,6],
			marche_haut:[36, 38,true,6],
			attente_dos:[37, 37,false,3],
			attente_face:[1, 1,false,3],
			attente_d:[24, 24,false,3],
			attente_g:[12, 12,false,3],
			attack_face:[56, 56, true, 20],
			jump:[64,64, false, 20] }
	}
	var ssenemy=new createjs.SpriteSheet(data_ssenemy);
	createjs.BitmapAnimation.call(this,ssenemy);
	this.x=400;
	this.y=160;
	speed=2;
	anim=0;
	last_move="avant";
	scene.addChild(this);
	this.gotoAndPlay("attente_face");
	
}
Enemy.prototype=Object.create(createjs.BitmapAnimation.prototype);
