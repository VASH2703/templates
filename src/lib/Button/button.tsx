import React from 'react';
import classNames from 'classnames';
import styles from './button.module.css';
import { ButtonProps } from './button.types';

export const Button = ({children, size, styleBtn, disabled, ref, className, ...props}: ButtonProps) => {

    const styleMap = {
        primary: styles.primary,
        secondary: styles.secondary,
        fillYellow: [styles.styleFilled, styles.colorYellow],
        whiteBorder: [styles.styleBordered, styles.colorWhite],
        iconButton: styles.icon
    };
    
    const sizeMap = {
        small: styles.sizeS,
        large: styles.sizeL 
    };

    const buttonClasses = classNames (
        styles.btn,
        sizeMap[size!] || styles.sizeS,
        styleMap[styleBtn!] || styles.primary,
        {
        [styles.disabled]: disabled,
        className: className
        }
    );
    
    return (
        <button
            className={buttonClasses}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
};