module.exports = {
  env: {
    REACT_APP_API_KEY: 'AIzaSyDUogV5vcMC8-D2E3_EcalVuHIWlv1c3LQ',
    REACT_APP_AUTH_DOMAIN : 'juanstreet-30221.firebaseapp.com',
    REACT_APP_DATABASE_URL: 'https://juanstreet-30221.firebaseio.com',
    REACT_APP_PROJECT_ID: 'juanstreet-30221',
    REACT_APP_STORAGE_BUCKET: 'juanstreet-30221.appspot.com',
    REACT_APP_ID: '1:911814488992:web:976f12222ba784534a6ac5',
    REACT_APP_MEASURE : 'G-5D8840DNRG'
  },
  trailingSlash: true,
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/dashboard': { page: '/Dashboard' }
    };
  }
}