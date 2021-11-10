import BasicItem from "./BasicItem";

export default class Sulfuras extends BasicItem {

    constructor(name: string, sellIn: number, quality: number) {
        super(name, 0, 80);
    }

    update() {}

    setQuality() {
        this.quality = 80;
    }

}