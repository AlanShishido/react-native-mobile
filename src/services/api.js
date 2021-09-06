import axios from 'axios';

/**
 * BaseURL para react-native e SDK
 * iOS com Emulador: localhost
 * iOS com Celular Fìsico: máquina ifconfig
 * Android com Emulador: localhost - adb reverse tcp:3333 tcp:3333
 * Android com Emulador: 10.0.2.2 (android studio)
 * Android com Emulador: 10.0.3.2 (genymotion)
 * Android com Celular Físico: máquina ipconfig
 */

const api = axios.create({
  baseURL:'http://localhost:3333',
})

export default api;

