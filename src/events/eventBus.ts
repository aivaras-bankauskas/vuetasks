import { reactive, readonly } from 'vue';

type EventCallback = (...args: string[]) => void;
type EventRecord = Record<string, EventCallback[]>;

const state = reactive<EventRecord>({});

const on = (event: string, callback: EventCallback): void => {
	if (!state[event]) {
		state[event] = [];
	}
	state[event].push(callback);
};

const off = (event: string, callback: EventCallback): void => {
	const callbacks = state[event];
	if (callbacks) {
		const index = callbacks.indexOf(callback);
		if (index >= 0) {
			callbacks.splice(index, 1);
		}
	}
};

const emit = (event: string, ...args: string[]): void => {
	const callbacks = state[event];
	if (callbacks) {
		callbacks.forEach((callback) => {
			callback(...args);
		});
	}
};

const eventBus = {
	on,
	off,
	emit
};

export default readonly(eventBus);
