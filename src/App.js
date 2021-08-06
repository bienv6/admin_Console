import React   from 'react';
import TopBar  from "./components/TopBar";
import SideBar from "./components/SideBar";
import "./App.css"
import Home    from "./pages/home";

function App () {
	return (
		<div className="App">
			<TopBar/>
			<div className='container'>
				<SideBar/>
				<Home/>
			</div>
		</div>
	);
}

export default App;
