import { FiZap } from "react-icons/fi";
import ControlButton from "./ControlButton";
import TimeDisplay from "./TimeDisplay";
import useStopwatch from "../hooks/useStopwatch";
import formatTime from "../utils/formatTime";

export default function Stopwatch() {
	const { time, isRunning, start, pause, reset } = useStopwatch();

	return (
		<section className="panel stopwatch-card">
			<div className="card-header">
				<div>
					<p className="section-kicker">
						<FiZap className="text-neon-cyan" />
						Precision Mode
					</p>
					<h2 className="section-title">Stopwatch</h2>
				</div>

				<div className="status-pill">
					{isRunning ? "Counting up" : time > 0 ? "Paused" : "Ready"}
				</div>
			</div>

			<TimeDisplay
				time={time}
				label="Live Stopwatch"
				status={formatTime(time)}
				running={isRunning}
			/>

			<div className="control-grid">
				<ControlButton
					label={isRunning ? "Pause" : time > 0 ? "Resume" : "Start"}
					onClick={isRunning ? pause : start}
					variant="primary"
				/>
				<ControlButton
					label="Reset"
					onClick={reset}
					variant="secondary"
					disabled={time === 0 && !isRunning}
				/>
				<ControlButton
					label="Clear Pulse"
					onClick={reset}
					variant="danger"
					disabled={time === 0 && !isRunning}
				/>
			</div>
		</section>
	);
}
