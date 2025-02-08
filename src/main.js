import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap'
import AOS from 'aos'

import App from './App.vue'
import router from './router'

const app = createApp(App)

AOS.init({
  useClassNames: true,
  initClassName: false,
  once: true,
  animatedClassName: 'animate__animated',
  // animatedClassName: 'animated',
})
AOS.refresh() // 強制重新偵測 DOM 變更

app.use(createPinia())
app.use(router)

app.mount('#app')
