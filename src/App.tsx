import React from 'react';
import { PomodoroTimer } from "./components/pomodoro-timer"

//import logo from './logo.svg';
import './App.css';

function App(): React.JSX.Element {
  return (
    <div className="container">
				<div>
					<PomodoroTimer  
					pomodoroTime={1500}
					shortRestTime={300}
					longRestTime={900}
					cycles ={4}
					/>
				</div>
    </div>
  );
}

export default App;
