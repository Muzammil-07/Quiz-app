import React, { useState } from 'react';
import Mcqs from './Mcqs';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate
} from "react-router-dom";
import Navbar from './Navbar';
import Answer from './Answer';

export default function App() {



	return (
	<Router>
	<Routes>
			<Route path ='/'element={<Mcqs/>} />
			<Route path ='/Answer'element={<Answer/>} />
				
		</Routes>
	</Router>

	);
}