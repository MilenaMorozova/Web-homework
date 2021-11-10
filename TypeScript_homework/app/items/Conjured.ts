import BasicItem from "./BasicItem";

export default class Conjured extends BasicItem {

    updateQuality() {
        this.setQuality(this.quality - 2);
    }

}