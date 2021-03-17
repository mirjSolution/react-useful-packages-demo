import React from 'react';
import ReactPlayer from 'react-player';

// npm react-player
function ReactPlayerDemo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ReactPlayer
        width='480px'
        height='240px'
        controls
        url='https://www.youtube.com/watch?v=J0BPoofmPkw'
        onReady={() => console.log('onReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onEnded={() => console.log('onEnded callback')}
        onError={() => console.log('onError callback')}
      />
    </div>
  );
}

export default ReactPlayerDemo;
