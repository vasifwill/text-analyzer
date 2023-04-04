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
  // const [resultBox, setResultBox]=useState(resultBar)
  // const [bottomResult, setbottomResult]=useState(bottomResultBar)
  const handleChange = (e) => {
    const texts=e.target.value
    setText(texts)
  }

  

  // const handleWords = () => {

  // }

  const handleCharacters = () => {
   const wordLength = text.length
   if(text != null){
    text.map((item) => {
      if(item.title === 'Characters'){
        item.value = wordLength
      }
      return item
    })

   }

    
  }

  useEffect(() => {
    handleCharacters()
  })


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
          <TextArea handleChange={handleChange}/>
          <BottomResultBox  bottomResultBar={bottomResultBar}/>
        </div>
        <div>Hello World {text}</div>
      </div>
      <Footer />
    </>
  )
}

export default App
