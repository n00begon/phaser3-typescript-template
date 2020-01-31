import { config } from "../config/preload";

export class Preloader extends Phaser.Scene {

    public preload() {

        // load assets declared in the preload config
        this.loadAtlas();
        this.loadAudio();
    }

    public create() {
        this.scene.start("main");
    }

    public loadAtlas() {
        const sheetPath = config.ssPath;
        const sheets = config.sheets;

        this.load.setPath(sheetPath);

        for (const sheet of sheets) {
            this.load.atlas(sheet, `${sheet}.png`, `${sheet}.json`);
        }
    }

    private loadAudio() {
        const audioPath = config.audioPath;
        const audioFiles = config.audioFiles;

        this.load.setPath(audioPath);

        for (const audioFile of audioFiles) {
            this.load.audio(audioFile.key, audioFile.mp3, audioFile.ogg);
        }
    }
}