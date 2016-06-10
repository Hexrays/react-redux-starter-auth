import React from 'react';
import { render } from 'react-dom';
import routes from './config/routes';

import css from './styles/main.scss';

render(routes, document.getElementById('app'));