const peer = require('peer');

peer.PeerServer({
  port: 3001,
  path: '/',
  key: 'peerjs',
});