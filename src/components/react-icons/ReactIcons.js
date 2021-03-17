// npm install react-icons
import React from 'react';
import { IconContext } from 'react-icons';
import { GiAbstract018 } from 'react-icons/gi';
import { ImOffice } from 'react-icons/im';

function ReactIcons() {
  return (
    <IconContext.Provider value={{ color: 'blue', size: '3rem' }}>
      <div>
        <GiAbstract018 />
        <ImOffice />
        {/* <GiAbstract018 color='purple' size='10rem' />
        <ImOffice color='purple' size='10rem' /> */}
      </div>
    </IconContext.Provider>
  );
}

export default ReactIcons;
