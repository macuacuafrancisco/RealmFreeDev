import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

const App = () =>
<Fragment>
            <StatusBar
                backgroundColor="transparent"
                translucent 
                barStyle='light-content'
               />
          
           <Routes />
</Fragment>;

export default App;
