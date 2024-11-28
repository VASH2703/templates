import { Ref, HTMLAttributes, ReactElement } from 'react';

export interface OListProps extends Omit<HTMLAttributes<HTMLOListElement>, 'className'> {
    children:ReactElement[]; 
    className?: string;
    ref?: Ref<HTMLOListElement>;
}

export interface UListProps extends Omit<HTMLAttributes<HTMLUListElement>, 'className'> {
    children:ReactElement[]; 
    className?: string;
    ref?: Ref<HTMLUListElement>;
}

export interface LIProps extends Omit<HTMLAttributes<HTMLLIElement>, 'className'> {
    children:string;
    className?: string;
    ref?: Ref<HTMLLIElement>;
}