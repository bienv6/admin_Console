import React   from 'react';
import TopBar  from "./components/TopBar";
import SideBar from "./components/SideBar";
import "./App.css"

function App () {
	return (
		<div className="App">
			<TopBar/>
			<div className='container'>
				<SideBar/>
				<div className='others'> other pages </div>
			</div>
		</div>
	);
}

export default App;
