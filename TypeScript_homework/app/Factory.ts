import { Item } from "./gilded-rose";
import AgedBrie from "./items/AgedBrie";
import Backstage from "./items/Backstage";
import BasicItem from "./items/BasicItem";
import Conjured from "./items/Conjured";
import Sulfuras from "./items/Sulfuras";

const itemTypes = new Map([
    [ "aged brie", AgedBrie ],
    [ "sulfuras", Sulfuras ],
    [ "backstage", Backstage ],
    [ "conjured", Conjured ],
]);

export default class Factory {

    static createItem(item: Item): BasicItem {
        for (let entry of itemTypes.entries()) {
            let name = item.name.toLowerCase();
            if (name.indexOf(entry[0]) != -1) {
                return new entry[1](item.name, item.sellIn, item.quality);
            }
        }
        return new BasicItem(item.name, item.sellIn, item.quality)
    }

}