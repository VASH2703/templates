import {DropdownProps} from './dropdown.types';
import classNames from 'classnames';
import styles from './dropdown.module.css';

export const DropdownText = ({title, children, defaultStyle, ref, className, ...props}: DropdownProps) => {
    return (
        <details className={`${styles.block} ${className || ''}`} ref={ref} {...props}>
            <summary className={classNames(styles.summary,{[styles.style]: !defaultStyle})}>
                {title}
            </summary>
			{typeof children === 'string' ? (
                    <p className={styles.text}>{children}</p>
                ) : (
                    children
                )}
        </details>
    );
};