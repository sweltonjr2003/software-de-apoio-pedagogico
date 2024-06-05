import { createApp } from 'vue'
import './globals.scss'

import 'primevue/resources/themes/aura-light-amber/theme.css'

import { router } from './router'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Menubar from 'primevue/menubar'
import RadioButton from 'primevue/radiobutton'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)

app.component('Button', Button)
app.component('Card', Card)
app.component('InputText', InputText)
app.component('Menubar', Menubar)
app.component('RadioButton', RadioButton)

app.mount('#app')
