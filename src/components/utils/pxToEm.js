import React from 'react';

function pxToEm(pxValue, baseFontSize) {
  const emValue = pxValue / baseFontSize;
  return `${emValue}em`;
}

export default pxToEm;
