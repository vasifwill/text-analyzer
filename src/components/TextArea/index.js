import './index.scss'

const TextArea = ({handleChildData}) => {

  

  return <textarea  onChange={handleChildData} className="text-area" placeholder="Paste your text here..."  />
}

export default TextArea
