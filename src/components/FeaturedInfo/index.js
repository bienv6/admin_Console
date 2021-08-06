import React         from 'react';
import {ArrowUpward, ArrowDownward} from "@material-ui/icons";
import './featuredInfo.styles.css'

const FeaturedInfo = () => {
	return (
		<div className='featured'>
			<div className='featuredItem'>
				<span className='featuredTitle'>Revenue</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'> 5,623</span>
					<span className='featuredRate'>-10.65 <ArrowDownward className='featuredIcon'/></span>
				</div>
				<span className='featuredSub'>Compared to last month </span>
			</div>
			<div className='featuredItem'>
				<span className='featuredTitle'>Sales</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'> 5,623</span>
					<span className='featuredRate'>-10.65 <ArrowUpward className='featuredIcon negative'/></span>
				</div>
				<span className='featuredSub'>Compared to last month </span>
			</div>
			<div className='featuredItem'>
				<span className='featuredTitle'>Cost</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'>5,623</span>
					<span className='featuredRate'>-10.65 <ArrowDownward className='featuredIcon'/></span>
				</div>
				<span className='featuredSub'>Compared to last month </span>
			</div>
		</div>
	);
};

export default FeaturedInfo;
