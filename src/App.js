import React, {useState, useEffect} from 'react';
import './App.css';
import WisdomButton from './components/wisdomButton.js';
import {shuffleArray} from './util/utils.js'
import {processData} from "./util/processData";
import './components/css/wisdomButton.css';


function App() {
   const [quoteArr, setQuoteArr] = useState([]);
   let [quoteIndex, setQuoteIndex] = useState(0);
   const [loading, setLoading] = useState(true);
   let indexMax = 1;


    useEffect(()=> {
       setQuoteArr(processData());
       const tstArr = [1 ,3 , 5];
       console.log(shuffleArray(tstArr));
       setLoading(false);
       indexMax = quoteArr.length;
       console.log(indexMax)
   },[]);

  return (
    <div className="App">
        <div className="background">
            <p>
                { !loading && quoteArr[quoteIndex] }
            </p>
            <button id="btn" onClick={console.log('hello')}>
                Click For Another Quote!
                <div id="circle"/>
            </button>
            {/*<WisdomButton str={'Click For Another Quote!'} onClick={console.log({indexMax})}/>*/}
        </div>
    </div>
  );
}

export default App;
