import React from "react";
import "../../styles/home.css";
import { CountdownTimer } from "./countdownTimer.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Countdown to Con</h1>
		<CountdownTimer />
	</div>
);
