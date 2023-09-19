import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './content'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<Content />
		</BrowserRouter>
	</Provider>
)
