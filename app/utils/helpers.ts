import {IGetQualityModificationValueArgs} from "@/utils/interfaces";
import axios, {AxiosRequestConfig} from "axios";

export const isSellDateExpired = (sellIn: number): boolean => {
    return sellIn <= 0;
}

export const getQualityModificationValue = ({
                                                sellIn,
                                                defaultValue
                                            }: IGetQualityModificationValueArgs): number => {
    return !isSellDateExpired(sellIn) ? defaultValue : defaultValue * 2;
}

export async function sendHttpRequest(options: AxiosRequestConfig): Promise<any> {
    const response = await axios(options);

    return response.data;
}
