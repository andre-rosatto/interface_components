import { useState } from "react";
import Checkbox from "../components/Checkbox/Checkbox";
import styles from './CheckboxExample.module.css';

const CheckboxExample = () => {
	const [checkeds, setCheckeds] = useState(new Array(4).fill(false));

	const handleToggle = (nextChecked: boolean, idx: number) => {
		const nextCheckeds = [...checkeds];
		nextCheckeds[idx] = nextChecked;
		setCheckeds(nextCheckeds);
	}
	return (
		<section className={styles.CheckboxExample}>
			<div>
				<p>labelPosition = 'right' (default)</p>
				<Checkbox
					checked={checkeds[0]}
					label={
						<div className={`${styles.label} ${checkeds[0] && styles.checked}`}>{checkeds[0] ? 'checked' : 'unchecked'}</div>
					}
					onToggle={nextChecked => handleToggle(nextChecked, 0)}
				>
					<div className={`${styles.box} ${checkeds[0] && styles.checked}`}>
						<div className={`${styles.checkmark} ${checkeds[0] && styles.checked}`}></div>
					</div>
				</Checkbox>
			</div>

			<div>
				<p>labelPosition = 'left'</p>
				<Checkbox
					checked={checkeds[1]}
					labelPosition='left'
					label={
						<div className={`${styles.label} ${checkeds[1] && styles.checked}`}>{checkeds[1] ? 'checked' : 'unchecked'}</div>
					}
					onToggle={nextChecked => handleToggle(nextChecked, 1)}
				>
					<div className={`${styles.box} ${checkeds[1] && styles.checked}`}>
						<div className={`${styles.checkmark} ${checkeds[1] && styles.checked}`}></div>
					</div>
				</Checkbox>
			</div>

			<div>
				<p>labelPosition = 'top'</p>
				<Checkbox
					checked={checkeds[2]}
					labelPosition='top'
					label={
						<div className={`${styles.label} ${checkeds[2] && styles.checked}`}>{checkeds[2] ? 'checked' : 'unchecked'}</div>
					}
					onToggle={nextChecked => handleToggle(nextChecked, 2)}
				>
					<div className={`${styles.box} ${checkeds[2] && styles.checked}`}>
						<div className={`${styles.checkmark} ${checkeds[2] && styles.checked}`}></div>
					</div>
				</Checkbox>
			</div>

			<div>
				<p>labelPosition = 'bottom'</p>
				<Checkbox
					checked={checkeds[3]}
					labelPosition='bottom'
					label={
						<div className={`${styles.label} ${checkeds[3] && styles.checked}`}>{checkeds[3] ? 'checked' : 'unchecked'}</div>
					}
					onToggle={nextChecked => handleToggle(nextChecked, 3)}
				>
					<div className={`${styles.box} ${checkeds[3] && styles.checked}`}>
						<div className={`${styles.checkmark} ${checkeds[3] && styles.checked}`}></div>
					</div>
				</Checkbox>
			</div>
		</section>
	);
}

export default CheckboxExample;