import React from 'react';

import Login from './Login/container/loginContainer';
import Main from './Main/container/main';



const routes = [
    { 
        component: App,
        routes: [
            { 
                path: '/login',
                component: Login
            },
            { 
                path: '/main',
                component: Main
            }
        ]
    }
]