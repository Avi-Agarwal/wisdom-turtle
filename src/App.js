import React, {useState, useEffect} from 'react';
import './App.css';
import WisdomButton from './components/wisdomButton.js';
import quotesData from './data/quotes.json';
import {shuffleArray} from './util/utils.js'
import {processData} from "./util/processData";


function App() {
   const [quoteArr, setQuoteArr] = useState([]);
   const [loading, setLoading] = useState(true);


    useEffect(()=> {
       setQuoteArr(processData());
       const tstArr = [1 ,3 , 5];
       console.log(shuffleArray(tstArr));
       setLoading(false);
       console.log(quotesData)
   },[]);

  return (
    <div className="App">
        <div className="background">
            <p>
                { !loading && quoteArr[0] }
            </p>
            <WisdomButton str={'Click For a Quote!'}/>
        </div>
    </div>
  );
}

export default App;
