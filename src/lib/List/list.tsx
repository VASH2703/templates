import {OListProps, UListProps, LIProps} from './list.types';
import styles from './list.module.css';

export const ListOrder = ({children, ref, className, ...props}: OListProps) => {
    return (
        <ol className={`${styles.ordered} ${className || ''}`} ref={ref} {...props}>
            {children}
        </ol>
    );
};

export const ListUnorder = ({children, ref, className, ...props}:UListProps) => {
    return (
        <ul className={`${styles.unordered} ${className || ''}`} ref={ref} {...props}>
             {children}
        </ul>
    );
};

export const ListItem = ({children, ref, className, ...props}: LIProps) => {
    return (
        <li className={`${styles.item} ${className || ''}`} ref={ref} {...props}>
            {children}
        </li>
    );
};