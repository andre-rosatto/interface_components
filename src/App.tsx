import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import CheckboxExample from './examples/CheckboxExample';
import useLocalStorage from './hooks/useLocalStorage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <h1>404 - Page not found</h1>
	},
	{ path: '/examples/checkbox', element: <CheckboxExample /> }
]);

function Home() {
	const [ls, setLs] = useLocalStorage('test', '');

	return (
		<>
			<a href='./examples/checkbox' target='__blank'>Checkbox</a>
			<br />
			<input
				type="text"
				value={ls}
				onChange={e => setLs(e.target.value)}
			/>
		</>
	);
}

const App = () => {
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;