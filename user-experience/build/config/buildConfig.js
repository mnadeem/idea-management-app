module.exports = {
  proxies: [{
    context: '/app1/path',
    host: 'xdev.www.xyz.com',
    port: 80,
    https: true
  }],
  paths: {
    reports: 'reports'
  }
};