import Item from "@/items/Item.class";
import BasicItem from "@/items/BasicItem.class";
import AgedBrie from "@/items/AgedBrie.class";
import BackstagePass from "@/items/BackstagePass.class";
import ConjuredItem from "@/items/ConjuredItem.class";
import {QUALITY_LOWER_LIMIT, QUALITY_UPPER_LIMIT} from "@/constants";

export default class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name === 'Sulfuras, Hand of Ragnaros') {
        continue;
      }

      switch (item.name) {
        case 'Aged Brie':
          const agedBrie = new AgedBrie(item.name, item.sellIn, item.quality);
          agedBrie.updateQuality();
          item.quality = agedBrie.quality;
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          const backstagePass = new BackstagePass(item.name, item.sellIn, item.quality);
          backstagePass.updateQuality();
          item.quality = backstagePass.quality;
          break;
        case 'Conjured':
          const conjuredItem = new ConjuredItem(item.name, item.sellIn, item.quality);
          conjuredItem.updateQuality();
          item.quality = conjuredItem.quality;
          break;
        default:
          const basicItem = new BasicItem(item.name, item.sellIn, item.quality);
          basicItem.updateQuality();
          item.quality = basicItem.quality;
          break;
      }

      item.sellIn = item.sellIn - 1;

      if (item.quality > QUALITY_UPPER_LIMIT) {
        item.quality = QUALITY_UPPER_LIMIT;
      } else if (item.quality < QUALITY_LOWER_LIMIT) {
        item.quality = QUALITY_LOWER_LIMIT;
      }
    }

    return this.items;
  }
}
