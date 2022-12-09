import Phaser from 'phaser'
import ScoreLabel from './ui/ScoreLabel'

const GROUND_KEY = 'ground'
const PC_KEY = 'dude'
const STAR_KEY = 'star'


export default class GameScene extends Phaser.Scene {
    constructor() {
        super('game-scene')

        this.player = undefined
        this.cursors = undefined
        this.scoreLabel = undefined

    }

    preload() {
        this.load.image('frame', )
        this.load.image('floor', 'assets/Cobble.png')
        this.load.image(GROUND_KEY, 'assets/platform.png')
        this.load.image(STAR_KEY, 'assets/star.png')
        this.load.image('bomb', 'assets/bomb.png')

        this.load.spritesheet(PC_KEY,
            'assets/PC.png',
            { frameWidth: 56, frameHeight: 76 }
        )
    }

    create() {
        this.add.image(0, 0, 'floor')
        this.add.image(100, 0, 'floor')
        this.add.image(200, 0, 'floor')
        this.add.image(300, 0, 'floor')
        this.add.image(400, 0, 'floor')
        this.add.image(500, 0, 'floor')
        this.add.image(600, 0, 'floor')
        this.add.image(700, 0, 'floor')
        this.add.image(800, 0, 'floor')
        this.add.image(900, 0, 'floor')
        this.add.image(1000, 0, 'floor')


        const platforms = this.createPlatforms()
        this.player = this.createPlayer()

        this.physics.add.collider(this.player, platforms)

        this.cursors = this.input.keyboard.createCursorKeys()
        this.W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        this.D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)


    }

    update() {
        if (this.W.isDown) {
            this.player.setVelocityY(-160)
            
            this.player.anims.play('WALKUP', true)
        }
        else if (this.S.isDown) {
            this.player.setVelocityY(160)
        }

        else {
            this.player.setVelocityY(0)
        }
        if (this.A.isDown) {
            this.player.setVelocityX(-160)

            this.player.anims.play('left', true)
        }
        else if (this.D.isDown) {
            this.player.setVelocityX(160)

            this.player.anims.play('right', true)
        }
        else {
            this.player.setVelocityX(0)
            this.player.anims.play('turn')
        }
    }

    createPlatforms() {
        const platforms = this.physics.add.staticGroup()

        platforms.create(Math.random() * 800, Math.random() * 600, GROUND_KEY).setScale(2).refreshBody()
        for (let i = 0; i < Math.floor(Math.random() * 6); i++) {//Temp solution
            platforms.create(Math.random() * 800, Math.random() * 600, GROUND_KEY)
        }


        return platforms
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
            frames: [{ key: PC_KEY, frame: 2}],
            frameRate: 20
        })

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers(PC_KEY, { start: 5, end: 6 }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'WALKUP',
            frames: this.anims.generateFrameNumbers(PC_KEY, { start: 5, end: 6 }),
            frameRate: 20,
            repeat: -1
        })

        return player
    }
}