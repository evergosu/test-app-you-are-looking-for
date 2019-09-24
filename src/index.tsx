import React from 'react';
import ReactDom from 'react-dom';

import Application from './application/application';

function main(): void {
  const root = document.getElementById('root');

  ReactDom.render(<Application />, root);
}

main();
