import { useEffect, useState } from "react";

const getSavedValue = (key: string, initialValue: string | Function) => {
	const ls = localStorage.getItem(key);
	let savedValue = ls ? JSON.parse(ls) : '';
	if (savedValue) return savedValue;
	if (initialValue instanceof Function) return initialValue();
	return initialValue;
}

const useLocalStorage = (key: string, initialValue: string | Function) => {
	const [value, setValue] = useState(() => getSavedValue(key, initialValue));

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);

	return [value, setValue];
}

export default useLocalStorage;