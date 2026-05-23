const pad = (value, length = 2) =>
	String(Math.floor(Math.abs(value))).padStart(length, "0");

export function formatTimeParts(totalMilliseconds = 0) {
	const safeMilliseconds = Math.max(0, Math.floor(totalMilliseconds));
	const hours = Math.floor(safeMilliseconds / 3600000);
	const minutes = Math.floor((safeMilliseconds % 3600000) / 60000);
	const seconds = Math.floor((safeMilliseconds % 60000) / 1000);
	const milliseconds = Math.floor((safeMilliseconds % 1000) / 10);

	return {
		hours: pad(hours),
		minutes: pad(minutes),
		seconds: pad(seconds),
		milliseconds: pad(milliseconds),
	};
}

export default function formatTime(totalMilliseconds = 0) {
	const parts = formatTimeParts(totalMilliseconds);
	return `${parts.hours} : ${parts.minutes} : ${parts.seconds} : ${parts.milliseconds}`;
}
