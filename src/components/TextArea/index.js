import './index.scss'

const TextArea = ({handleChange}) => {
  
  
  return <textarea className="text-area" placeholder="Paste your text here..." onChange={handleChange} />
}

export default TextArea
