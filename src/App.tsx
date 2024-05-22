import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import CheckboxExample from './examples/CheckboxExample';

const router = createBrowserRouter([
	{
		path: '/',
		element:
			<>
				<a href='./examples/checkbox' target='__blank'>Checkbox</a>
			</>,
		errorElement: <h1>404 - Page not found</h1>
	},
	{ path: '/examples/checkbox', element: <CheckboxExample /> }
]);

const App = () => {
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;