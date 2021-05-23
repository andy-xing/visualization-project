console.log(window.Vue)

const Vue = window.Vue

import Demo from './Demo.vue'

Vue.config.productionTip = false

new Vue({
  data(){
   return{
    n:0
   } 
  },
  template:`
  <div class="red">
    {{n}}
    <button @click="add">+1</button>
  </div>
  `,
  methods:{
    add(){
      this.n += 1
    }
  }
}).$mount('#andy')
