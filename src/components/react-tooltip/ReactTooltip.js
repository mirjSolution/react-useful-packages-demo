// npm i @tippyjs/react
import React, { forwardRef } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const ColoredTooltip = () => {
  return <span style={{ color: 'yellow' }}>Colored Component</span>;
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First line</div>
      <div>Second line</div>
    </div>
  );
});

function ReactTooltip() {
  return (
    <div>
      <div style={{ paddingBottom: '20px' }}>
        <Tippy
          arrow={false}
          delay={1000}
          placement={'right'}
          content='Basic Tooltip'
          theme={'tomato'}
        >
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<span style={{ color: 'orange' }}>Colored</span>}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<ColoredTooltip />}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <Tippy placement={'top-start'} content={<ColoredTooltip />}>
          <CustomChild />
        </Tippy>
      </div>
    </div>
  );
}

export default ReactTooltip;
