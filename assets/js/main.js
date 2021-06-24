import { attach, connect } from '../../store.js'
import App from '../../components/App.js'

const app = document.querySelector('#app')

attach(App, app)