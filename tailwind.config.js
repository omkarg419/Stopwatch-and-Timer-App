/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				neon: {
					cyan: "#2efcff",
					blue: "#4d7cff",
					pink: "#ff4fd8",
					purple: "#8d5bff",
					green: "#39ff88",
				},
			},
			boxShadow: {
				neon: "0 0 20px rgba(46, 252, 255, 0.18), 0 0 50px rgba(77, 124, 255, 0.12)",
				neonStrong:
					"0 0 20px rgba(46, 252, 255, 0.24), 0 0 60px rgba(255, 79, 216, 0.16), inset 0 0 20px rgba(255, 255, 255, 0.04)",
			},
			keyframes: {
				glowPulse: {
					"0%, 100%": { opacity: "0.85", transform: "translateY(0px)" },
					"50%": { opacity: "1", transform: "translateY(-2px)" },
				},

				float: {
