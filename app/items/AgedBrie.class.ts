import Item from "@/items/Item.class";
import {getQualityModificationValue} from "@/helpers";

export default class AgedBrie extends Item {
  private qualityModificationValue = 1;

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    const qualityModificationValue = getQualityModificationValue({
      sellIn: this.sellIn,
      defaultValue: this.qualityModificationValue
    });

    this.quality += qualityModificationValue;
  }
}
