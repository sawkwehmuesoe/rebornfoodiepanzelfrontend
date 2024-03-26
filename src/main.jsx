import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './index.css'
import './index.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

library.add(fas);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(


    <QueryClientProvider client={queryClient}>
        <BrowserRouter>

            <App />

        </BrowserRouter>
    </QueryClientProvider>



)
