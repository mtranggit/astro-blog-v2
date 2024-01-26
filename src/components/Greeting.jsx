import {useState} from 'preact/hooks';

export default function Greeting({messages}) {

	const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
	const [message, setMessage] = useState(randomMessage());
	
	return (
		<div>
			<h3>{message}! Thank you for visiting this site!</h3>
			<button onClick={() => setMessage(randomMessage())}>New Greeting</button>
		</div>
	)
}