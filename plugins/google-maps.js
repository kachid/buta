import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

const options = {
  load: {
    key: process.env.mapKey
  }
}
Vue.use(VueGoogleMaps, options)
