import React, { useState, useEffect } from 'react';
import './Menu.scss';

function Menu(props) {

    //Top menu
    const footerMenuItems = [
        { label: 'Privacy Policy', url: 'www.google.com' },
        { label: 'Terms of Service', url: 'www.pancho.com' },
        { label: 'Site Map', url: 'www.yahoo.com' },
        { label: 'Cookie Policy', url: 'www.apple.com' },
        { label: 'Cookie Preferences', url: 'www.casa.com' },
        { label: 'Vulnerability Disclosure Policy', url: 'www.evento.com' }
    ]

    //Footer menu
    const topMenuItems = [
        { label: 'Our Services', url: 'www.google.com' },
        { label: 'Our Work', url: 'www.pancho.com' },
        { label: 'Stay Relevant', url: 'www.yahoo.com' },
        { label: 'About', url: 'www.apple.com' },
        { label: 'Careers', url: 'www.casa.com' },
        { label: 'Investors', url: 'www.evento.com' },
        { label: 'CONTACT US', url: 'www.evento1.com' }
    ]
    // const [topMenu, setTopMenu] = useState(false);


    const topMenu = props.menuId;

    const Menu = function () {
        if (topMenu) {
            return topMenuItems.map(function (item) {
                return <li><a key={item.label} href={item.url}>{item.label}</a></li>
            })
        } else {
            return footerMenuItems.map(function (item) {
                return <li><a key={item.label} href={item.url}>{item.label}</a></li>
            })
        }
    }


    return (
        <nav className="menu container" id={props.menuId}>


            
            <ul id={props.Id}>
            <Menu />

            </ul>
        </nav>
    );
};





export default Menu;