import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const EMPTY = "EMPTY";
const CIRCLE = "CIRCLE";
const CROSS = "CROSS";

function TicTacToe() {
	const player = "";
	const positions = [
		EMPTY,
		EMPTY,
		CIRCLE,
		EMPTY,
		CROSS,
		EMPTY,
		EMPTY,
		CIRCLE,
		EMPTY
	];

	return (
		<div className="grid">
			<Square position={0} value={positions[0]} />
			<Square position={1} value={positions[1]} />
			<Square position={2} value={positions[2]} />
			<Square position={3} value={positions[3]} />
			<Square position={4} value={positions[4]} />
			<Square position={5} value={positions[5]} />
			<Square position={6} value={positions[6]} />
			<Square position={7} value={positions[7]} />
			<Square position={8} value={positions[8]} />
		</div>
	);
}

function Square({ position, value }) {
	return (
		<div className="square">
			{value == CIRCLE && <Circle />}
			{value == CROSS && <Cross />}
		</div>
	);
}

function Circle() {
	return (
		<div>
			<svg
				width="100"
				height="100"
				viewBox="-50 -50 100 100"
				class="circle"
			>
				<circle cx="0" cy="0" r="40" />
			</svg>
		</div>
	);
}

function Cross() {
	return (
		<div>
			<svg
				width="100"
				height="100"
				viewBox="-50 -50 100 100"
				class="cross"
			>
				<line x1="-40" y1="-40" x2="40" y2="40" />
				<line x1="-40" y1="40" x2="40" y2="-40" />
			</svg>
		</div>
	);
}

function Result() {
	return <div>Result</div>;
}

ReactDOM.render(<TicTacToe />, document.getElementById("app"));
