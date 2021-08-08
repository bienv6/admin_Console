import React                                                                   from 'react';
import './Chart.styles.css'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';


const Chart = ({title, dataKey, data, grid}) => {
	return (
		<div className='chart'>
			<h3 className='chartTitle'>{title}</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					{grid && <CartesianGrid strokeDasharray="3 3"/>}
					<XAxis dataKey={dataKey}/>
					<Tooltip/>
					<Line type="monotone" dataKey="amt" stroke="#82ca9d"/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
