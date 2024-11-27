import {DropdownProps} from './dropdown.types';
import classNames from 'classnames';
import styles from './dropdown.module.css';

export const DropdownText = ({title, children, defaultStyle}: DropdownProps) => {
    return (
        <details className={styles.block}>
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