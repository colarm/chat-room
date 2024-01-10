import React, { useState } from 'react';
import './css/Main.css';
import Button from '@mui/material/Button';
import { POST } from '../function/POST';

function Main() {
	const [started, setStarted] = useState(false);

	async function start() {
		setStarted(true);
	}

	async function newChat() {
		try {
			const response = await POST({ type: 'new' }, '/src/chat/start');
			console.log(response);
		} catch (error) {
			console.error('Error:', error);
		}
	}

	function continueChat() {
		// 实现继续现有聊天的逻辑
	}

	return (
		<div className="Main">
			<h1>Chat Room</h1>
			<div className="split"></div>
			<div>
				{!started && (
					<Button onClick={start} color="success" variant="contained">
						Start
					</Button>
				)}
			</div>
			<div>
				{started && (
					<div className="ButtonGroup">
						<Button onClick={newChat} color="success" variant="contained">
							Start a new chat
						</Button>
						<div className="split_1"></div>
						<Button
							onClick={continueChat}
							color="success"
							variant="contained"
						>
							Continue an existed chat
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Main;
