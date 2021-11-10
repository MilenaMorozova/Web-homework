import BasicItem from '../app/items/BasicItem';
import { Item, GildedRose } from '../app/gilded-rose';
import AgedBrie from '../app/items/AgedBrie';
import Sulfuras from '../app/items/Sulfuras';
import Backstage from '../app/items/Backstage';
import Conjured from '../app/items/Conjured';
import Factory from '../app/Factory';

test('Gilded Rose', () => {

    const gildedRose = new GildedRose([ new BasicItem('foo', 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('foo');

});

test('Factory test', () => {
    
    let agedBrea = new Item("Aged Brie", 2, 0);
    let basicItem = new Item("Elixir of the Mongoose", 5, 7);
    let sulfuras = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
    let backstage = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20);

    expect(Factory.createItem(agedBrea)).toBeInstanceOf(AgedBrie);
    expect(Factory.createItem(basicItem)).toBeInstanceOf(BasicItem);
    expect(Factory.createItem(sulfuras)).toBeInstanceOf(Sulfuras);
    expect(Factory.createItem(backstage)).toBeInstanceOf(Backstage);

});

test('Once the sell by date has passed, Quality degrades twice as fast', () => {

    const gildedRose = new GildedRose([ new BasicItem('foo', -1, 24) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('foo');
    expect(items[0].sellIn).toEqual(-2);
    expect(items[0].quality).toEqual(22);

});

test('The Quality of an item is never negative', () => {

    const gildedRose = new GildedRose([ new BasicItem('foo', 0, -1) ]);
    expect(gildedRose.items[0].name).toEqual('foo');
    expect(gildedRose.items[0].quality).toBeGreaterThanOrEqual(0);

});

test('"Aged Brie" actually increases in Quality the older it gets', () => {

    const gildedRose = new GildedRose([ new AgedBrie('Aged Brie', 10, 24) ]);
    const countDays = 2;
    for (let i = countDays; i > 0; i--) {
        gildedRose.updateQuality();
    }
    expect(gildedRose.items[0].name).toEqual('Aged Brie');
    expect(gildedRose.items[0].sellIn).toEqual(10 - countDays);
    expect(gildedRose.items[0].quality).toEqual(24 + countDays);

});

test('The Quality is more than 50 in create case', () => {

    const gildedRose = new GildedRose([ new AgedBrie('Aged Brie', 10, 52) ]);
    expect(gildedRose.items[0].name).toEqual('Aged Brie');
    expect(gildedRose.items[0].quality).toBeLessThanOrEqual(50);

});

test('The Quality is more than 50 in update case', () => {

    const gildedRose = new GildedRose([ new AgedBrie('Aged Brie', 10, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('Aged Brie');
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(50);

});

test('"Sulfuras" never has to be sold', () => {

    const gildedRose = new GildedRose([ new Sulfuras('Sulfuras', 9, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('Sulfuras');
    expect(items[0].sellIn).toEqual(0);
});

test('"Sulfuras" Quality is 80 and it never alters', () => {

    const gildedRose = new GildedRose([ new Sulfuras('Sulfuras', 9, 10) ]);
    expect(gildedRose.items[0].name).toEqual('Sulfuras');
    expect(gildedRose.items[0].quality).toEqual(80);

    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('Sulfuras');
    expect(items[0].quality).toEqual(80);

});

test('"Backstage passes", like aged brie, increases in Quality as its SellIn value approaches', () => {

    const gildedRose = new GildedRose([ new Backstage('Backstage passeslfuras', 20, 24) ]);
    const countDays = 2;
    for (let i = countDays; i > 0; i--) {
        gildedRose.updateQuality();
    }
    expect(gildedRose.items[0].name).toEqual('Backstage passeslfuras');
    expect(gildedRose.items[0].sellIn).toEqual(20 - countDays);
    expect(gildedRose.items[0].quality).toEqual(24 + countDays);

});

test('quality changes of "Backstage passes"', () => {

    const gildedRose = new GildedRose([ new Backstage('Backstage1', 15, 40), 
                                        new Backstage('Backstage2', 10, 40), 
                                        new Backstage('Backstage3', 5, 40), 
                                        new Backstage('Backstage4', 0, 40) ]);
    const items = gildedRose.updateQuality();

    //+1
    expect(items[0].name).toEqual('Backstage1');
    expect(items[0].sellIn).toEqual(14);
    expect(items[0].quality).toEqual(41);

    //+2
    expect(items[1].name).toEqual('Backstage2');
    expect(items[1].sellIn).toEqual(9);
    expect(items[1].quality).toEqual(42);

    //+3
    expect(items[2].name).toEqual('Backstage3');
    expect(items[2].sellIn).toEqual(4);
    expect(items[2].quality).toEqual(43);

    //0
    expect(items[3].name).toEqual('Backstage4');
    expect(items[3].sellIn).toEqual(-1);
    expect(items[3].quality).toEqual(0);

});

test('"Conjured" items degrade in Quality twice as fast as normal items', () => {

    const gildedRose = new GildedRose([ new Conjured('Conjured', 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('Conjured');
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(8);

});