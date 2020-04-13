import React from 'react';
import './header.css';

const Header = ({fontSize, color, onMouseOver}) => <div
style={{color:color, fontSize:fontSize}}
onMouseOver={onMouseOver}
>
    <h1>Header</h1>
</div>

function MouseOver(){
    alert("mouse is over")
}

Header.defaultProps = {
    fontSize: 12,
    color:"#000", 
    onMouseOver:MouseOver
}

export default Header;



