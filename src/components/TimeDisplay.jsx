import { formatTimeParts } from "../utils/formatTime";

export default function TimeDisplay({ time, label, status, running = false }) {
	const parts = formatTimeParts(time);

	return (
		<div className="display-shell">
			<div className="display-header">
				<div>
					<p className="display-label">{label}</p>
					<h3 className="display-status">{status}</h3>
				</div>
				<div className={`status-pill ${running ? "status-pill--active" : ""}`}>
					{running ? "Running" : "Standby"}
				</div>
			</div>

			<div className="display-grid">
				{[
					{ label: "Hours", value: parts.hours },
					{ label: "Minutes", value: parts.minutes },
					{ label: "Seconds", value: parts.seconds },
					{ label: "MS", value: parts.milliseconds },
				].map((item) => (
					<div
						key={item.label}
						className="display-tile"
					>
						<p className="display-tile-label">{item.label}</p>
						<p className="digital-display">{item.value}</p>
					</div>
				))}
			</div>
		</div>
	);
}
