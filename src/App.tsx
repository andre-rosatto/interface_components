import { useState } from 'react';
import './App.css';
import Checkbox from './components/Checkbox/Checkbox';

const App = () => {
	const [checkeds, setCheckeds] = useState(new Array(4).fill(false));

	const handleToggle = (nextChecked: boolean, idx: number) => {
		const nextCheckeds = [...checkeds];
		nextCheckeds[idx] = nextChecked;
		setCheckeds(nextCheckeds);
	}

	return (
		<div className='App'>
			<div>
				<p>labelPosition = 'right' (default)</p>
				<Checkbox
					checked={checkeds[0]}
					label={
						<div className='Checkbox__label'>{checkeds[0] ? 'checked' : 'unchecked'}</div>
					}
					onToggle={nextChecked => handleToggle(nextChecked, 0)}
				>
					<div className='Checkbox__box'>
						<div className='Checkbox__checkmark'></div>
					</div>
				</Checkbox>
			</div>

			<div>
				<p>labelPosition = 'left'</p>
				<Checkbox
					checked={checkeds[1]}
					labelPosition='left'
					label={
						<div className='Checkbox__label'>{checkeds[1] ? 'checked' : 'unchecked'}</div>
					}
					onToggle={nextChecked => handleToggle(nextChecked, 1)}
				>
					<div className='Checkbox__box'>
						<div className='Checkbox__checkmark'></div>
					</div>
				</Checkbox>
			</div>

			<div>
				<p>labelPosition = 'top'</p>
				<Checkbox
					checked={checkeds[2]}
					labelPosition='top'
					label={
						<div className='Checkbox__label'>{checkeds[2] ? 'checked' : 'unchecked'}</div>
					}
					onToggle={nextChecked => handleToggle(nextChecked, 2)}
				>
					<div className='Checkbox__box'>
						<div className='Checkbox__checkmark'></div>
					</div>
				</Checkbox>
			</div>

			<div>
				<p>labelPosition = 'bottom'</p>
				<Checkbox
					checked={checkeds[3]}
					labelPosition='bottom'
					label={
						<div className='Checkbox__label'>{checkeds[3] ? 'checked' : 'unchecked'}</div>
					}
					onToggle={nextChecked => handleToggle(nextChecked, 3)}
				>
					<div className='Checkbox__box'>
						<div className='Checkbox__checkmark'></div>
					</div>
				</Checkbox>
			</div>
		</div>
	);
}

export default App;