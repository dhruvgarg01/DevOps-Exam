module.exports = {
    server: {
        port: process.env.PORT || 3000,
        // Changed to 0.0.0.0 so your browser can actually reach it
        hostname: process.env.HOSTNAME || '0.0.0.0', 
    },
    database: {
      // Changed to use the environment variable, or fallback to the 'mongo' container
      url: process.env.MONGODB_URI || 'mongodb://admin:password@mongo:27017',
      name: 'icecream'
    }
  };