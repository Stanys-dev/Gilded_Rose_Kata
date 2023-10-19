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
          item.quality = AgedBrie.getUpdatedQuality({sellIn: item.sellIn, quality: item.quality})
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          item.quality = BackstagePass.getUpdatedQuality({sellIn: item.sellIn, quality: item.quality})
          break;
        case 'Conjured':
          item.quality = ConjuredItem.getUpdatedQuality({sellIn: item.sellIn, quality: item.quality})
          break;
        default:
          item.quality = BasicItem.getUpdatedQuality({sellIn: item.sellIn, quality: item.quality})
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
