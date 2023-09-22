import React from 'react';
import { PomodoroTimer } from "./components/pomodoro-timer"

//import logo from './logo.svg';
import './App.css';

function App(): React.JSX.Element {
  return (
    <div className="container">
				<div>
					<PomodoroTimer  
					pomodoroTime={10}
					shortRestTime={5}
					longRestTime={2}
					cycles ={4}
					/>
				</div>
    </div>
  );
}

export default App;
