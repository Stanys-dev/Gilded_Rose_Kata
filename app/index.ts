import yargs from "yargs";
import GildedRose from "@/gilded-rose";
import Item from "@/items/Item.class";
import {Api} from "@/api";
import {mkdirSync} from "fs";
import {join} from "path";

mkdirSync(join(__dirname, '../', "output"), {recursive: true});

const options: { updates: number, requests: number } = yargs.usage(' -u <updates> -r <requests>').option("u", {
    alias: "updates",
    describe: "Number which represents how many times the shop should update it’s items.",
    type: "number",
    demandOption: true
}).option("r", {
    alias: "requests",
    describe: "Number of start requests to the mock API.",
    type: "number",
    demandOption: true
}).argv as any;

const shop = new GildedRose([new Item('Aged Brie', 20, 5), new Item('Backstage passes to a TAFKAL80ETC concert', 20, 5), new Item('Conjured', 20, 40), new Item('Sulfuras, Hand of Ragnaros', 20, 80), new Item('Basic Item', 20, 25)]);

!async function () {
    for (let i = 0; i < options.updates; i++) {

        await new Api(options.requests).sendHttpRequests();
        shop.updateQuality();
    }
}();
