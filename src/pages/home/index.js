import React        from 'react';
import './home.styles.css'
import FeaturedInfo from "../../components/FeaturedInfo";
import Chart        from "../../components/charts";
import { data }     from "../../dummyData";

const Home = () => {
	return (
		<div className='home'>
			<FeaturedInfo/>
			<Chart title='User Analytics' data={data} grid dataKey='amt'/>
			<div className='homeWidgets'>home widgets</div>
		</div>
	);
};

export default Home;
