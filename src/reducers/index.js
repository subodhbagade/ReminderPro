import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';


const reminder = (action) => {
	let { text, dueDate } = action;
	return {
		id: Math.random(),
		text,
		dueDate
	}
}

const removeById = (state =[], id) => {
	const reminders = state.filter(reminder => reminder.id !== id);
	console.log('new reduced reminders', reminders);
	return reminders;
}

const reminders = (state = [], action) => {
	let reminders = null;
	state = read_cookie('reminders');

	switch(action.type) {
		case ADD_REMINDER:
			reminders = [...state, reminder(action)]; //spread operator - copy content of one arry or object to another array or object
			bake_cookie('reminders', reminders); //to add to cookies
			return reminders;
		case DELETE_REMINDER:
			reminders = removeById(state, action.id);
			bake_cookie('reminders', reminders); // to show updated array of reminders
			return reminders;
		case CLEAR_REMINDERS:
			reminders = [];
			bake_cookie('reminders', reminders);
			return reminders;
		default:
			return state;
	}
}

export default reminders;