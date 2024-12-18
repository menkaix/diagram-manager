// filepath: /c:/Users/mendrika/Documents/GitHub/diagram-manager/frontend/src/config.js
const backendUrl = process.env.REACT_APP_BACKEND_URL;
const config = {
  backendUrl: backendUrl || 'http://localhost:5000'
};

export default config;