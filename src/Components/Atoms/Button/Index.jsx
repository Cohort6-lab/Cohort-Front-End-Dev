import * as React from 'react';
import "./Button.css";


const Button = ({ href = "", className = "btn-component", onClick, children, 
IconFront, IconBack, className1 = "icon-front", className2, ...rest}) => {
    return (
        <a className = {className} href = {href} onClick = {onClick} {...rest}>
            <div className = {className1}>
                {IconFront}
            </div>
            <div>
                {children}
            </div>
            <div className = {className1}>
                {IconBack}
            </div>
        </a>
    );
};

export default Button;
