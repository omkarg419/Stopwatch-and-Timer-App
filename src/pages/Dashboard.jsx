import { FiActivity, FiCpu, FiZap } from "react-icons/fi";
import Stopwatch from "../components/Stopwatch";
import Timer from "../components/Timer";

export default function Dashboard() {
	return (
		<main className="app-shell">
			<div className="dashboard">
				<header className="panel hero-panel">
					<div className="hero-layout">
						<div>
							<p className="eyebrow">
								<FiZap className="stat-icon" />
								Neon control dashboard
							</p>
							<h1 className="hero-title">
								Stopwatch & Timer
								<span className="hero-title-accent">cyber clock suite</span>
							</h1>
							<p className="hero-copy">
								A futuristic dual timing dashboard with precise interval
								handling, reusable React components, and a clean static
								interface built for simple interaction.
							</p>
						</div>

						<div className="stats-grid">
							{[
								{ icon: FiActivity, label: "Live", value: "Static" },
								{ icon: FiCpu, label: "Logic", value: "Hooks" },
								{ icon: FiZap, label: "Theme", value: "Neon" },
							].map((item) => (
								<div
									key={item.label}
									className="stat-card"
								>
									<item.icon className="stat-icon" />
									<p className="stat-label">{item.label}</p>
									<p className="stat-value">{item.value}</p>
								</div>
							))}
						</div>
					</div>
				</header>

				<section className="section-grid">
					<Stopwatch />
					<Timer />
				</section>

				<footer className="panel footer-panel">
					<p className="footer-note">
						Built with React, Vite, and React Icons.
					</p>
				</footer>
			</div>
		</main>
	);
}
