function Player(){
	var data_ssplayer = {
		//image utilisée pour créer le sprite sheet
		images:[imgPlayer],
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
	var ssplayer=new createjs.SpriteSheet(data_ssplayer);
	createjs.BitmapAnimation.call(this,ssplayer);
	this.x=200;
	this.y=160;
	speed=2;
	anim=0;
	last_move="avant";
	scene.addChild(this);
	this.gotoAndPlay("attente_face");
	
}
Player.prototype=Object.create(createjs.BitmapAnimation.prototype);
Player.prototype.deplacementPlayer=function(){
	//gauche
	if (clavier.gauche==1 && clavier.droite==0 && clavier.haut==0 && clavier.bas==0){
		if (anim==0){
			this.gotoAndPlay("marche_g");
			anim=1;
			last_move="gauche";
		}
		if (this.x>10){
			this.x=this.x-speed;
		}
		
	}
	//droite
	if (clavier.droite==1 && clavier.gauche==0 && clavier.haut==0 && clavier.bas==0){
		if (anim==0){
			this.gotoAndPlay("marche_d");
			anim=1;
			last_move="droite";
		}
		if (this.x<490){
			this.x=this.x+speed;
		}
	}
	//haut
	if (clavier.droite==0 && clavier.gauche==0 && clavier.haut==1 && clavier.bas==0){
		if (anim==0){
			this.gotoAndPlay("marche_haut");
			anim=1;
			last_move="haut";
		}
		if (this.y>40){
			this.y=this.y-speed;
		}
	}
	//bas
	if (clavier.droite==0 && clavier.gauche==0 && clavier.haut==0 && clavier.bas==1){
		if (anim==0){
			this.gotoAndPlay("marche_bas");
			anim=1;
			last_move="bas";
		}
		if (this.y<260){
			this.y=this.y+speed;
		}
		
	}

	//attack 1
	if (clavier.attack1==1 && clavier.droite==0 && clavier.gauche==0 && clavier.haut==0 && clavier.bas==0){
		//if (anim==0){
			this.gotoAndPlay("attack_face");
			anim=1;
		//}
	}
	
	//double appuit 
	if ((clavier.droite==1 && clavier.gauche==1)
		|| (clavier.haut==1 && clavier.bas==1) || (clavier.droite==1 && clavier.haut==1) || (clavier.droite==1 && clavier.bas==1)
		|| (clavier.bas==1 && clavier.gauche==1) || (clavier.haut==1 && clavier.gauche==1)){
			this.gotoAndPlay("attente_face")
			anim=0;		
	}		
	
	//attente selon last_move
	if (clavier.droite==0 && clavier.gauche==0 && clavier.haut==0 && clavier.bas==0 && clavier.attack1==0 && clavier.actionA==0){
		switch(last_move)
		{
			case "haut":
			this.gotoAndPlay("attente_dos");
			anim=0;
			break;

			case "gauche":
			this.gotoAndPlay("attente_g");
			anim=0;
			break;

			case "droite":
			this.gotoAndPlay("attente_d");
			anim=0;
			break;

			case "bas":
			this.gotoAndPlay("attente_face");
			anim=0;
			break;
		}
	}

	this.scaleX=this.scaleY=1.0;
}

Player.prototype.attackPlayer=function(){
	
	


	/*if (clavier.actionA==1){
		enemy_hp = enemy_hp-20;
		setTimeout(function(){scene.removeChild(hpoints)},1000);
		//scene.removeChild(hpoints);
		var hpoints = new createjs.Text(enemy_hp,"15px Arial","#000","#FFF");
		hpoints.y = 30;
		hpoints.x = 10;
		scene.addChild(hpoints);
	}*/
}

/*function attaquer(){
	
		enemy_hp = enemy_hp-20;
		scene.removeChild(hpoints);
		var hpoints = new createjs.Text(enemy_hp,"15px Arial","#000","#FFF");
		hpoints.y = 30;
		hpoints.x = 10;
		scene.addChild(hpoints);
}*/

