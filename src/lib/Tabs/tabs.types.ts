import { Ref, HTMLAttributes, ReactNode } from 'react';

declare const VALID_ORIENTATION_VALUES: readonly ["vertical", "horizontal", undefined];
declare type OrientationValue = typeof VALID_ORIENTATION_VALUES[number];

declare const VALID_POSITION_VALUES: readonly ["top", "left", "right","bottom"];
declare type positioValue = typeof VALID_POSITION_VALUES[number];

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>{
    titles: string[];
    children:ReactNode;
    positionMenu?: positioValue;
    className?: string;
    ref?: Ref<HTMLDivElement>;
}

export interface MenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>{
    titles: string[];
    active: number;
    setActive: (index: number) => void;
    orientation?: OrientationValue;
    className?: string;
    ref?: Ref<HTMLDivElement>;
}

export interface ContentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>{
    children: ReactNode;
    className?: string;
    ref?: Ref<HTMLDivElement>;
};