import React from 'react';
import { useInterval } from '../hooks/use-interval';
//import { secondsToTime } from '../utils/seconds-to-time';
import { Button } from './button';
import { Timer } from './timer'

interface Props {
	pomodoroTime: number ;
	shortRestTime: number;
	longRestTime: number;
	cycles: number;
}

export function PomodoroTimer(props: Props): React.JSX.Element {
	const [mainTime, setMainTime] = React.useState(props.pomodoroTime);
	const [timeCounting, setTimeCounting] = React.useState(false);
	const [working, setWorking] = React.useState(false);


	useInterval(
		()=> { 
			setMainTime(mainTime - 1);
		}, 
		timeCounting ? 1000 : null,
	);

	const configureWork = () => {
		setTimeCounting(true);
		setWorking(working);
	};
	
	return (
		<div className="pomodoro">
			<h2>You are : working</h2>
			<Timer mainTime={mainTime} />

			<div className="controls">
			<Button text="Working" onClick={() =>  [setTimeCounting(true), console.log(1)]}></Button>
			<Button text="teste" onClick={() => console.log(1)}></Button>
			<Button text="teste" onClick={() => console.log(1)}></Button>
			</div>

			<div className="details">
			
			<p>Testando algoo s asdfasdfasd </p>
			<p>Testando algoo s asdfasdfasd </p>
			<p>Testando algoo s asdfasdfasd </p></div>
		</div>
	);
}
