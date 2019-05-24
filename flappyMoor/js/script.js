const configurations = {
    type: Phaser.AUTO,
    width: 288,
    height: 512,
    parent: 'sas',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}
//todo:medals, highscores, etc yee
const assets = {
    bird: {
        red: 'bird-red',
        yellow: 'bird-yellow',
        blue: 'bird-blue'
    },
    obstacle: {
        pipe: {
            green: {
                top: 'pipe-green-top',
                bottom: 'pipe-green-bottom'
            },
            red: {
                top: 'pipe-red-top',
                bottom: 'pipe-red-bo'
            }
        }
    },
    scene: {
        width: 144,
        background: {
            day: 'background-day',
            night: 'background-night'
        },
        ground: 'ground',
        gameOver: 'game-over',
        restart: 'restart-button',
        messageInitial: 'message-initial'
    },
    scoreboard: {
        width: 25,
        base: 'number',
        number0: 'number0',
        number1: 'number1',
        number2: 'number2',
        number3: 'number3',
        number4: 'number4',
        number5: 'number5',
        number6: 'number6',
        number7: 'number7',
        number8: 'number8',
        number9: 'number9'
    },
    animation: {
        bird: {
            red: {
                clapWings: 'red-clap-wings',
                stop: 'red-stop'
            },
            blue: {
                clapWings: 'blue-clap-wings',
                stop: 'blue-stop'
            },
            yellow: {
                clapWings: 'yellow-clap-wings',
                stop: 'yellow-stop'
            }
        },
        ground: {
            moving: 'moving-ground',
            stop: 'stop-ground'
        }
    }
}


const game = new Phaser.Game(configurations);

let gameOver;
let gameStarted;
let upButton;
let restartButton;
let gameOverBanner;
let messageInitial;
let player;
let birdName;
let framesMoveUp;
let backgroundDay;
let backgroundNight;
let ground;
let pipesGroup;
let gapsGroup;
let nextPipes;
let currentPipe;
let scoreboardGroup;
let music;
let score;
let smert;
let scoreSound;
let flap;
let bronzeMedal;
let silverMedal;
let goldMedal;
let platMedal;

function preload() {
    // Backgrounds and ground
    this.load.image(assets.scene.background.day, 'assets/background-day.png');
    this.load.image(assets.scene.background.night, 'assets/background-night.png');
    this.load.spritesheet(assets.scene.ground, 'assets/ground-sprite.png', {
        frameWidth: 336,
        frameHeight: 112
    })

    // Pipes
    this.load.image(assets.obstacle.pipe.green.top, 'assets/pipe-green-top.png');
    this.load.image(assets.obstacle.pipe.green.bottom, 'assets/pipe-green-bottom.png');
    this.load.image(assets.obstacle.pipe.red.top, 'assets/pipe-red-top.png');
    this.load.image(assets.obstacle.pipe.red.bottom, 'assets/pipe-red-bottom.png');
    this.load.image(assets.scene.messageInitial, 'assets/message-initial.png');
    this.load.image(assets.scene.gameOver, 'assets/gameover.png');
    this.load.image(assets.scene.restart, 'assets/restart-button.png');

    this.load.spritesheet(assets.bird.red, 'assets/bird-red-sprite.png', {
        frameWidth: 34,
        frameHeight: 24
    })
    this.load.spritesheet(assets.bird.blue, 'assets/bird-blue-sprite.png', {
        frameWidth: 34,
        frameHeight: 24
    })
    this.load.spritesheet(assets.bird.yellow, 'assets/bird-yellow-sprite.png', {
        frameWidth: 34,
        frameHeight: 24
    })
    this.load.image(assets.scoreboard.number0, 'assets/number0.png');
    this.load.image(assets.scoreboard.number1, 'assets/number1.png');
    this.load.image(assets.scoreboard.number2, 'assets/number2.png');
    this.load.image(assets.scoreboard.number3, 'assets/number3.png');
    this.load.image(assets.scoreboard.number4, 'assets/number4.png');
    this.load.image(assets.scoreboard.number5, 'assets/number5.png');
    this.load.image(assets.scoreboard.number6, 'assets/number6.png');
    this.load.image(assets.scoreboard.number7, 'assets/number7.png');
    this.load.image(assets.scoreboard.number8, 'assets/number8.png');
    this.load.image(assets.scoreboard.number9, 'assets/number9.png');
    this.load.audio('theme', 'assets/theme.mp3');
    this.load.audio('smert', 'assets/smert.mp3');
    this.load.audio('score', 'assets/score.mp3');
    this.load.audio('flap', 'assets/flap.mp3');
    this.load.image('bronze','assets/bronze.png');
    this.load.image('silver', 'assets/silver.png');
    this.load.image('gold', 'assets/gold.png');
    this.load.image('plat', 'assets/plat.png');
}



function create() {
    backgroundDay = this.add.image(assets.scene.width, 256, assets.scene.background.day).setInteractive();
    backgroundDay.on('pointerdown', moveMoor);
    backgroundNight = this.add.image(assets.scene.width, 256, assets.scene.background.night).setInteractive();
    backgroundNight.visible = false;
    backgroundNight.on('pointerdown', moveMoor);

    gapsGroup = this.physics.add.group();
    pipesGroup = this.physics.add.group();
    scoreboardGroup = this.physics.add.staticGroup();

    ground = this.physics.add.sprite(assets.scene.width, 458, assets.scene.ground);
    ground.setCollideWorldBounds(true);
    ground.setDepth(10);

    messageInitial = this.add.image(assets.scene.width, 156, assets.scene.messageInitial);
    messageInitial.setDepth(30);
    messageInitial.visible = false;
    flap = this.sound.add('flap', { volume: 0.7 })
    music = this.sound.add('theme', { volume: 0.5 });
    music.play();
    smert = this.sound.add('smert', { volume: 0.3 });
    scoreSound = this.sound.add('score', { volume: 0.5 });

    upButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.anims.create({
        key: assets.animation.ground.moving,
        frames: this.anims.generateFrameNumbers(assets.scene.ground, {
            start: 0,
            end: 2
        }),
        frameRate: 15,
        repeat: -1
    })
    this.anims.create({
        key: assets.animation.ground.stop,
        frames: [{
            key: assets.scene.ground,
            frame: 0
        }],
        frameRate: 20
    })
    this.anims.create({
        key: assets.animation.bird.red.clapWings,
        frames: this.anims.generateFrameNumbers(assets.bird.red, {
            start: 0,
            end: 2
        }),
        frameRate: 10,
        repeat: -1
    })
    this.anims.create({
        key: assets.animation.bird.red.stop,
        frames: [{
            key: assets.bird.red,
            frame: 1
        }],
        frameRate: 20
    })
    this.anims.create({
        key: assets.animation.bird.blue.clapWings,
        frames: this.anims.generateFrameNumbers(assets.bird.blue, {
            start: 0,
            end: 2
        }),
        frameRate: 10,
        repeat: -1
    })
    this.anims.create({
        key: assets.animation.bird.blue.stop,
        frames: [{
            key: assets.bird.blue,
            frame: 1
        }],
        frameRate: 20
    })
    this.anims.create({
        key: assets.animation.bird.yellow.clapWings,
        frames: this.anims.generateFrameNumbers(assets.bird.yellow, {
            start: 0,
            end: 2
        }),
        frameRate: 10,
        repeat: -1
    })
    this.anims.create({
        key: assets.animation.bird.yellow.stop,
        frames: [{
            key: assets.bird.yellow,
            frame: 1
        }],
        frameRate: 20
    })
    prepareGame(this);
    gameOverBanner = this.add.image(assets.scene.width, 206, assets.scene.gameOver);
    gameOverBanner.setDepth(20);
    gameOverBanner.visible = false;
    restartButton = this.add.image(assets.scene.width, 300, assets.scene.restart).setInteractive();
    bronzeMedal = this.add.image(140, 350, 'bronze').setInteractive();
    bronzeMedal.setDepth(20);
    bronzeMedal.visible = false;
    silverMedal = this.add.image(140, 350, 'silver').setInteractive();
    silverMedal.setDepth(21);
    silverMedal.visible = false;
    goldMedal = this.add.image(140, 350, 'gold').setInteractive();
    goldMedal.setDepth(22);
    goldMedal. visible = false;
    platMedal = this.add.image(140, 350, 'plat').setInteractive();
    platMedal.setDepth(23);
    platMedal.visible = false;
    restartButton.on('pointerdown', restartGame);
    restartButton.setDepth(20);
    restartButton.visible = false;
    document.body.onkeyup = function(e){
        if(e.keyCode == 32){
            if(gameOver){
                restartGame();
            }
            else if(!gameStarted){
                moveMoor();
            }
        }
    }
}


function update() {
    
    if (gameOver || !gameStarted)
        return;
    if (framesMoveUp > 0)
        framesMoveUp--;
    else if (Phaser.Input.Keyboard.JustDown(upButton)){
        moveMoor();
    }
    else {
        player.setVelocityY(120)

        if (player.angle < 90)
            player.angle += 1
    }

    pipesGroup.children.iterate(function (child) {
        if (child == undefined)
            return

        if (child.x < -50)
            child.destroy();
        else
            child.setVelocityX(-100);
    })

    gapsGroup.children.iterate(function (child) {
        child.body.setVelocityX(-100);
    })

    nextPipes++
    if (nextPipes === 130) {
        makePipes(game.scene.scenes[0]);
        nextPipes = 0;
    }

}

function hitMoor(player) {
    this.physics.pause();
    music.stop();
    smert.play();
    gameOver = true;
    gameStarted = false;
    player.anims.play(getAnimationBird(birdName).stop);
    ground.anims.play(assets.animation.ground.stop);
    gameOverBanner.visible = true;
    restartButton.visible = true;
    if(score>39){
        platMedal.visible = true;
    }
    else if(score>29){
        goldMedal.visible = true;
    }
    else if(score>19){
        silverMedal.visible = true;
    }
    else if(score>9){
        bronzeMedal.visible = true;
    }
}

function updateScore(_, gap) {
    score++;
    gap.destroy();
    scoreSound.play();
    if (score % 10 == 0) {
        backgroundDay.visible = !backgroundDay.visible;
        backgroundNight.visible = !backgroundNight.visible;

        if (currentPipe === assets.obstacle.pipe.green)
            currentPipe = assets.obstacle.pipe.red;
        else
            currentPipe = assets.obstacle.pipe.green;
    }

    updateScoreboard();
}


function makePipes(scene) {
    if (!gameStarted || gameOver) return
    const pipeTopY = Phaser.Math.Between(-120, 120);
    const gap = scene.add.line(288, pipeTopY + 210, 0, 0, 0, 98);
    gapsGroup.add(gap);
    gap.body.allowGravity = false;
    gap.visible = false;
    const pipeTop = pipesGroup.create(288, pipeTopY, currentPipe.top);
    pipeTop.body.allowGravity = false;
    const pipeBottom = pipesGroup.create(288, pipeTopY + 420, currentPipe.bottom);
    pipeBottom.body.allowGravity = false;
}

function moveMoor() {
    if (gameOver)
        return
    if (!gameStarted)
        startGame(game.scene.scenes[0])
    player.setVelocityY(-400);
    flap.play();
    player.angle = -15;
    framesMoveUp = 5;
}

function getRandomMoor() {
    switch (Phaser.Math.Between(0, 2)) {
        case 0:
            return assets.bird.red;
        case 1:
            return assets.bird.blue;
        case 2:
        default:
            return assets.bird.yellow;
    }
}

function getAnimationBird(birdColor) {
    switch (birdColor) {
        case assets.bird.red:
            return assets.animation.bird.red;
        case assets.bird.blue:
            return assets.animation.bird.blue;
        case assets.bird.yellow:
        default:
            return assets.animation.bird.yellow;
    }
}

function updateScoreboard() {
    scoreboardGroup.clear(true, true);
    const scoreAsString = score.toString();
    if (scoreAsString.length == 1)
        scoreboardGroup.create(assets.scene.width, 30, assets.scoreboard.base + score).setDepth(10)
    else {
        let initialPosition = assets.scene.width - ((score.toString().length * assets.scoreboard.width) / 2);

        for (let i = 0; i < scoreAsString.length; i++) {
            scoreboardGroup.create(initialPosition, 30, assets.scoreboard.base + scoreAsString[i]).setDepth(10);
            initialPosition += assets.scoreboard.width;
        }
    }
}

function restartGame() {
    pipesGroup.clear(true, true);
    pipesGroup.clear(true, true);
    gapsGroup.clear(true, true);
    scoreboardGroup.clear(true, true);
    player.destroy();
    gameOverBanner.visible = false;
    restartButton.visible = false;
    music.play();
    smert.stop();
    const gameScene = game.scene.scenes[0];
    prepareGame(gameScene);
    gameScene.physics.resume();
    bronzeMedal.visible = false;
    silverMedal.visible = false;
    goldMedal.visible = false;
    platMedal.visible = false;
}

function prepareGame(scene) {
    framesMoveUp = 0;
    nextPipes = 0;
    currentPipe = assets.obstacle.pipe.green;
    score = 0;
    gameOver = false;
    backgroundDay.visible = true;
    backgroundNight.visible = false;
    messageInitial.visible = true;

    birdName = getRandomMoor();
    player = scene.physics.add.sprite(60, 265, birdName);
    player.setCollideWorldBounds(true);
    player.anims.play(getAnimationBird(birdName).clapWings, true);
    player.body.allowGravity = false;

    scene.physics.add.collider(player, ground, hitMoor, null, scene);
    scene.physics.add.collider(player, pipesGroup, hitMoor, null, scene);

    scene.physics.add.overlap(player, gapsGroup, updateScore, null, scene);

    ground.anims.play(assets.animation.ground.moving, true);
}

function startGame(scene) {
    gameStarted = true;
    messageInitial.visible = false;
    const score0 = scoreboardGroup.create(assets.scene.width, 30, assets.scoreboard.number0);
    score0.setDepth(20);
    makePipes(scene);
}
