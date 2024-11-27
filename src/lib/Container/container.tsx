import { ContainerProps } from './container.types';
import style from './container.module.css';

export const Page = ({children, id}: ContainerProps) => {
    return (
        <div className={style.page} id={id}>
            {children}
        </div>
    );
}

export const Section = ({children, id}: ContainerProps) => {
    return (
        <div className={style.section} id={id}>
            {children}
        </div>
    );
}

export const Block = ({children, id}: ContainerProps) => {
    return (
        <div className={style.block} id={id}>
            {children}
        </div>
    )
}