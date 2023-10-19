import {IGetQualityModificationValueArgs} from "@/interfaces";

export const isSellDateExpired = (sellIn: number): boolean => {
  return sellIn <= 0;
}

export const getQualityModificationValue = ({
                                              sellIn,
                                              defaultValue
                                            }: IGetQualityModificationValueArgs): number => {
  return !isSellDateExpired(sellIn) ? defaultValue : defaultValue * 2;
}
