import './Checkbox.css';

interface CheckboxProps {
	checked?: boolean,
	children?: JSX.Element,
	label?: JSX.Element | string,
	labelPosition?: 'right' | 'left' | 'top' | 'bottom',
	name?: string,
	onCheck?: (e: React.ChangeEvent) => void,
	onUncheck?: (e: React.ChangeEvent) => void,
	onToggle?: (nextChecked: boolean, e: React.ChangeEvent) => void
}

const Checkbox = ({
	checked = false,
	children,
	label,
	labelPosition = 'right',
	name,
	onCheck,
	onUncheck,
	onToggle
}: CheckboxProps) => {

	const handleChange = (e: React.ChangeEvent) => {
		const nextChecked = !checked;
		if (nextChecked && typeof onCheck === 'function') {
			onCheck(e);
		} else if (!nextChecked && typeof onUncheck === 'function') {
			onUncheck(e);
		}
		if (typeof onToggle === 'function') onToggle(nextChecked, e);
	}

	const getLabelStyle = (): React.CSSProperties => {
		let flexDirection;
		switch (labelPosition) {
			case 'left':
				flexDirection = 'row-reverse';
				break;
			case 'bottom':
				flexDirection = 'column';
				break;
			case 'top':
				flexDirection = 'column-reverse';
				break;
			default:
				flexDirection = 'row'
		}
		return {
			flexDirection: flexDirection,
			justifyContent: labelPosition === 'left' || labelPosition === 'top' ? 'flex-end' : 'flex-start'
		} as React.CSSProperties;
	}

	return (
		<label
			className={`Checkbox${checked ? ' checked' : ''}`}
			style={getLabelStyle()}
		>
			{children}
			<input
				style={{
					display: children ? 'none' : 'inline-block'
				}}
				type='checkbox'
				name={name}
				checked={checked}
				onChange={handleChange}
			/>
			{label}
		</label>
	);
}

export default Checkbox;