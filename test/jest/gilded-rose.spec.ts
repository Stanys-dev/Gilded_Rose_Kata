import Item from "@/items/Item.class";
import GildedRose from "@/gilded-rose";
import {QUALITY_LOWER_LIMIT, QUALITY_UPPER_LIMIT} from "@/utils/constants";

describe('Gilded Rose', () => {
    describe('Basic Items', () => {
        const itemName = 'Bread';
        const item = new Item(itemName, 1, 3);
        const gildedRose = new GildedRose([item]);

        it('must decrease sellIn and quality by one', () => {
            const expectedSellIn = item.sellIn - 1;
            const expectedQuality = item.quality - 1;

            const items = gildedRose.updateQuality();
            expect(items[0].name).toBe(itemName);
            expect(items[0].sellIn).toBe(expectedSellIn);
            expect(items[0].quality).toBe(expectedQuality);
        });

        it('must decrease quality by two when sellIn is less than zero', () => {
            const expectedSellIn = item.sellIn - 1;
            const expectedQuality = item.quality - 2;

            const items = gildedRose.updateQuality();
            expect(items[0].name).toBe(itemName);
            expect(items[0].sellIn).toBe(expectedSellIn);
            expect(items[0].quality).toBe(expectedQuality);
        })

        it('must not decrease quality below lower limit', () => {
            const expectedSellIn = item.sellIn - 1;
            const expectedQuality = QUALITY_LOWER_LIMIT;

            const items = gildedRose.updateQuality();
            expect(items[0].name).toBe(itemName);
            expect(items[0].sellIn).toBe(expectedSellIn);
            expect(items[0].quality).toBe(expectedQuality);
        })
    });

    describe('Aged Brie', () => {
        const itemName = 'Aged Brie';
        const item = new Item(itemName, 1, 47);
        const gildedRose = new GildedRose([item]);

        it('must increase quality by one', () => {
            const expectedSellIn = item.sellIn - 1;
            const expectedQuality = item.quality + 1;

            const items = gildedRose.updateQuality();
            expect(items[0].name).toBe(itemName);
            expect(items[0].sellIn).toBe(expectedSellIn);
            expect(items[0].quality).toBe(expectedQuality);
        });

        it('must increase quality by two when sellIn is less than zero', () => {
            const expectedSellIn = item.sellIn - 1;
            const expectedQuality = item.quality + 2;

            const items = gildedRose.updateQuality();
            expect(items[0].name).toBe(itemName);
            expect(items[0].sellIn).toBe(expectedSellIn);
            expect(items[0].quality).toBe(expectedQuality);
        });

        it('must not increase quality above upper limit', () => {
            const expectedSellIn = item.sellIn - 1;
            const expectedQuality = QUALITY_UPPER_LIMIT;

            const items = gildedRose.updateQuality();
            expect(items[0].name).toBe(itemName);
            expect(items[0].sellIn).toBe(expectedSellIn);
            expect(items[0].quality).toBe(expectedQuality);
        });
    })

    describe('Sulfuras, Hand of Ragnaros', () => {
        const itemName = 'Sulfuras, Hand of Ragnaros';
        const item = new Item(itemName, 7, 80);
        const gildedRose = new GildedRose([item]);

        it('must not change sellIn or quality', () => {
            const items = gildedRose.updateQuality();
            expect(items[0]).toStrictEqual(item);
        });
    });

    describe('Backstage passes to a TAFKAL80ETC concert', () => {
        it('must increase quality by one when sellIn is greater than 10', () => {
            const itemName = 'Backstage passes to a TAFKAL80ETC concert';
            const item = new Item(itemName, 15, 20);
            const gildedRose = new GildedRose([item]);

            const expectedSellIn = item.sellIn - 1;
            const expectedQuality = item.quality + 1;

            const items = gildedRose.updateQuality();
            expect(items[0].name).toBe(itemName);
            expect(items[0].sellIn).toBe(expectedSellIn);
            expect(items[0].quality).toBe(expectedQuality);
        });

        it('must increase quality by two when sellIn is between 10 and 6', () => {
            const itemName = 'Backstage passes to a TAFKAL80ETC concert';
            const item = new Item(itemName, 10, 20);
            const gildedRose = new GildedRose([item]);

            const expectedSellIn = item.sellIn - 1;
            const expectedQuality = item.quality + 2;

            const items = gildedRose.updateQuality();
            expect(items[0].name).toBe(itemName);
            expect(items[0].sellIn).toBe(expectedSellIn);
            expect(items[0].quality).toBe(expectedQuality);
        });

        it('must increase quality by three when sellIn is between 5 and 0', () => {
            const itemName = 'Backstage passes to a TAFKAL80ETC concert';
            const item = new Item(itemName, 5, 20);
            const gildedRose = new GildedRose([item]);

            const expectedSellIn = item.sellIn - 1;
            const expectedQuality = item.quality + 3;

            const items = gildedRose.updateQuality();
            expect(items[0].name).toBe(itemName);
            expect(items[0].sellIn).toBe(expectedSellIn);
            expect(items[0].quality).toBe(expectedQuality);
        });

        it('must not increase quality above upper limit', () => {
            const itemName = 'Backstage passes to a TAFKAL80ETC concert';
            const item = new Item(itemName, 5, QUALITY_UPPER_LIMIT);
            const gildedRose = new GildedRose([item]);

            const expectedSellIn = item.sellIn - 1;
            const expectedQuality = QUALITY_UPPER_LIMIT;

            const items = gildedRose.updateQuality();
            expect(items[0].name).toBe(itemName);
            expect(items[0].sellIn).toBe(expectedSellIn);
            expect(items[0].quality).toBe(expectedQuality);
        });

        it('must drop quality to zero when sellIn is less then zero', () => {
            const itemName = 'Backstage passes to a TAFKAL80ETC concert';
            const item = new Item(itemName, 0, 20);
            const gildedRose = new GildedRose([item]);

            const expectedSellIn = item.sellIn - 1;
            const expectedQuality = 0;

            const items = gildedRose.updateQuality();
            expect(items[0].name).toBe(itemName);
            expect(items[0].sellIn).toBe(expectedSellIn);
            expect(items[0].quality).toBe(expectedQuality);
        });
    });

    describe('Conjured Items', () => {
        const itemName = 'Conjured';
        const item = new Item(itemName, 1, 10);
        const gildedRose = new GildedRose([item]);

        it('must decrease sellIn by one and quality by two', () => {
            const expectedSellIn = item.sellIn - 1;
            const expectedQuality = item.quality - 2;

            const items = gildedRose.updateQuality();
            expect(items[0].name).toBe(itemName);
            expect(items[0].sellIn).toBe(expectedSellIn);
            expect(items[0].quality).toBe(expectedQuality);
        });

        it('must decrease sellIn by one and quality by four when sellIn is less than zero', () => {
            const expectedSellIn = item.sellIn - 1;
            const expectedQuality = item.quality - 4;

            const items = gildedRose.updateQuality();
            expect(items[0].name).toBe(itemName);
            expect(items[0].sellIn).toBe(expectedSellIn);
            expect(items[0].quality).toBe(expectedQuality);
        });

        it('must not decrease quality below lower limit', () => {
            const expectedSellIn = item.sellIn - 1;
            const expectedQuality = QUALITY_LOWER_LIMIT;

            const items = gildedRose.updateQuality();
            expect(items[0].name).toBe(itemName);
            expect(items[0].sellIn).toBe(expectedSellIn);
            expect(items[0].quality).toBe(expectedQuality);
        })
    });
});
