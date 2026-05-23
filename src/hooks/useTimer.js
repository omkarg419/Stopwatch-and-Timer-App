import { useEffect, useRef, useState } from "react";

export default function useTimer(initialDurationMs = 0) {
	const [remainingTime, setRemainingTime] = useState(initialDurationMs);
	const [isRunning, setIsRunning] = useState(false);
	const [isComplete, setIsComplete] = useState(initialDurationMs === 0);
	const intervalRef = useRef(null);
	const endTimeRef = useRef(null);
	const remainingRef = useRef(initialDurationMs);
	const initialDurationRef = useRef(initialDurationMs);

	const clearTimer = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	};

	const syncRemaining = (value) => {
		remainingRef.current = value;
		setRemainingTime(value);
	};

	const start = (nextDurationMs) => {
		if (isRunning) {
			return;
		}

		const durationToUse =
			typeof nextDurationMs === "number"
				? Math.max(0, nextDurationMs)
				: remainingRef.current;

		if (typeof nextDurationMs === "number") {
			initialDurationRef.current = durationToUse;
			syncRemaining(durationToUse);
		}

		if (durationToUse <= 0) {
			setIsComplete(true);
			return;
		}

		setIsRunning(true);
		setIsComplete(false);
		endTimeRef.current = Date.now() + durationToUse;
		clearTimer();

		intervalRef.current = setInterval(() => {
			const nextRemaining = Math.max(0, endTimeRef.current - Date.now());
			syncRemaining(nextRemaining);

			if (nextRemaining <= 0) {
				clearTimer();
				setIsRunning(false);
				setIsComplete(true);
			}
		}, 100);
	};

	const pause = () => {
		if (!isRunning) {
			return;
		}

		const nextRemaining = Math.max(0, endTimeRef.current - Date.now());
		syncRemaining(nextRemaining);
		setIsRunning(false);
		clearTimer();
	};

	const reset = (nextDurationMs = initialDurationRef.current) => {
		clearTimer();
		setIsRunning(false);
		setIsComplete(nextDurationMs === 0);
		initialDurationRef.current = Math.max(0, nextDurationMs);
		syncRemaining(Math.max(0, nextDurationMs));
		endTimeRef.current = null;
	};

	useEffect(() => () => clearTimer(), []);

	return {
		remainingTime,
		isRunning,
		isComplete,
		start,
		pause,
		reset,
	};
}
