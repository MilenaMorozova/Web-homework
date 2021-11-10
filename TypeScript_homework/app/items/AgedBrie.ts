import BasicItem from "./BasicItem";

export default class AgedBrie extends BasicItem {

    updateQuality() {
        this.setQuality(this.quality + 1);
    }

}