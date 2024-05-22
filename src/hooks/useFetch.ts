import { useEffect, useState } from "react";

const useFetch = (url: string): { isPending: boolean, data: any, error: any } => {
	const [isPending, setIsPending] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsPending(true);
		setData(null);
		setError(null);

		fetch(url)
			.then(res => {
				if (!res.ok) throw res;
				return res.json()
			})
			.then(data => {
				setIsPending(false);
				setData(data);
				setError(null);
			}).catch(err => {
				setIsPending(false);
				setData(data);
				setError(err);
			})
	}, [url]);

	return {
		isPending: isPending,
		data: data,
		error: error
	}
}

export default useFetch;