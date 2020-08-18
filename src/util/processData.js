import quotesData from '../data/quotes.json';
import {shuffleArray} from './utils.js'

export const processData = () => {
    let arr = [];
    for (const key of Object.keys(quotesData)) {
        arr = arr.concat(shuffleArray(quotesData[key]));
    }
    arr.unshift("");
    return arr;
};
