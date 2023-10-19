import {isSellDateExpired} from "@/utils/helpers";
import {IUpdateItemQualityArgs} from "@/utils/interfaces";

export default class BackstagePass {
  public static getUpdatedQuality({sellIn, quality}: IUpdateItemQualityArgs): number {

    if (isSellDateExpired(sellIn)) {
      return 0
    }

    if (sellIn > 10) {
      quality += 1;
    } else if (sellIn > 5 && sellIn <= 10) {
      quality += 2;
    } else if (sellIn <= 5) {
      quality += 3;
    }

    return quality;
  }
}
