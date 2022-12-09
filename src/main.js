import Phaser from 'phaser'

import GameScene from './GameScene'

const config = {
	type: Phaser.AUTO,
	width: 1280,
	height: 615,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 }
		}
	},
	scene: [GameScene]
}

export default new Phaser.Game(config)