import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

// FontAwesome structural imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 1. Import Solid Icons individually
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

// 2. Import Brand Icons individually
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faDeviantart } from '@fortawesome/free-brands-svg-icons'
import { faTrello } from '@fortawesome/free-brands-svg-icons'
import {faBootstrap} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'


// 3. Register icons into the library
library.add(
  faBars,
  faTimes,
  faPaw,
  faCoffee,
  faDiscord,
  faInstagram,
  faDeviantart,
  faTrello,
  faHome,
  faBootstrap,
  faGithub,
)

// Import global Bootstrap stylesheets
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)

// Compatibility configuration layer
app.config.compilerOptions.compatConfig = {
  MODE: 2 
}

// Bind FontAwesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(BootstrapVue)

app.mount('#app')
