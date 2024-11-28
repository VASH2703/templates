import { ContainerProps } from './container.types';
import style from './container.module.css';

export const Page = ({children, ref, className, ...props}: ContainerProps) => {
    return (
        <div className={`${style.page} ${className || ''}`} ref={ref} {...props} >
            {children}
        </div>
    );
}

export const Section = ({children, ref, className, ...props}: ContainerProps) => {
    return (
        <div className={`${style.section} ${className || ''}`} ref={ref} {...props}>
            {children}
        </div>
    );
}

export const Block = ({children, ref, className, ...props}: ContainerProps) => {
    return (
        <div className={`${style.block} ${className || ''}`} ref={ref} {...props}>
            {children}
        </div>
    )
}