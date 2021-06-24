const init = {
	cars: ['BMW']
}


export default function reducer(state = init, action, args) {
	switch(action) {
		case 'ADD':
			if(args.includes('undefined')) return {...state}
			return {
				...state,
				cars: [...state.cars, args]
			}
			break

		default:
			return state
	}
}