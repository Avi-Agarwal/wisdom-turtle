import quotesData from '../data/quotes.json';
import {shuffleArray} from './utils.js'

export const processData = () => {
    let arr = [];
    for (const key of Object.keys(quotesData)) {
        let arrTemp = shuffleArray(quotesData[key])
        arr = arr.concat(arrTemp);
    }
    return arr;
};
