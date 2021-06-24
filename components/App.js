import html from '../core.js'
import { connect } from '../store.js'

let index = 0

function App({ cars }) {

	const carList = [
		'Rolls-Royce',
		'Mercedes-Benz',
		'Land Rover',
		'Bentley',
		'Lexus',
		'Jaguar',
		'BMW',
		'Audi',
		'Porsche',
		'Maserati',
		'Lamborghini Veneno',
		'Koenigsegg CCXR Trevita'
	]

	function addCar() {
		index++
		if(index < carList.length) {
			return carList[index-1]
		}
		else {
			return 'undefined'
		}
	}

	return html`
		<ul>
			${cars.map(car => `<li>${car}</li>`)}
		</ul>

		<button type="button" onclick="dispatch('ADD', '${addCar()}')">Add Car</button>
	`
}

export default connect(state => ({
	cars: state.cars,
}))(App)