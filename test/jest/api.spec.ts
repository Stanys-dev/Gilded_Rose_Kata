import {Api} from "@/api";
import {mkdirSync, readFileSync, rmSync} from "fs";
import {join} from "path";
import {fileExistsSync} from "tsconfig-paths/lib/filesystem";
import {EAnswer} from "@/utils/enums";

describe('Api', () => {
    describe('sendHttpRequests', () => {
        const api = new Api(1);
        const handleAnswersSpy = jest.spyOn(api as any, 'handleAnswers');

        beforeEach(() => {
            mkdirSync(join(__dirname, '../../', "output"));
        });

        afterEach(() => {
            rmSync(join(__dirname, '../../', "output"), {recursive: true, force: true});
        });

        it('must call handleAnswers', async () => {
            await api.sendHttpRequests();

            expect(handleAnswersSpy).toHaveBeenCalled();
        })
    })

    describe('handleAnswers', () => {
        const api: any = new Api(1);
        // mock sendHttpRequests
        const sendHttpRequestsMock = jest.spyOn(api as any, 'sendHttpRequests').mockImplementation(async () => {
            await api.handleAnswers([EAnswer.NO])
        });

        beforeEach(() => {
            mkdirSync(join(__dirname, '../../', "output"));
        });

        afterEach(() => {
            rmSync(join(__dirname, '../../', "output"), {recursive: true, force: true});
        });

        it('must create logs file which contains 0', async () => {
            await api.sendHttpRequests();

            const fileContent = readFileSync(join(__dirname, '../../', "output/log.txt"), 'utf8');

            expect(sendHttpRequestsMock).toHaveBeenCalled();
            expect(fileExistsSync(join(__dirname, '../../', "output/log.txt"))).toBeTruthy();
            expect(fileContent).toBe('0');
        })
    })
})
