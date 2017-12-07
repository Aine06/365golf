import Cache from '../common/js/cache.js'
import { Storage } from './config.js'

export default function hasToken() {
  if (process.env.NODE_ENV === 'production') {
    return Cache.cookie.get(Storage.TokenID) !== null
  } else return process.env.NODE_ENV === 'development'
}
