import { useReducer } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import {pronouns} from './data/pronouns.js'

const resultBar = {
  bars:[
  {
    title: 'Words',
    value: 0,
  },
  {
    title: 'Characters',
    value: 0,
  },
  {
    title: 'Sentences',
    value: 0,
  },
  {
    title: 'Paragraphs ',
    value: 0,
  },
  {
    title: 'Pronouns',
    value: 0,
  }
],bottomResultBar:[
  {
    title: 'Average Reading Time:',
    value: '-',
  },
  {
    title: 'Longest word:',
    value: '-',
  }
]
 }

const reducer = (state, action) => {
    const prevState = {...state}
  if (action.type === 'CHAR_COUNT') {
		prevState.bars[1].value = action.payload.length;
	}

  if (action.type === 'WORD_COUNT') {
    let count = 0
    let wordToArray = action.payload.word.split('')
    for (let i = 0; i < wordToArray.length; i++) {
      if(action.payload.word[i] === " " ) {
        count+=1
       
      }
      prevState.bars[0].value = count;
      
    }  
    
  }
  if (action.type === 'SENTENCES_COUNT') {
    let count = 0
    let wordToArray = action.payload.word.split('')
    for (let i = 0; i < wordToArray.length; i++) {
      if(action.payload.word[i] === "!" || action.payload.word[i] === "?" || action.payload.word[i] === ".") {
        count+=1
        
       
      }
      prevState.bars[2].value = count;
      
    }
    
    
    
  }

  if (action.type === 'PRONOUNS_COUNT') {
    let count = 0
    let words = action.payload.word.split(' ')

    words.forEach(element => {
    if(pronouns.includes(element.toLowerCase()) ) {
      count+=1
    }
    prevState.bars[4].value = count;
  });

    
  }

if (action.type === 'AVG_READING_TIME') {
  let count = 0
  let result = 0
  let min = " minutes"
  let wordToArray = action.payload.word.split('')
  for (let i = 0; i < wordToArray.length; i++) {
    if(action.payload.word[i] === " ") {
      count+=1
      
    }
    if(count >= 225) {
      result = Math.floor(count/225)
    }else {
      result = 0
    }
    
  }

  prevState.bottomResultBar[0].value = result+min;

}

if (action.type === 'LONGEST_WORD') {
  let  wordToArray = action.payload.word.split(" ")
  let min = 0
  let longestWord = ""

  for (let i = 0; i < wordToArray.length; i++) {
   let longest = wordToArray[i].length
   let result = Math.max(min,longest)
   if(result > min){
    min = result
    longestWord = wordToArray[i]
   }
   

    
  }
  prevState.bottomResultBar[1].value = longestWord;
}




  return prevState

}
const App = () => {
 const [state, dispatch] = useReducer(reducer, resultBar )

  const handleChildData = (e) => {

    dispatch({
      type:'CHAR_COUNT',
      payload:{
        length: e.target.value.length
      }
    })

    dispatch({
      type:'WORD_COUNT',
      payload:{
        word: e.target.value
      }
    })

    dispatch({
      type:'SENTENCES_COUNT',
      payload:{
        word: e.target.value
      }
    })

    dispatch({
      type:'PRONOUNS_COUNT',
      payload:{
        word: e.target.value
      }
    })

    dispatch({
      type:'AVG_READING_TIME',
      payload:{
        word: e.target.value
      }
    })

    dispatch({
      type:'LONGEST_WORD',
      payload:{
        word: e.target.value
      }
    })

    

    
    


    }

  

  
  // const [resultBox, setResultBox]=useState(resultBar)
  // const [bottomResult, setbottomResult]=useState(bottomResultBar)
  // const handleChange = (e) => {
  //   const texts=e.target.value
  //   setText(texts)
  //   console.log("this is letter - "+text)
  //   console.log("this is length - "+text.length)
  // }

  

  // const handleWords = () => {
  //   var totalSoFar = 0;
  //   for (var i = 0; i < WordCount.length; i++)
  //     if (str(i) === " ") { // if a space is found in str
  //       totalSoFar = +1; // add 1 to total so far
  //   }
  //   totalsoFar += 1;
    
  // }
  // const handleSentences = () => {
    
  // }

  // const handleParagraphs = () => {
    
  // }

  // const handlePronouns = () => {
    
  // }

  // const handleAverageReadingTime = () => {
    
  // }
  // const handleLongestWord = () => {
    
    
  // }
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox resultBar={state.bars}/>
          <TextArea  handleChildData={handleChildData} />
          <BottomResultBox  bottomResultBar={state.bottomResultBar}/>
        </div>
        <div>{state.text}</div>
        </div>
      <Footer />
    </>
  )
}

export default App
