const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room', room)

    // const socketUrl = 'http://localhost:3000'
    const socketUrl = 'https://134.122.116.46:8081'
    const socketBuilder = new SocketBuilder({ socketUrl })

    const peerConfig = Object.values({
      id: undefined,
      config: {
        host: '134.122.116.46',
        port: 8082,
        secure: false
        // port: 9000,
        // host: 'localhost',
        // path: '/'
      }
    });
    const peerBuilder = new PeerBuilder(peerConfig);

    const view = new View()
    const media = new Media()
    const deps = {
      view,
      media, 
      room,
      socketBuilder,
      peerBuilder
    }

    Business.initialize(deps)
    
}

window.onload = onload