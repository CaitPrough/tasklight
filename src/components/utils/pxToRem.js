import React from 'react';

function pxToRem(pxValue) {
  const baseFontSize = 16; // Define your base font size here
  const remValue = pxValue / baseFontSize;
  return `${remValue}rem`;
}

export default pxToRem;
