import Item from "@/items/Item.class";
import {isSellDateExpired} from "@/helpers";

export default class BackstagePass extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  updateQuality() {

    if (isSellDateExpired(this.sellIn)) {
      this.quality = 0;
      return
    }

    if (this.sellIn > 10) {
      this.quality += 1;
    } else if (this.sellIn > 5 && this.sellIn <= 10) {
      this.quality += 2;
    } else if (this.sellIn <= 5) {
      this.quality += 3;
    }

  }
}
