function decor(){
		//****mise en place du sol****
		var map=new createjs.Bitmap(imgMap);
		map.x=0;
		map.y=0;
		scene.addChild(map);
		
		//points de vie HP Enemy
		var hpoints_enemy = new createjs.Text("HP : "+enemy_hp,"15px Arial","#FFF","#FFF");
		hpoints_enemy.y = 30;
		hpoints_enemy.x = 525;
		scene.addChild(hpoints_enemy);

		//points de vie HP Player
		var hpoints_player = new createjs.Text("HP : "+player_hp,"15px Arial","#FFF","#FFF");
		hpoints_player.y = 30;
		hpoints_player.x = 10;
		scene.addChild(hpoints_player);

		//jauge de vie Enemy
		var enemy_hp_jauge = new createjs.Shape();
		enemy_hp_jauge.graphics.beginFill("rgba(255,255,255,1)").rect(380, 10, enemy_hp*2,10);
		scene.addChild(enemy_hp_jauge);

		//jauge de vie Player
		var player_hp_jauge = new createjs.Shape();
		player_hp_jauge.graphics.beginFill("rgba(255,255,255,1)").rect(10, 10, player_hp*2,10);
		scene.addChild(player_hp_jauge);

		//bouton d'attaque
		var bouton_att = new createjs.Shape();
		bouton_att.graphics.beginFill("rgba(255,255,255,1)").drawRoundRect(10, 50, 30, 30, 3);
		bouton_att.onClick=function(evt){
			var e_rep_hp = scene.removeChild(hpoints_enemy);
			var e_rep_hpj = scene.removeChild(enemy_hp_jauge);
			enemy_hp = enemy_hp-player_power;
			//alert(rep);
			//mise à jour des points de vie
			hpoints_enemy = new createjs.Text("HP : "+enemy_hp,"15px Arial","#FFF","#FFF");
			hpoints_enemy.y = 30;
			hpoints_enemy.x = 525;
			scene.addChild(hpoints_enemy);
			//mise à jour de la jauge de vie
			enemy_hp_jauge = new createjs.Shape();
			enemy_hp_jauge.graphics.beginFill("rgba(255,255,255,1)").rect(380, 10, enemy_hp*2,10);
			scene.addChild(enemy_hp_jauge);
			//résultat sur la console
			console.log("Attack !");
		};
		scene.addChild(bouton_att);

		//bouton de défense
		var bouton_def = new createjs.Shape();
		bouton_def.graphics.beginFill("rgba(255,255,255,1)").drawRoundRect(550, 50, 30, 30, 3);
		bouton_def.onClick=function(evt){
			var p_rep_hp = scene.removeChild(hpoints_player);
			var p_rep_hpj = scene.removeChild(player_hp_jauge);
			player_hp = player_hp-enemy_power;
			//alert(rep);
			//mise à jour des points de vie
			hpoints_player = new createjs.Text("HP : "+player_hp,"15px Arial","#FFF","#FFF");
			hpoints_player.y = 30;
			hpoints_player.x = 10;
			scene.addChild(hpoints_player);
			//mise à jour de la jauge de vie
			player_hp_jauge = new createjs.Shape();
			player_hp_jauge.graphics.beginFill("rgba(255,255,255,1)").rect(10, 10, enemy_hp*2,10);
			scene.addChild(player_hp_jauge);
			//résultat sur la console
			console.log("Enemy Attack !");
		};
		scene.addChild(bouton_def);
}


function run_game(){
	scene.removeAllChildren();
	start();	
}