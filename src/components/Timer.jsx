import { useMemo, useState } from "react";
import { FiClock, FiAlertTriangle } from "react-icons/fi";
import ControlButton from "./ControlButton";
import TimeDisplay from "./TimeDisplay";
import useTimer from "../hooks/useTimer";

const zeroPad = (value) =>
	String(Math.max(0, Number(value) || 0)).padStart(2, "0");

const toMilliseconds = ({ hours, minutes, seconds }) =>
	Math.max(0, Number(hours) || 0) * 3600000 +
	Math.max(0, Number(minutes) || 0) * 60000 +
	Math.max(0, Number(seconds) || 0) * 1000;

export default function Timer() {
	const [inputs, setInputs] = useState({
		hours: "00",
		minutes: "05",
		seconds: "00",
	});
	const initialDuration = useMemo(() => toMilliseconds(inputs), [inputs]);
	const { remainingTime, isRunning, isComplete, start, pause, reset } =
		useTimer(initialDuration);

	const handleInputChange = (field) => (event) => {
		const digitsOnly = event.target.value.replace(/\D/g, "").slice(0, 2);
		const normalized = digitsOnly === "" ? "" : zeroPad(digitsOnly);
		setInputs((current) => ({
			...current,
			[field]: normalized,
		}));
	};

	const handleStart = () => {
		const duration = toMilliseconds(inputs);
		if (duration <= 0) {
			return;
		}

		start(duration);
	};

	const handleReset = () => {
		const duration = toMilliseconds(inputs);
		reset(duration);
	};

	const displayedTime =
		isRunning || remainingTime > 0 || isComplete
			? remainingTime
			: initialDuration;
	const startDisabled = isRunning || toMilliseconds(inputs) <= 0;

	return (
		<section className="panel timer-card">
			<div className="card-header">
				<div>
					<p className="section-kicker">
						<FiClock className="text-neon-pink" />
						Countdown Mode
					</p>
					<h2 className="section-title">Timer</h2>
				</div>

				<div
					className={`status-pill ${isComplete ? "status-pill--complete" : isRunning ? "status-pill--running" : ""}`}
				>
					{isComplete ? "Completed" : isRunning ? "Counting down" : "Armed"}
				</div>
			</div>

			<TimeDisplay
				time={displayedTime}
				label="Countdown Timer"
				status={isComplete ? "Time has elapsed" : "Set your target"}
				running={isRunning}
			/>

			<div className="timer-inputs">
				{["hours", "minutes", "seconds"].map((field) => (
					<label
						key={field}
						className="timer-field"
					>
						<span className="field-label">{field}</span>
						<input
							type="text"
							inputMode="numeric"
							maxLength={2}
							value={inputs[field]}
							onChange={handleInputChange(field)}
							disabled={isRunning}
							className="timer-input"
						/>
					</label>
				))}
			</div>

			<div className="control-grid">
				<ControlButton
					label={isRunning ? "Pause" : "Start"}
					onClick={isRunning ? pause : handleStart}
					variant="primary"
					disabled={startDisabled && !isRunning}
				/>
				<ControlButton
					label={isRunning ? "Running" : "Reset"}
					onClick={handleReset}
					variant="secondary"
					disabled={
						remainingTime === initialDuration && !isRunning && !isComplete
					}
				/>
				<ControlButton
					label={isComplete ? "Done" : "Sync"}
					onClick={handleReset}
					variant="danger"
					disabled={isRunning}
				/>
			</div>

			{isComplete ? (
				<div className="complete-banner">
					<FiAlertTriangle className="shrink-0" />
					<span>
						Countdown complete. Reset or change the target time to run it again.
					</span>
				</div>
			) : null}
		</section>
	);
}
