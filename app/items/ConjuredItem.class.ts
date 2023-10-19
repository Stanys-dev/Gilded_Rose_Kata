import {getQualityModificationValue} from "@/utils/helpers";
import {IUpdateItemQualityArgs} from "@/utils/interfaces";

export default class ConjuredItem {
  private static readonly qualityModificationValue = 1;

  public static getUpdatedQuality({sellIn, quality}: IUpdateItemQualityArgs): number {
    const qualityModificationValue = getQualityModificationValue({
      sellIn: sellIn,
      defaultValue: this.qualityModificationValue
    });

    return quality - qualityModificationValue;
  }
}
