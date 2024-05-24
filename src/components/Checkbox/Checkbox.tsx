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
		if (nextChecked && onCheck instanceof Function) {
			onCheck(e);
		} else if (!nextChecked && onUncheck instanceof Function) {
			onUncheck(e);
		}
		if (onToggle instanceof Function) onToggle(nextChecked, e);
	}

	const getStyles = (): React.CSSProperties => {
		const result: React.CSSProperties = {
			display: 'inline-flex',
			alignItems: 'center',
			flexDirection: 'row',
			justifyContent: labelPosition === 'left' || labelPosition === 'top' ? 'flex-end' : 'flex-start'
		};
		switch (labelPosition) {
			case 'left':
				result.flexDirection = 'row-reverse';
				break;
			case 'bottom':
				result.flexDirection = 'column';
				break;
			case 'top':
				result.flexDirection = 'column-reverse';
		}
		return result;
	}

	return (
		<label
			className={`${checked ? ' checked' : ''}`}
			style={getStyles()}
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