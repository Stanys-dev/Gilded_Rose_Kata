import {sendHttpRequest} from "@/utils/helpers";
import {IApiResponse} from "@/utils/interfaces";
import {EAnswer} from "@/utils/enums";
import {appendFileSync} from "fs";
import {join} from "path";

export class Api {
    private readonly url = "https://yesno.wtf/api";

    constructor(public repeat: number) {
    }

    public async sendHttpRequests(repeat?: number): Promise<void> {
        if (!repeat) {
            console.log('initial requests');
        } else {
            console.log('repeat requests');
        }
        const repeatCount = repeat || this.repeat;
        const promises = new Array(repeatCount).fill(0).map(async (): Promise<EAnswer> => {
            const response: IApiResponse = await sendHttpRequest({url: this.url})

            return response.answer;
        });

        const answers = await Promise.all(promises);

        return this.handleAnswers(answers);
    }

    private async handleAnswers(answers: EAnswer[]): Promise<void> {
        const yesAnswersCount = answers.filter((answer: EAnswer): boolean => answer === EAnswer.YES).length;
        console.log('yesAnswersCount', yesAnswersCount);
        appendFileSync(join(__dirname, '../../', "output/log.txt"), yesAnswersCount.toString());

        if (!yesAnswersCount) {
            return;
        }

        await this.sendHttpRequests(yesAnswersCount);
    }
}
