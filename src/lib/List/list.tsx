import {ListProps, ItemProps} from './list.types';
import styles from './list.module.css';

export const ListOrder = ({children}: ListProps) => {
    return (
        <ol className={styles.ordered}>
            {children}
        </ol>
    );
};

export const ListUnorder = ({children}:ListProps) => {
    return (
        <ul className={styles.unordered}>
             {children}
        </ul>
    );
};

export const ListItem = ({children}: ItemProps) => {
    return (
        <li className={styles.item}>{children}</li>
    );
};