var scene;
var imgPlayer;
var imgEnemy;
var imgMap;
var player;
var enemy;
var enemy_hp=100;
var enemy_power=20;
var player_hp=120;
var player_power=25;
var comptImg=0;
var nbrImg=3;
function init(){
	//récupération du contexte
	var monCanvas = document.getElementById("mon_canvas");
	//création de la scène
	scene=new createjs.Stage(monCanvas);
	//création du player
	imgPlayer=new Image();
	imgPlayer.src="images/player3.png";
	imgPlayer.onload=compteurImg;
	//création de l'adversaire
	imgEnemy=new Image();
	imgEnemy.src="images/player4.png";
	imgEnemy.onload=compteurImg;
	//création de le l'arrière plan
	imgMap=new Image();
	imgMap.src="images/bg_test.jpg";
	imgMap.onload=compteurImg;
	//création du menu - inactif
	/*imgMenu=new Image();
	imgMenu.src="images/menu.jpg";
	imgMenu.onload=compteurImg;*/
}
function compteurImg(){
	comptImg++;
	if (comptImg==nbrImg){
		//menu();
		setTimeout("run_game()", 500);
	}

}
function menu(){
	
}
function start(){
	decor();
	player = new Player ();
	enemy = new Enemy ();
	createjs.Ticker.useRAF=true;
	createjs.Ticker.setFPS(70);
	createjs.Ticker.addListener(window);
}
function tick(){
	//player.etatPlayer();
	player.deplacementPlayer();
	player.attackPlayer();
	scene.update();
}
window.onload=init;