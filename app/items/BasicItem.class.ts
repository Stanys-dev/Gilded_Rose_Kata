import {getQualityModificationValue} from "@/helpers";
import {IUpdateItemQualityArgs} from "@/interfaces";

export default class BasicItem {
  private static readonly qualityModificationValue = 1;

  public static getUpdatedQuality({sellIn, quality}: IUpdateItemQualityArgs): number {
    const qualityModificationValue = getQualityModificationValue({
      sellIn: sellIn,
      defaultValue: this.qualityModificationValue
    });

    return quality - qualityModificationValue;
  }
}
