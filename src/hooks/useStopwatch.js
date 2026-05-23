import { useEffect, useRef, useState } from "react";

export default function useStopwatch() {
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const intervalRef = useRef(null);
	const startTimeRef = useRef(0);
	const elapsedRef = useRef(0);

	const clearTimer = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	};

	const start = () => {
		if (isRunning) {
			return;
		}

		startTimeRef.current = Date.now();
		setIsRunning(true);
		clearTimer();

		intervalRef.current = setInterval(() => {
			setTime(elapsedRef.current + (Date.now() - startTimeRef.current));
		}, 10);
	};

	const pause = () => {
		if (!isRunning) {
			return;
		}

		elapsedRef.current += Date.now() - startTimeRef.current;
		setTime(elapsedRef.current);
		setIsRunning(false);
		clearTimer();
	};

	const reset = () => {
		clearTimer();
		startTimeRef.current = 0;
		elapsedRef.current = 0;
		setTime(0);
		setIsRunning(false);
	};

	useEffect(() => () => clearTimer(), []);

	return {
		time,
		isRunning,
		start,
		pause,
		reset,
	};
}
