import { useEffect, useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

const resultBar = [
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
  },
]

const bottomResultBar = [
  {
    title: 'Average Reading Time:',
    value: '-',
  },
  {
    title: 'Longest word:',
    value: '-',
  },
]
const App = () => {
 const [text, setText] = useState("")

 

  const handleChildData = (e) => {
    setText(e.target.value)
    }

  

    const handleCharacters = () => {
      return resultBar[1].value = text.length
      }

      useEffect(() => {
        handleCharacters()
      })
    
  
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
          <ResultBox resultBar={resultBar}/>
          <TextArea  handleChildData={handleChildData} />
          <BottomResultBox  bottomResultBar={bottomResultBar}/>
        </div>
        <div>{text}</div>
        </div>
      <Footer />
    </>
  )
}

export default App
