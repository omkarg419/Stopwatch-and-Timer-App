import clsx from "clsx";

const variants = {
	primary: "control-button--primary",
	secondary: "control-button--secondary",
	danger: "control-button--danger",
};

export default function ControlButton({
	label,
	onClick,
	variant = "secondary",
	disabled = false,
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			disabled={disabled}
			className={clsx("control-button", variants[variant])}
		>
			{label}
		</button>
	);
}
