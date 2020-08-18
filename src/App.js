import React, {useState, useEffect} from 'react';
import './App.css';
import WisdomButton from './components/wisdomButton.js';
import {processData} from "./util/processData";
import './components/css/wisdomButton.css';


function App() {
   const [quoteArr, setQuoteArr] = useState([]);
   let [quoteIndex, setQuoteIndex] = useState(0);
   const [loading, setLoading] = useState(true);


    useEffect(()=> {
       setQuoteArr(processData());
       setLoading(false);
   },[]);

  return (
    <div className="App">
        <div className="background">
            <div className="textBoundary">
                <p className="text2">
                    { !loading && quoteArr[quoteIndex].length === 0 ? quoteArr[quoteIndex] : '"' + quoteArr[quoteIndex] + '"' }
                </p>
            </div>
            <WisdomButton str={'Click For Quotes!'} onPress={()=>
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
