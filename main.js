
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 464,
		height: 620,
		type: Phaser.AUTO,
        backgroundColor: "#252525",
		physics: {
		    default: 'arcade',
			arcade: {
				gravity: {
					y: 3000
				},
			}
	    },
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});
	
	game.scene.add("Boot", Boot, true);

});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/asset-pack.json");
	}

	create() {
		
		this.scene.start("Level");		
	}

}