import Phaser from 'phaser'

const GROUND_KEY = 'ground'
const PC_KEY = 'dude'
const STAR_KEY = 'star'
const ENEMY_KEY = 'enemy'


export default class GameScene extends Phaser.Scene {
    constructor() {
        super('game-scene')

        this.player = undefined
        this.cursors = undefined
        this.scoreLabel = undefined
        this.enemy = undefined
        this.gameOver = false
    }

    preload() {

        this.load.image('floor', 'assets/fullcobble.png',)
        this.load.image(GROUND_KEY, 'assets/platform.png')
        this.load.image(STAR_KEY, 'assets/star.png')
        this.load.image('bomb', 'assets/bomb.png')

        this.load.spritesheet(ENEMY_KEY, 'assets/Goblin.png',
            { frameWidth: 42.5, frameHeight: 60 })

        this.load.spritesheet(PC_KEY,
            'assets/PC.png',
            { frameWidth: 56, frameHeight: 76 }
        )
    }

    create() {
        this.add.image(500,300, 'floor')


        this.player = this.createPlayer()
        this.enemy = this.createEnemy()

        //physics

        this.physics.add.collider(this.player, this.enemy, this.enemyHit, null, this)


        this.cursors = this.input.keyboard.createCursorKeys()
        this.W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        this.D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)


    }
    update() {
        this.playerMovment()
        this.enemyMovment()
        this.enemyHit
        if (this.gameOver) {
            return
        }

    }
    createPlayer() {
        const player = this.physics.add.sprite(100, 450, PC_KEY)
        player.setCollideWorldBounds(true)

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers(PC_KEY, { start: 0, end: 1 }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'turn',
            frames: [{ key: PC_KEY, frame: 2 }],
            frameRate: 20
        })

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers(PC_KEY, { start: 3, end: 4 }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'gåupp',
            frames: this.anims.generateFrameNumbers(PC_KEY, { start: 5, end: 6 }),
            frameRate: 10,
            repeat: -1
        })

        return player
    }
    //Movment and animations
    playerMovment() {
        if (this.W.isDown) {
            this.player.setVelocityY(-160)

            this.player.anims.play('gåupp', true)
        }
        if (this.A.isDown) {
            this.player.setVelocityX(-160)

            this.player.anims.play('left', true)
        }
        if (this.D.isDown) {
            this.player.setVelocityX(160)

            this.player.anims.play('right', true)
        }
        if (this.S.isDown) {
            this.player.setVelocityY(160)
        }
        if (this.W.isUp && this.S.isUp) {
            this.player.setVelocityY(0)
        }
        if (this.A.isUp && this.D.isUp) {
            this.player.setVelocityX(0)
        }
        if (this.player.body.velocity.x == 0 && this.player.body.velocity.y == 0    ){
            this.player.anims.play('turn')
        }
    }
//Enemy movment and animations
createEnemy() {
    const enemy = this.physics.add.sprite(400, 450, ENEMY_KEY)
    enemy.setCollideWorldBounds(true)

    this.anims.create({
        key: 'Gob left',
        frames: this.anims.generateFrameNumbers(ENEMY_KEY, { start: 0, end: 1 }),
        frameRate: 10,
        repeat: -1
    })

    this.anims.create({
        key: 'GAMEOVER',
        frames: [{ key: ENEMY_KEY, frame: 1 }],
        frameRate: 20
    })

    this.anims.create({
        key: 'Gob right',
        frames: this.anims.generateFrameNumbers(ENEMY_KEY, { start: 2, end: 3 }),
        frameRate: 10,
        repeat: -1
    })

    return enemy
}
enemyMovment() {
    this.physics.moveToObject(this.enemy, this.player, 160);

    if (this.enemy.x > this.player.x) {

        this.enemy.anims.play('Gob left', true)
    }
    else {
        this.enemy.anims.play('Gob right', true)
    }
}
//Rule that apply when touching enemy goblins
enemyHit(player, enemy) {
    this.physics.pause()

    player.setTint(0xff0000)

    player.anims.play('turn')
    this.enemy.anims.play('GAMEOVER', true)
    this.add.text(300, this.cameras.main.midPoint.y, 'Game Over', { fontSize: '32px' })
    this.gameOver = true
}

}