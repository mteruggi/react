import logo from './../../logo.svg';

import './Functions.scss';

function Functions() {

}

setTimeout(function () {
    function logoCheck() {
        const selector = document.getElementById("menu-id")
        if (selector) {
            selector.innerHTML += `<img src=${logo} style='height:40px; margin-right:auto' className="App-logo" alt="logo" />`
        } else {
            
        }

    };
    logoCheck();
}, 2000);
export default Functions;

