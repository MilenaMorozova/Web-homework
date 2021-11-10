import BasicItem from "./BasicItem";

export default class Backstage extends BasicItem {

    updateQuality() {
        let newQuality = this.quality + 1;

        if (this.sellIn <= 0) {
            newQuality = 0;
        } 
        else if (this.sellIn <= 5) {
            newQuality = this.quality + 3;
        }
        else if (this.sellIn <= 10) {
            newQuality = this.quality + 2;
        }
        this.setQuality(newQuality);
    }

}