import React                               from 'react';
import {
	LineStyle,
	Timeline,
	TrendingUp,
	People,
	Storefront,
	AttachMoney,
	Equalizer,
	Mail,
	Feedback, Forum, Work, BarChart
} from "@material-ui/icons";
import './SideBar.styles.css'

const SideBar = () => {
	return (
		<div className='sideBar'>
			<div className='sideBarWrapper'>
				<div className='sideBarMenu'>
					<h3 className='sideBarTitle'>Dashboard</h3>
					<ul className='sideBarList'>
						<li className='sideBarListItem active'><LineStyle className='sideBarIcon'/> Home</li>
						<li className='sideBarListItem'><Timeline className='sideBarIcon'/> Analytics</li>
						<li className='sideBarListItem'><TrendingUp className='sideBarIcon'/> Sales</li>
					</ul>
				</div>
				<div className='sideBarMenu'>
					<h3 className='sideBarTitle'>Quick Menu</h3>
					<ul className='sideBarList'>
						<li className='sideBarListItem'><People className='sideBarIcon'/> Users</li>
						<li className='sideBarListItem'><Storefront className='sideBarIcon'/> Products</li>
						<li className='sideBarListItem'><AttachMoney className='sideBarIcon'/> Transactions</li>
						<li className='sideBarListItem'><Equalizer className='sideBarIcon'/> Reports</li>
					</ul>
				</div>
				<div className='sideBarMenu'>
					<h3 className='sideBarTitle'>Notifications</h3>
					<ul className='sideBarList'>
						<li className='sideBarListItem '><Mail className='sideBarIcon'/> Mail</li>
						<li className='sideBarListItem'><Feedback className='sideBarIcon'/> FeedBack</li>
						<li className='sideBarListItem'><Forum className='sideBarIcon'/> Messages</li>
					</ul>
				</div>
				<div className='sideBarMenu'>
					<h3 className='sideBarTitle'>Staff</h3>
					<ul className='sideBarList'>
						<li className='sideBarListItem'><Work className='sideBarIcon'/> Manage</li>
						<li className='sideBarListItem'><Timeline className='sideBarIcon'/> Analytics</li>
						<li className='sideBarListItem'><BarChart className='sideBarIcon'/> Sales</li>
					</ul>
				</div>

			</div>
		</div>
	);
};

export default SideBar;
