import { createStore } from 'vuex'

export default createStore({
  state: {
    center: { lat: null, lng: null },
    markers: [
      {
        place: 'Abuela Rosa',
        position: {
          lat: 29.10145, lng: -110.97639
        },
      },
      {
        place: 'Casa Angel',
        position: {
          lat: 29.05774, lng: -110.97315
        },
      }
    ],
    paths: [
      { lat: 29.10145, lng: -110.97639 },
      { lat: 29.05774, lng: -110.97315 },
  ],
  },
  getters: {
  },
  mutations: {
    setLocation(state, payload) {
      state.center.lat = payload.latitude
      state.center.lng = payload.longitude
    }
  },
  actions: {
    getLocation({ commit }) {
      navigator.geolocation.getCurrentPosition(position => {
        const coords = position.coords;
        commit('setLocation', coords)
      })
    }
  },
  modules: {
  }
})
