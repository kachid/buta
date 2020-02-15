import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDjtUq5pzSPBf7hMO_juXTRNZeYsfxDm4U',
    libraries: 'places'
  }
})
