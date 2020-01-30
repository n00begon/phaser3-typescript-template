import { config } from '../config/preload';

export class Preloader extends Phaser.Scene {

    preload() {

        // load assets declared in the preload config
        this.loadAtlas();
        this.loadAudio();
    }

    create() {
        this.scene.start('main');
    }

    loadAtlas() {
        const sheetPath = config.ssPath;
        const sheets = config.sheets;

        this.load.setPath(sheetPath);

        for (let i = 0; i < sheets.length; i++) {
            this.load.atlas(sheets[i], `${sheets[i]}.png`, `${sheets[i]}.json`);
        }
    }

    loadAudio() {
        const audioPath = config.audioPath;
        const audioFiles = config.audioFiles;

        this.load.setPath(audioPath);

        for (let i = 0; i < audioFiles.length; i++) {
            this.load.audio(audioFiles[i].key, audioFiles[i].mp3, audioFiles[i].ogg);
        }
    }
}