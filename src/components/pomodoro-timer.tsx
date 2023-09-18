import React from 'react';
import { useInterval } from '../hooks/use-interval';
//import { secondsToTime } from '../utils/seconds-to-time';
import { Button } from './button';
import { Timer } from './timer'

interface Props {
	pomodoroTime: number;
	shortRestTime: number;
	longRestTime: number;
	cycles: number;
}

export function PomodoroTimer(props: Props): React.JSX.Element {
	const [mainTime, setMainTime] = React.useState(props.pomodoroTime);

	useInterval(()=> { 
		setMainTime(mainTime - 1);
	}, 1000);
	
	return (
		<div className="pomodoro">
			<h2>You are : working</h2>
			<Timer mainTime={mainTime} />
			<Button text="teste" onClick={() => console.log(1)}></Button>
		</div>
	);
}
