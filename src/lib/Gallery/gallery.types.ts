import { Ref, HTMLAttributes, ReactNode } from 'react';

export interface GalleryProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    children:ReactNode;
    className?: string;
    ref?: Ref<HTMLDivElement>;
}