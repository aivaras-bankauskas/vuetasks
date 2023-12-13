const debounce = (func: (...args: unknown[]) => void, wait: number): ((...args: unknown[]) => void) => {
	let timeout: number | undefined;

	return (...args: unknown[]) => {
		const later = (): void => {
			clearTimeout(timeout);
			func(...args);
		};

		clearTimeout(timeout);
		timeout = window.setTimeout(later, wait);
	};
};

export default debounce;

