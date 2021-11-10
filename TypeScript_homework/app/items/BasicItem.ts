import { Item } from "../gilded-rose";


const MAX_QUALITY = 50;

export default class BasicItem extends Item {

    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, 0);
        this.setQuality(quality);
    }

    setQuality(quality: number) {
        this.quality = Math.max(Math.min(quality, MAX_QUALITY), 0);
    }

    update() {
        this.updateQuality();
        this.updateSellIn();
    }

    updateQuality() {
        if (this.sellIn <= 0) {
            this.setQuality(this.quality - 2);
        }
        else {
            this.setQuality(this.quality - 1);
        }
    }

    updateSellIn() {
        this.sellIn--;
    }

}