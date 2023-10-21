import {EAnswer} from "@/utils/enums";

export interface IGetQualityModificationValueArgs {
    sellIn: number;
    defaultValue: number;
}

export interface IUpdateItemQualityArgs {
    sellIn: number;
    quality: number;
}

export interface IApiResponse {
    answer: EAnswer;
    forced: boolean;
    image: string;
}
