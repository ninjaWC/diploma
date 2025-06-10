import React from 'react';
import { ReactComponent as HomeIcon } from '../../assets/header/icons/home.svg';
import { ReactComponent as CommentsIcon } from '../../assets/header/icons/comments.svg';
import { ReactComponent as GraphIcon } from '../../assets/header/icons/graph.svg';
import { ReactComponent as CommunityIcon } from '../../assets/header/icons/community.svg';
import { ReactComponent as ChecksIcon } from '../../assets/header/icons/checks.svg';
import { ReactComponent as SettingsIcon } from '../../assets/header/icons/settings.svg';
// import { ReactComponent as LoginIcon } from '../../assets/main/icons/enter.png';

import { HomePage } from '../HomePage/HomePage.jsx';

import {useState, Link, Routes, Route} from 'react-router-dom';

export const Header = () => {
    return(
        <header className="header">
            <div className="header__inner">
                <nav className="header__navigation">
                    <li className="header__navigation-links">
                        <Link to="/"><HomeIcon/></Link>
                    </li>
                    <li className="header__navigation-links">
                        <Link to='/statistics'><GraphIcon></GraphIcon></Link>
                    </li>
                    <li className="header__navigation-links">
                        <Link to='/tasks'><ChecksIcon></ChecksIcon></Link>
                    </li>
                    {/* <li className="header__navigation-links">
                        <Link to='#'><CommunityIcon></CommunityIcon></Link>
                    </li>
                    <li className="header__navigation-links">
                        <Link to='#'><CommentsIcon></CommentsIcon></Link>
                    </li> */}
                </nav>
                
                <nav className="header__profile-settings">
                    <li className="header__profile-links">
                        <Link to='#'><SettingsIcon></SettingsIcon></Link>
                    </li>
                    <li className="header__profile-links">
                        {/* <Link to='#'><LoginIcon></LoginIcon></Link> */}
                    </li>
                </nav>
                <Routes>
                    <Route path="/homepage" element={<HomePage/>}/>
                </Routes>
            </div>
        </header>
    );
}

export default Header;