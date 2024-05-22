import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import CheckboxExample from './examples/CheckboxExample';
import useFetch from './hooks/useFetch';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <h1>404 - Page not found</h1>
	},
	{ path: '/examples/checkbox', element: <CheckboxExample /> }
]);

function Home() {
	const { isPending, data, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

	return (
		<>
			<a href='./examples/checkbox' target='__blank'>Checkbox</a>
			<p>isPending: <code>{isPending.toString()}</code></p>
			<p>data: <code>{JSON.stringify(data)}</code></p>
			<p>error: <code>{error?.status}</code></p>
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