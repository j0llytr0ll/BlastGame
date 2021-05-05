
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// wall
		const wall = this.add.image(233, 400, "wall");
		wall.scaleX = 1.001;
		
		// floor
		const floor = this.add.image(233, 582, "floor");
		floor.scaleX = 1.001;
		
		// slot
		const slot = this.add.image(93, 558, "__DEFAULT");
		
		// slot_1
		const slot_1 = this.add.sprite(128, 558, "__DEFAULT");
		
		// slot_2
		const slot_2 = this.add.sprite(163, 558, "__DEFAULT");
		
		// slot_3
		const slot_3 = this.add.sprite(198, 558, "__DEFAULT");
		
		// slot_4
		const slot_4 = this.add.sprite(233, 558, "__DEFAULT");
		
		// slot_5
		const slot_5 = this.add.sprite(268, 558, "__DEFAULT");
		
		// slot_6
		const slot_6 = this.add.sprite(303, 558, "__DEFAULT");
		
		// slot_7
		const slot_7 = this.add.sprite(338, 558, "__DEFAULT");
		
		// slot_8
		const slot_8 = this.add.sprite(373, 558, "__DEFAULT");
		
		// bar
		const bar = this.add.image(232, 31.5, "bar");
		bar.visible = false;
		
		// moves
		const moves = this.add.image(429, 112, "moves");
		moves.scaleX = 0.6;
		moves.scaleY = 0.6;
		
		// mix
		const mix = this.add.image(232, 81, "mix");
		mix.scaleX = 0.9486558630018331;
		mix.scaleY = 0.691804398869059;
		
		// mixText
		const mixText = this.add.text(232, 79, "", {});
		mixText.setOrigin(0.5, 0.5);
		mixText.text = "Перемешать";
		mixText.setStyle({"fontFamily":"Segoe Ui Black","fontSize":"15px"});
		
		// barBack
		this.add.image(232, 31.5, "barBack");
		
		// load
		const load = this.add.image(103, 32, "load");
		load.scaleX = 0;
		load.scaleY = 1.5;
		load.setOrigin(0, 0.5);
		
		// bar_1
		this.add.image(232, 31.5, "bar");
		
		// ScoreText
		const scoreText = this.add.text(54, 29, "", {});
		scoreText.setOrigin(0.5, 0.5);
		scoreText.text = "0";
		scoreText.setStyle({"fontFamily":"Segoe Ui Black","fontSize":"30px"});
		
		// ScoreEndText
		const scoreEndText = this.add.text(410, 29, "", {});
		scoreEndText.setOrigin(0.5, 0.5);
		scoreEndText.text = "1000";
		scoreEndText.setStyle({"fontFamily":"Segoe Ui Black","fontSize":"30px"});
		
		// StepsText
		const stepsText = this.add.text(429, 123, "", {});
		stepsText.setOrigin(0.5, 0.5);
		stepsText.text = "0";
		stepsText.setStyle({"align":"center","fontFamily":"Segoe Ui Black","fontSize":"30px"});
		
		// Progress
		const progress = this.add.text(230, 10, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "Прогресс";
		progress.setStyle({"align":"center","fontFamily":"Segoe Ui Black","fontSize":"15px"});
		
		// mixNumber_1
		const mixNumber_1 = this.add.image(297, 81, "mixNumber");
		mixNumber_1.scaleX = 0.3;
		mixNumber_1.scaleY = 0.3;
		
		// mixNumber
		const mixNumber = this.add.text(297, 80, "", {});
		mixNumber.setOrigin(0.5, 0.5);
		mixNumber.text = "3";
		mixNumber.setStyle({"align":"center","fontFamily":"Segoe Ui Black","fontSize":"25px"});
		
		// mixNumber_2
		const mixNumber_2 = this.add.text(430, 81, "", {});
		mixNumber_2.setOrigin(0.5, 0.5);
		mixNumber_2.text = "Ходы:";
		mixNumber_2.setStyle({"align":"center","fontFamily":"Segoe Ui Black","fontSize":"15px"});
		
		// lists
		const fslot = [slot_8, slot_7, slot_6, slot_5, slot_4, slot_3, slot_2, slot_1, slot]
		
		this.floor = floor;
		this.slot = slot;
		this.slot_1 = slot_1;
		this.slot_2 = slot_2;
		this.slot_3 = slot_3;
		this.slot_4 = slot_4;
		this.slot_5 = slot_5;
		this.slot_6 = slot_6;
		this.slot_7 = slot_7;
		this.slot_8 = slot_8;
		this.mix = mix;
		this.mixText = mixText;
		this.load = load;
		this.scoreText = scoreText;
		this.scoreEndText = scoreEndText;
		this.stepsText = stepsText;
		this.progress = progress;
		this.mixNumber = mixNumber;
		this.fslot = fslot;
	}
	
	/** @type {Phaser.GameObjects.Image} */
	floor;
	/** @type {Phaser.GameObjects.Image} */
	slot;
	/** @type {Phaser.GameObjects.Sprite} */
	slot_1;
	/** @type {Phaser.GameObjects.Sprite} */
	slot_2;
	/** @type {Phaser.GameObjects.Sprite} */
	slot_3;
	/** @type {Phaser.GameObjects.Sprite} */
	slot_4;
	/** @type {Phaser.GameObjects.Sprite} */
	slot_5;
	/** @type {Phaser.GameObjects.Sprite} */
	slot_6;
	/** @type {Phaser.GameObjects.Sprite} */
	slot_7;
	/** @type {Phaser.GameObjects.Sprite} */
	slot_8;
	/** @type {Phaser.GameObjects.Image} */
	mix;
	/** @type {Phaser.GameObjects.Text} */
	mixText;
	/** @type {Phaser.GameObjects.Image} */
	load;
	/** @type {Phaser.GameObjects.Text} */
	scoreText;
	/** @type {Phaser.GameObjects.Text} */
	scoreEndText;
	/** @type {Phaser.GameObjects.Text} */
	stepsText;
	/** @type {Phaser.GameObjects.Text} */
	progress;
	/** @type {Phaser.GameObjects.Text} */
	mixNumber;
	/** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
	fslot;
	
	/* START-USER-CODE */


	// Write more your code here

	create() {

		this.editorCreate();
		this.startText();
	    this.start_scene();									
	}

	start_scene(){
	    this.physics.add.existing(this.floor);
		this.floor.body.setAllowGravity(false);
		this.floor.body.setImmovable(true);



		this.brick_select_Massive = [];
		this.brick_select_delete = [];
		this.allBrick = [];
		this.brick_reserve = [];
		this.brick_select_gravity = [];
		this.explosion = [];
		this.slot_massive = [this.slot, this.slot_1, this.slot_2, this.slot_3, this.slot_4, this.slot_5, this.slot_6, this.slot_7, this.slot_8];
		this.allObject = [this.brick_red_massive = [], this.brick_green_massive = [], this.brick_blue_massive = [], this.brick_purple_massive = [], this.brick_yellow_massive = [], this.floor];
		
		for (let i = 0; i < 30; i++){
		    this.brick_red_massive.push(this.add.image(700, 0, "brick_red"));
			for (let t = 0; t < this.brick_red_massive.length; t++){				       
			     this.physics.add.existing(this.brick_red_massive[t]);
				 this.brick_red_massive[t].setInteractive();
				 this.brick_red_massive[t].body.setAllowGravity(false);
				 this.brick_red_massive[t].body.setImmovable(true);	
			}	
		}

		for (let i = 0; i < 30; i++){
		    this.brick_green_massive.push(this.add.image(700, 0, "brick_green"));
			for (let t = 0; t < this.brick_green_massive.length; t++){				       
			     this.physics.add.existing(this.brick_green_massive[t]);
				 this.brick_green_massive[t].setInteractive();
				 this.brick_green_massive[t].body.setAllowGravity(false);
				 this.brick_green_massive[t].body.setImmovable(true);	
			}	
		}

		for (let i = 0; i < 30; i++){
		    this.brick_blue_massive.push(this.add.image(700, 0, "brick_blue"));
			for (let t = 0; t < this.brick_blue_massive.length; t++){				       
			     this.physics.add.existing(this.brick_blue_massive[t]);
				 this.brick_blue_massive[t].setInteractive();
				 this.brick_blue_massive[t].body.setAllowGravity(false);
				 this.brick_blue_massive[t].body.setImmovable(true);	
			}	
		}

		for (let i = 0; i < 30; i++){
		    this.brick_purple_massive.push(this.add.image(700, 0, "brick_purple"));
			for (let t = 0; t < this.brick_purple_massive.length; t++){				       
			     this.physics.add.existing(this.brick_purple_massive[t]);
				 this.brick_purple_massive[t].setInteractive();
				 this.brick_purple_massive[t].body.setAllowGravity(false);
				 this.brick_purple_massive[t].body.setImmovable(true);	
			}	
		}

		for (let i = 0; i < 30; i++){
		    this.brick_yellow_massive.push(this.add.image(700, 0, "brick_yellow"));
			for (let t = 0; t < this.brick_yellow_massive.length; t++){				       
			     this.physics.add.existing(this.brick_yellow_massive[t]);
				 this.brick_yellow_massive[t].setInteractive();
				 this.brick_yellow_massive[t].body.setAllowGravity(false);
				 this.brick_yellow_massive[t].body.setImmovable(true);	
			}	
		}

		this.spawnBrick();

		
				
		this.brick_detect();		
		this.mixed();
		for (let i = 0; i < this.allObject.length; i++){
			for (let r = 0; r < this.allObject[i].length; r++){
				this.allBrick.push(this.allObject[i][r]);
			}
		}
	}

	spawnBrick(){
	    for (let r = 0; r < 9; r++){

		    let posY = 9;

		    for (let i = 0; i < 9; i++){

			    this.randPos = Phaser.Math.Between(0, 4);

				if (this.randPos == 0){
				   for (let t = 0; t < this.brick_red_massive.length; t++){
				   	   if (this.brick_red_massive[t].x == 700){
					      this.brick_red_massive[t].x = this.slot_massive[r].x;
						  this.brick_red_massive[t].y = this.slot_massive[r].y - posY;
				          this.brick_red_massive[t].body.setAllowGravity(true);
				          this.brick_red_massive[t].body.setImmovable(false);	
				          for (let y = 0; y < this.allObject.length; y++){

					          this.physics.add.collider(this.brick_red_massive[t], this.allObject[y]);
			              }
						  break;
					   }
				   }
			       			
			       posY += 52;
				}
				
				if (this.randPos == 1){
				 
			       for (let t = 0; t < this.brick_green_massive.length; t++){
				   	   if (this.brick_green_massive[t].x == 700){
					      this.brick_green_massive[t].x = this.slot_massive[r].x;
						  this.brick_green_massive[t].y = this.slot_massive[r].y - posY;
						  this.physics.add.existing(this.brick_green_massive[t]);
				          this.brick_green_massive[t].setInteractive();
				          this.brick_green_massive[t].body.setAllowGravity(true);
				          this.brick_green_massive[t].body.setImmovable(false);	
				          for (let y = 0; y < this.allObject.length; y++){

					          this.physics.add.collider(this.brick_green_massive[t], this.allObject[y]);
			              }
						  break;
					   }
				   }			
			       posY += 52;
				}	

				if (this.randPos == 2){

			       for (let t = 0; t < this.brick_blue_massive.length; t++){
				   	   if (this.brick_blue_massive[t].x == 700){
					      this.brick_blue_massive[t].x = this.slot_massive[r].x;
						  this.brick_blue_massive[t].y = this.slot_massive[r].y - posY;
						  this.physics.add.existing(this.brick_blue_massive[t]);
				          this.brick_blue_massive[t].setInteractive();
				          this.brick_blue_massive[t].body.setAllowGravity(true);
				          this.brick_blue_massive[t].body.setImmovable(false);	
				          for (let y = 0; y < this.allObject.length; y++){

					          this.physics.add.collider(this.brick_blue_massive[t], this.allObject[y]);
			              }
						  break;
					   }
				   }		
			       posY += 52;
				}
				
				if (this.randPos == 3){

			       for (let t = 0; t < this.brick_purple_massive.length; t++){
				   	   if (this.brick_purple_massive[t].x == 700){
					      this.brick_purple_massive[t].x = this.slot_massive[r].x;
						  this.brick_purple_massive[t].y = this.slot_massive[r].y - posY;
						  this.physics.add.existing(this.brick_purple_massive[t]);
				          this.brick_purple_massive[t].setInteractive();
				          this.brick_purple_massive[t].body.setAllowGravity(true);
				          this.brick_purple_massive[t].body.setImmovable(false);	
				          for (let y = 0; y < this.allObject.length; y++){

					          this.physics.add.collider(this.brick_purple_massive[t], this.allObject[y]);
			              }
						  break;
					   }
				   }			
			       posY += 52;
				}

				if (this.randPos == 4){

			       for (let t = 0; t < this.brick_yellow_massive.length; t++){
				   	   if (this.brick_yellow_massive[t].x == 700){
					      this.brick_yellow_massive[t].x = this.slot_massive[r].x;
						  this.brick_yellow_massive[t].y = this.slot_massive[r].y - posY;
						  this.physics.add.existing(this.brick_yellow_massive[t]);
				          this.brick_yellow_massive[t].setInteractive();
				          this.brick_yellow_massive[t].body.setAllowGravity(true);
				          this.brick_yellow_massive[t].body.setImmovable(false);	
				          for (let y = 0; y < this.allObject.length; y++){

					          this.physics.add.collider(this.brick_yellow_massive[t], this.allObject[y]);
			              }
						  break;
					   }
				   }			
			       posY += 52;
				}
		    }    
		}
	}

	mixed(){
	    this.mixInt = 3;
		this.mixNumber.text = this.mixInt;
		this.mix.setInteractive();
		this.mix.on('pointerdown', () =>{			
		    if (this.mixInt != 0){
			   for (let i = 0; i < this.allBrick.length; i++){
			       if (this.allBrick[i].x != 700){
				      this.allBrick[i].x = 700;
				      this.allBrick[i].y = 0;
				      this.allBrick[i].body.setAllowGravity(false);
			          this.allBrick[i].body.setImmovable(true);
				   }
			       
			   }
			   this.spawnBrick();
			   this.mixInt--;
			   this.mixNumber.text = this.mixInt;
			}
		});
	}

	startText(){
	    this.step = 30;
		this.scoreEnd = 1000;
		this.score = 0;
		this.stepsText.text = this.step;
		this.scoreEndText.text = this.scoreEnd;
		this.scoreText.text = this.score;
	}

	text(){
		this.stepsText.text = this.step;
		this.scoreText.text = this.score;
		this.load.scaleX = this.score / this.scoreEnd;	

		if (this.score >= this.scoreEnd){
		   this.backGround = this.add.image(232, 310, "backGround");
		   this.backGround.scaleX = 70;
		   this.backGround.scaleY = 70;
		   this.panel = this.add.image(232, 310, "panel");

		   this.gameOver = this.add.text(232, 220, "", {});
		   this.gameOver.setOrigin(0.5, 0.5);
		   this.gameOver.text = "Вы выиграли";
		   this.gameOver.setStyle({"fontFamily":"Segoe Ui Black","fontSize":"20px"});

		   this.scorePanel = this.add.text(232, 275, "", {});
		   this.scorePanel.setOrigin(0.5, 0.5);
		   this.scorePanel.text = "Очки:";
		   this.scorePanel.setStyle({"fontFamily":"Segoe Ui Black","fontSize":"20px"});

		   this.scoreEndPanel = this.add.text(232, 310, "", {});
		   this.scoreEndPanel.setOrigin(0.5, 0.5);
		   this.scoreEndPanel.text = this.score + " из " + this.scoreEnd;
		   this.scoreEndPanel.setStyle({"fontFamily":"Segoe Ui Black","fontSize":"20px"});

		   this.button = this.add.image(232, 380, "button");
		   this.button.scaleX = 1.3;
		   this.button.setInteractive();
		   this.button.on('pointerdown', () =>{			
		       this.registry.destroy();
			   this.events.off();
			   this.scene.restart();
		   });

		   this.buttonText = this.add.text(232, 378, "", {});
		   this.buttonText.setOrigin(0.5, 0.5);
		   this.buttonText.text = "Перезагрузить";
		   this.buttonText.setStyle({"fontFamily":"Segoe Ui Black","fontSize":"15px"});
		}
		else if (this.step == 0){
		   this.backGround = this.add.image(232, 310, "backGround");
		   this.backGround.scaleX = 70;
		   this.backGround.scaleY = 70;
		   this.panel = this.add.image(232, 310, "panel");

		   this.gameOver = this.add.text(232, 220, "", {});
		   this.gameOver.setOrigin(0.5, 0.5);
		   this.gameOver.text = "Вы проиграли";
		   this.gameOver.setStyle({"fontFamily":"Segoe Ui Black","fontSize":"20px"});

		   this.scorePanel = this.add.text(232, 275, "", {});
		   this.scorePanel.setOrigin(0.5, 0.5);
		   this.scorePanel.text = "Очки:";
		   this.scorePanel.setStyle({"fontFamily":"Segoe Ui Black","fontSize":"20px"});

		   this.scoreEndPanel = this.add.text(232, 310, "", {});
		   this.scoreEndPanel.setOrigin(0.5, 0.5);
		   this.scoreEndPanel.text = this.score + " из " + this.scoreEnd;
		   this.scoreEndPanel.setStyle({"fontFamily":"Segoe Ui Black","fontSize":"20px"});

		   this.button = this.add.image(232, 380, "button");
		   this.button.scaleX = 1.3;
		   this.button.setInteractive();
		   this.button.on('pointerdown', () =>{			
		       this.registry.destroy();
			   this.events.off();
			   this.scene.restart();
		   });

		   this.buttonText = this.add.text(232, 378, "", {});
		   this.buttonText.setOrigin(0.5, 0.5);
		   this.buttonText.text = "Перезагрузить";
		   this.buttonText.setStyle({"fontFamily":"Segoe Ui Black","fontSize":"15px"});
		}
	}

	brick_detect(){
	    this.bricks_red();
		this.bricks_green();
		this.bricks_blue();
		this.bricks_purple();
		this.bricks_yellow();
	}
	bricks_red(){
		
		for (let i = 0; i < this.brick_red_massive.length; i++){
			this.brick_red_massive[i].on('pointerdown', () =>{			
		    this.brick_select_Massive.push(this.brick_red_massive[i]);
			this.brick_massive = this.brick_red_massive;
			this.OnClick_Brick();
		    });
		}
			
	}

	bricks_green(){

		for (let i = 0; i < this.brick_green_massive.length; i++){
			this.brick_green_massive[i].on('pointerdown', () =>{	
			this.brick_select_Massive.push(this.brick_green_massive[i]);
			this.brick_massive = this.brick_green_massive;
			this.OnClick_Brick();	
		    });
		}

	}

	bricks_blue(){

		for (let i = 0; i < this.brick_blue_massive.length; i++){
			this.brick_blue_massive[i].on('pointerdown', () =>{	
			this.brick_select_Massive.push(this.brick_blue_massive[i]);
			this.brick_massive = this.brick_blue_massive;
			this.OnClick_Brick();	
		    });
		}


	}

	bricks_purple(){
	
	    for (let i = 0; i < this.brick_purple_massive.length; i++){
			this.brick_purple_massive[i].on('pointerdown', () =>{	
			this.brick_select_Massive.push(this.brick_purple_massive[i]);
			this.brick_massive = this.brick_purple_massive;
			this.OnClick_Brick();	
		    });
		}

	}

	bricks_yellow(){
	   
	    for (let i = 0; i < this.brick_yellow_massive.length; i++){
			this.brick_yellow_massive[i].on('pointerdown', () =>{	
			this.brick_select_Massive.push(this.brick_yellow_massive[i]);
			this.brick_massive = this.brick_yellow_massive;
			this.OnClick_Brick();
		    });
		}
	
	}


	
	OnClick_Brick(){
	    for (let i = 0; i < this.brick_select_Massive.length; i++){
		    for (let u = 0; u < this.brick_massive.length; u++){
			    if (this.brick_select_Massive.indexOf(this.brick_massive[u]) === -1){
				   if (this.brick_massive[u].y >= this.brick_select_Massive[i].y - 44 && this.brick_massive[u].y <= this.brick_select_Massive[i].y - 34 && this.brick_massive[u].x >= this.brick_select_Massive[i].x - 5 && this.brick_massive[u].x <= this.brick_select_Massive[i].x + 5){	
				      this.brick_select_Massive.push(this.brick_massive[u]);				   				   
				      break;
				   }
			    }
	        }

			for (let u = 0; u < this.brick_massive.length; u++){
			    if (this.brick_select_Massive.indexOf(this.brick_massive[u]) === -1){
				   if (this.brick_massive[u].y >= this.brick_select_Massive[i].y + 34 && this.brick_massive[u].y <= this.brick_select_Massive[i].y + 44 && this.brick_massive[u].x >= this.brick_select_Massive[i].x - 5 && this.brick_massive[u].x <= this.brick_select_Massive[i].x + 5) {
				      this.brick_select_Massive.push(this.brick_massive[u]);				   				   
				      break;
				   }
			    }
	        }

			for (let u = 0; u < this.brick_massive.length; u++){
			    if (this.brick_select_Massive.indexOf(this.brick_massive[u]) === -1){
				   if (this.brick_massive[u].x >= this.brick_select_Massive[i].x - 40 && this.brick_massive[u].x <= this.brick_select_Massive[i].x - 30 && this.brick_massive[u].y >= this.brick_select_Massive[i].y - 5 && this.brick_massive[u].y <= this.brick_select_Massive[i].y + 5){	
				      this.brick_select_Massive.push(this.brick_massive[u]);				   				   
				      break;
				   }
			    }
	        }

			for (let u = 0; u < this.brick_massive.length; u++){
			    if (this.brick_select_Massive.indexOf(this.brick_massive[u]) === -1){
				   if (this.brick_massive[u].x >= this.brick_select_Massive[i].x + 30 && this.brick_massive[u].x <= this.brick_select_Massive[i].x + 40 && this.brick_massive[u].y >= this.brick_select_Massive[i].y - 5 && this.brick_massive[u].y <= this.brick_select_Massive[i].y + 5){	
				      this.brick_select_Massive.push(this.brick_massive[u]);				   				   
				      break;
				   }
			    }
	        }

		}
		
		this.deleteY = 0;
		this.displacement = 400;
		this.brickReg = 0;
		
		if (this.brick_select_Massive.length > 1){
		   for (let r = 0; r < this.brick_select_Massive.length; r++){		
		       this.brick_select_delete.push(this.brick_select_Massive[r]);
			   for (let p = 0; p <  this.brick_select_delete.length; p++){
			   	   for (let e = 0; e < this.allBrick.length; e++){
				   	   if (this.brick_select_delete.indexOf(this.allBrick[e]) === -1){
					   	   if (this.allBrick[e].y >= this.brick_select_delete[p].y - 44 && this.allBrick[e].y <= this.brick_select_delete[p].y - 34 && this.allBrick[e].x == this.brick_select_delete[p].x){
						   	   this.brick_select_delete.push(this.allBrick[e]);						   
						   }
					   }					   
				   }
			   }
			   for (let i = 0; i < this.brick_select_delete.length; i++){
	               if (this.brick_select_delete[i] != this.brick_select_Massive[r]){
				      this.brick_select_delete[i].body.setAllowGravity(true);
				      this.brick_select_delete[i].body.setImmovable(false);	
				      this.brick_select_delete[i].body.setVelocityY(-this.displacement);
					  this.brickReg = this.brick_select_delete[i];					  
				      this.displacement += 60;				      
				   }			   
		       }

			   this.randSpawn = Phaser.Math.Between(0, 4);
			   if (this.randSpawn == 0){
			      for (let n = 0; n < this.brick_red_massive.length; n++){
			   	      if (this.brick_red_massive[n].x == 700){
				         this.brick_red_massive[n].x = this.brick_select_Massive[r].x;
					     this.brick_red_massive[n].y = -50  - this.deleteY;
						 this.brick_reserve.push(this.brick_red_massive[n]);
					     this.deleteY += 78;
					     break;
				      }
			      }
			   }

			   if (this.randSpawn == 1){
			      for (let n = 0; n < this.brick_green_massive.length; n++){
			   	      if (this.brick_green_massive[n].x == 700){
				         this.brick_green_massive[n].x = this.brick_select_Massive[r].x;
					     this.brick_green_massive[n].y = -50  - this.deleteY;
						 this.brick_reserve.push(this.brick_green_massive[n]);
					     this.deleteY += 78;
					     break;
				      }
			      }
			   }

			   if (this.randSpawn == 2){
			      for (let n = 0; n < this.brick_blue_massive.length; n++){
			   	      if (this.brick_blue_massive[n].x == 700){
				         this.brick_blue_massive[n].x = this.brick_select_Massive[r].x;
					     this.brick_blue_massive[n].y = -50  - this.deleteY;
						 this.brick_reserve.push(this.brick_blue_massive[n]);
					     this.deleteY += 78;
					     break;
				      }
			      }
			   }

			   if (this.randSpawn == 3){
			      for (let n = 0; n < this.brick_purple_massive.length; n++){
			   	      if (this.brick_purple_massive[n].x == 700){
				         this.brick_purple_massive[n].x = this.brick_select_Massive[r].x;
					     this.brick_purple_massive[n].y = -50  - this.deleteY;
						 this.brick_reserve.push(this.brick_purple_massive[n]);
					     this.deleteY += 78;
					     break;
				      }
			      }
			   }

			   if (this.randSpawn == 4){
			      for (let n = 0; n < this.brick_yellow_massive.length; n++){
			   	      if (this.brick_yellow_massive[n].x == 700){
				         this.brick_yellow_massive[n].x = this.brick_select_Massive[r].x;
					     this.brick_yellow_massive[n].y = -50 - this.deleteY;
						 this.brick_reserve.push(this.brick_yellow_massive[n]);
					     this.deleteY += 78;
					     break;
				      }
			      }
			   }
			   
			   this.explosion.push(this.add.sprite(this.brick_select_Massive[r].x, this.brick_select_Massive[r].y, "__DEFAULT").play("explosion"));	   			   
               
			   if (this.brickReg == this.brick_select_Massive[r]){
			      this.brickReg = 0;
			   }

			   this.brick_select_delete.splice(0, this.brick_select_delete.length);
			   this.displacement = 400;	
			   this.brick_select_Massive[r].body.setVelocityY(0);
			   this.brick_select_Massive[r].body.setAllowGravity(false);
			   this.brick_select_Massive[r].body.setImmovable(true);
			   this.brick_select_Massive[r].x = 700;	
			   this.brick_select_Massive[r].y = 0;
			   this.physics.add.collider(this.brick_select_Massive, null);
			   this.score += 10;

			   


		   } 
		   this.step--;
		   
		}	
	    this.text();		
		this.brick_select_Massive.splice(0, this.brick_select_Massive.length);			
		for (let i = 0; i < this.explosion.length; i++){
		    delete this.explosion[i];
		}
		this.explosion.splice(0, this.explosion.length);	
	}   

	update(){	   
		if (this.brick_reserve.length > 0){
		   if (this.brickReg != 0){
		       if (this.brickReg.body.touching.down){
			      for (let i = 0; i < this.brick_reserve.length; i++){
			          this.brick_reserve[i].body.setAllowGravity(true);
				      this.brick_reserve[i].body.setImmovable(false);
				      for (let y = 0; y < this.allObject.length; y++){

					      this.physics.add.collider(this.brick_reserve[i], this.allObject[y]);
			          }
			      }	
				  this.brickReg = 0;
			      this.brick_reserve.splice(0, this.brick_reserve.length);
			   }			   
		   }
		   else {
		   	   for (let i = 0; i < this.brick_reserve.length; i++){
			       this.brick_reserve[i].body.setAllowGravity(true);
				   this.brick_reserve[i].body.setImmovable(false);
				   for (let y = 0; y < this.allObject.length; y++){

					   this.physics.add.collider(this.brick_reserve[i], this.allObject[y]);
			       }
			   }
			   this.brickReg = 0;
			   this.brick_reserve.splice(0, this.brick_reserve.length);
		   }
		}

		for (let i = 0; i < this.allBrick.length; i++){
		    if (this.allBrick[i].x != 700){
			   if (this.allBrick[i].body.touching.down){
			      this.allBrick[i].body.setVelocityY(0);
				  this.allBrick[i].body.setAllowGravity(false);
				  this.allBrick[i].body.setImmovable(true);	
			   }
			   else {
			   	   this.touchingDown = false;
			   }

			   if (this.allBrick[i].y <= 125){
			      this.allBrick[i].setVisible(false);
			   }
			   else {
			      this.allBrick[i].setVisible(true);
			   }
			    		
			}

		}

		
	
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
