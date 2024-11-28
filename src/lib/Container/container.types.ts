import {HTMLAttributes, ReactNode, Ref } from "react";

export interface ContainerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    children?: ReactNode;
    className?: string;
    ref?: Ref<HTMLDivElement>;
}