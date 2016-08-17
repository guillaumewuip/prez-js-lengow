
import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button.jsx';

ReactDOM.render(
    <Button click={() => alert('coucou')} />,
    document.querySelector('.js-test')
);

