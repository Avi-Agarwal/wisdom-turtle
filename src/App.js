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


    useEffect(()=> {
       setQuoteArr(processData());
       const tstArr = [1 ,3 , 5];
       console.log(shuffleArray(tstArr));
       setLoading(false);
   },[]);

  return (
    <div className="App">
        <div className="background">
            <p>
                { !loading && quoteArr[quoteIndex] }
            </p>
            <WisdomButton str={'Click For Another Quote!'} onPress={()=>
            {
                if(quoteIndex === (quoteArr.length - 1) )
                    quoteIndex = 0;
                console.log('Current Index: ' + quoteIndex);
                setQuoteIndex(quoteIndex + 1);
            }}
            />
        </div>
    </div>
  );
}

export default App;
