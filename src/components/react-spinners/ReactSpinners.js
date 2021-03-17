// npm install --save react-spinners
// npm install --save @emotion/react
import React from 'react';
import { css } from '@emotion/core';
import { BarLoader, BounceLoader, BeatLoader } from 'react-spinners';

const loaderCSS = css`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
`;

function ReactSpinnersDemo() {
  return (
    <div
      style={{
        paddingBottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <BounceLoader loading color={'red'} size={20} css={loaderCSS} />
      <BeatLoader loading color={'orange'} size={10} css={loaderCSS} />
      <BarLoader
        height={12}
        width={'20%'}
        color={'green'}
        css={loaderCSS}
        loading
      />
    </div>
  );
}

export default ReactSpinnersDemo;
