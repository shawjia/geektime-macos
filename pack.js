const nativefier = require('nativefier').default;
const { version: appVersion } = require('./package.json');

const options = {
  name: 'GeekTime',
  targetUrl: 'https://account.geekbang.org/dashboard/buy',
  arch: 'x64',
  platform: 'darwin',
  appVersion,
  icon: './icon.png',
  out: './dist',
  overwrite: true,
  width: 720,
  height: 960,
  singleInstance: true,
  fileDownloadOptions: {
    saveAs: true
  }
};

nativefier(options, (err, appPath) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`saved to ${appPath}`);
});
