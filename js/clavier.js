var clavier={gauche:0, droite:0, haut:0, bas:0, attack1:0, actionA:0};
window.onkeydown=keyPress;
window.onkeyup=keyRelease;
function keyPress(e){
	if (e.keyCode == 37){
		clavier.gauche = 1;
	}
	if (e.keyCode == 39){
		clavier.droite = 1;
	}
	if (e.keyCode == 38){
		clavier.haut = 1;
	}
	if (e.keyCode == 40){
		clavier.bas = 1;
	}
	if (e.keyCode == 65){
		clavier.attack1 = 1;
	}
	if (e.keyCode == 90){
		clavier.actionA = 1;
	}

}
function keyRelease(e){
	if (e.keyCode == 37){
		clavier.gauche = 0;
	}
	if (e.keyCode == 39){
		clavier.droite = 0;
	}
	if (e.keyCode == 38){
		clavier.haut = 0;
	}
	if (e.keyCode == 40){
		clavier.bas = 0;
	}
	if (e.keyCode == 65){
		clavier.attack1 = 0;
	}
	if (e.keyCode == 90){
		clavier.actionA = 0;
	}
}
