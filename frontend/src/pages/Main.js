import './css/Main.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../components/AppContext';
import { POST } from '../function/POST';

let language = navigator.language;

const text = {
	"en": {
		title: "Chat Room",
		start: "Start",
		newChat: "Start a new chat",
		continue: "Continue an existed chat"
	},
	"zh-CN": {
		title: "聊天室",
		start: "开始",
		newChat: "开始新聊天",
		continue: "继续已有聊天"
	}
}

if (text[language] === undefined) {
	language = 'en';
}

function Main() {

	const [started, setStarted] = useState(false);

	const navigate = useNavigate();

	const { context } = useAppContext();

	async function start() {
		setStarted(true);
	}

	async function newChat() {
		try {
			const response = await POST({ type: 'new' }, '/src/chat/start');
			console.log(response);
			context.chatId = response.chatId;
		} catch (error) {
			console.error('Error: ', error);
		}
		navigate('/Chat');
	}

	async function continueChat() {
		try {
			const response = await POST({ type: 'continue' }, '/src/chat/start');
			console.log(response);
		} catch (error) {
			console.error('Error:', error);
		}
		navigate('/Chat');
	}

	return (
		<div className="Main">
			<h1>{text[language].title}</h1>
			<div className="split"></div>
			<div>
				{!started && (
					<div className="ButtonGroup">
						<input id="outlined-basic" label="name" variant="outlined" className="name" />
						<button onClick={start}>
							{text[language].start}
						</button>
					</div>
				)}
			</div>
			<div>
				{started && (
					<div className="ButtonGroup">
						<button onClick={newChat}>
							{text[language].newChat}
						</button>
						<button
							onClick={continueChat}
						>
							{text[language].continue}
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Main;
