
import {createStore, createLogger} from 'vuex'
import spots from './modules/spots'
import auth from './modules/users'


const debug = process.env.NODE_ENV !== 'production'


export default createStore({
  modules: {
    spots,
    auth
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})



