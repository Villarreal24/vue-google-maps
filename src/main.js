import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App)
.use(store)
.use(router)
.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyD7aP2i12HKfV1nI0r-vp1PiSbIiPBWjcM',
    },
    autobindAllEvents: true,
})
.mount('#app')
