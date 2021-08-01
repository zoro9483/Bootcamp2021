import AOS from 'aos'
import 'aos/dist/aos.css'

new Vue({
    render: (h) => h(App),
    mounted() {
      AOS.init()
    },
  }).$mount('#app')
  