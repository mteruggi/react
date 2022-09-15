

import Menu from '../menu/Menu';

import '../header/Header.scss';

function Header() {
    return (
        <header className="App-header">
       
            <Menu Id="top-menu" menuId="menu-id"/>
        </header>
    );
}

export default Header;