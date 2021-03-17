// npm install react-color

import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

function ReactColorPicker() {
  const [color, setcolor] = useState({ r: 0, g: 0, b: 0, a: 1 });
  const [showColorPicker, setshowColorPicker] = useState(false);
  const colorValue = [color];

  return (
    <div>
      <button
        onClick={() =>
          setshowColorPicker((showColorPicker) => !showColorPicker)
        }
      >
        {showColorPicker ? 'Close color picker' : 'Pick a color'}
      </button>
      {showColorPicker && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ChromePicker
            color={color}
            onChange={(updatedColor) => setcolor(updatedColor.rgb)}
          />
        </div>
      )}
      {colorValue &&
        colorValue.map((color) => (
          <div key={color.r}>
            <h1
              style={{
                color: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
              }}
            >
              CHANGE COLOR
            </h1>
          </div>
        ))}
    </div>
  );
}

export default ReactColorPicker;
