import {Form} from './components/Form.js'

const app = document.getElementById('regForm')

const formComponent = new Form()
formComponent.render(app)

const modeSwitch = document.getElementById('modeSwitch');
    modeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});