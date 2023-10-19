import Item from "@/items/Item.class";
import {getQualityModificationValue} from "@/helpers";

export default class ConjuredItem extends Item {
  private qualityModificationValue = 2;

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    const qualityModificationValue = getQualityModificationValue({
      sellIn: this.sellIn,
      defaultValue: this.qualityModificationValue
    });

    this.quality -= qualityModificationValue;
  }
}
