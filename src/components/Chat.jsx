import { useEffect, useState } from 'react'
import style from './Chat.module.css'
import ScrollToBottom from 'react-scroll-to-bottom'

function Chat({ socket, username, room }) {
	const [currentMessage, setCurrentMessage] = useState('')

	const [messageList, setMessageList] = useState([])

	const sendMessage = async () => {
		if (currentMessage !== '') {
			const MessageData = {
				room: room,
				author: username,
				message: currentMessage,
				time:
					new Date(Date.now()).getHours() +
					':' +
					new Date(Date.now()).getMinutes(),
			}

			await socket.emit('send_Message', MessageData)

			setMessageList(list => [...list, MessageData])

			document.getElementById('msg').value = ''

			setCurrentMessage('')
		}
	}

	useEffect(() => {
		socket.on('receive_Message', data => {
			console.log(data)
			setMessageList(list => [...list, data])
		})
	}, [socket])

	return (
		<div>
			<div key="div" className={style.chat_header}>
				<p>Chat App</p>
			</div>

			<div className={style.chat_body}>
				<ScrollToBottom className={style.message_container}>
					{messageList.map(messageContent => {
						return (
							<div>
								{username === messageContent.author ? (
									<div className={style.message_you}>
										<div>
											<div className={style.message_content}>
												<p>{messageContent.message}</p>
											</div>
											<div className={style.message_meta}>
												<p>{messageContent.time}</p>
											</div>
										</div>
									</div>
								) : (
									<div className={style.message_other}>
										<div>
											<div className={style.message_content}>
												<p>{messageContent.message}</p>
											</div>
											<div className={style.message_meta}>
												<p>{messageContent.time}</p>
											</div>
										</div>
									</div>
								)}
							</div>
						)
					})}
				</ScrollToBottom>
			</div>

			<div className={style.chat_footer}>
				<input
					type="text"
					id="msg"
					placeholder="Hey..."
					onChange={e => {
						setCurrentMessage(e.target.value)
					}}
					onKeyPress={e => {
						e.key === 'Enter' && sendMessage()
					}}
				/>
				<button onClick={sendMessage}>&#9658;</button>
			</div>
		</div>
	)
}
export default Chat
