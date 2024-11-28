import {Ref, HTMLAttributes, ReactNode} from 'react';

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDetailsElement>, 'className'> {
    title: string;  
    children: ReactNode;
    defaultStyle?: boolean;
    className?: string;
    ref?: Ref<HTMLDetailsElement>;
}
  