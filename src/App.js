import { useEffect, useState, useReducer } from 'react';
import './App.scss';
import BottomResultBox from './components/BottomResultBox';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ResultBox from './components/ResultBox';
import TextArea from './components/TextArea';

const resultBarInitial = [
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
];

const bottomResultBar = [
	{
		title: 'Average Reading Time:',
		value: '-',
	},
	{
		title: 'Longest word:',
		value: '-',
	},
];

const initialState = {
	bars: [
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
	],
	text: '',
	bottomBar: [
		{
			title: 'Average Reading Time:',
			value: '-',
		},
		{
			title: 'Longest word:',
			value: '-',
		},
	],
};

const reducer = (state, action) => {
	const prevState = { ...state };

	if (action.type === 'CHAR_COUNT') {
		prevState.bars[1].value = action.payload.length;
	}

	if (action.type === 'WORD_COUNT') {
		const enteredText = action.payload.enteredText;
		const words = enteredText.split(' ');

		prevState.bars[0].value = words.length;
	}

	if (action.type === 'TYPING') {
		const enteredText = action.payload.enteredText;

		prevState.text = enteredText;
	}

	return prevState;
};
const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleChildData = (e) => {
		// handleCharacters(e.target.value.length);
		dispatch({
			type: 'CHAR_COUNT',
			payload: {
				length: e.target.value.length,
			},
		});

		dispatch({
			type: 'WORD_COUNT',
			payload: {
				enteredText: e.target.value,
			},
		});

		dispatch({
			type: 'TYPING',
			payload: {
				enteredText: e.target.value,
			},
		});

		// also dispatch actions for bottomBar
	};

	// const handleCharacters = (value) => {
	// 	return (resultBar[1].value = text.length);
	// };

	// useEffect(() => {
	// 	handleCharacters();
	// }, [text]);

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
			<div className='small-container'>
				<div className='main-app'>
					<ResultBox resultBar={state.bars} />
					<TextArea handleChildData={handleChildData} />
					<BottomResultBox bottomResultBar={state.bottomBar} />
				</div>
				<div>{state.text}</div>
			</div>
			<Footer />
		</>
	);
};

export default App;
