import React                                                                  from 'react';
import { Wrapper, Bar, Logo, IconsContainer, TopIconBadge, TopRight, Avatar } from './TopBar.styles';
import {NotificationsNone, Settings, Language} from "@material-ui/icons";
import ducati                                  from '../../Images/ducati.jpg'


function TopBar () {
	return (
		<Bar>
			<Wrapper >
				<div className='topLeft'>
					<Logo>
						<p>BienCorp</p>
					</Logo>
				</div>
				<TopRight >
					<IconsContainer>
						<NotificationsNone/>
						<TopIconBadge>2</TopIconBadge>
					</IconsContainer>
					<IconsContainer>
						<Language/>
						<TopIconBadge>2</TopIconBadge>
					</IconsContainer>
					<IconsContainer>
						<Settings/>
						<TopIconBadge>2</TopIconBadge>
					</IconsContainer>
					<Avatar src={ducati} alt='ducati-avatar'/>

				</TopRight>
			</Wrapper>
		</Bar>

	);
}

export default TopBar;
