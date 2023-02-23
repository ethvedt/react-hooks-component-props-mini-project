import React from "react";

function Header({ name }) {
    return (
        <header className="header">
            <h1 className="name">{name}</h1>
        </header>
    )
}

export default Header;