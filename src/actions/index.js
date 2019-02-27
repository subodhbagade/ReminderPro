import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

export const addReminder = (text, dueDate) => {
	const action = {
		type: ADD_REMINDER,
		text, //ES6 format
		dueDate
	}
	console.log('Action in addReminder', action);
	return action;
}

export const deleteReminder = (id) => {
	const action = {
		type: DELETE_REMINDER,
		id //ES6 format
	}
	console.log('deleting in actions', action);
	return action;
}

export const clearReminders = () => {
	return {
		type: CLEAR_REMINDERS
	}
}