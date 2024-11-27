import { ReactNode } from 'react';
declare const VALID_ORIENTATION_VALUES: readonly ["vertical", "horizontal", undefined];
declare type OrientationValue = typeof VALID_ORIENTATION_VALUES[number];

declare const VALID_POSITION_VALUES: readonly ["top", "left", "right","bottom"];
declare type positioValue = typeof VALID_POSITION_VALUES[number];

export interface TabsProps{
    titles: string[];
    children:ReactNode;
    positionMenu?: positioValue;
}

export interface MenuProps{
    titles: string[];
    active: number;
    setActive: (index: number) => void;
    orientation?: OrientationValue;
}

export interface ContentProps {
    children: ReactNode;
};