import React from 'react';

interface Props {
	text: string;
	onClick?: () => void;
	clasName?: string;
}

export function Button(props: Props): JSX.Element {
	return (
		<button onClick={props.onClick} className={props.clasName} >
			{props.text}
		</button>
	);
}
