import {HTMLAttributes, Ref } from "react";

declare const VALID_RESIZE_VALUES: readonly ["none","both", "horizontal", "vertical", "block", "inline", undefined];
declare type ResizeValue = typeof VALID_RESIZE_VALUES[number];
export interface InputProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>{
    title?: string;
    hint?: string;
    value?: string;
    disabled?: boolean;
    id?: string;
    name?: string;
    maxLines?: number;
    resize?: ResizeValue;
    className?: string;
    ref?: Ref<HTMLDivElement>;
  }

export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>{
    title?: string;
    hint?: string;
    values: string[];
    disabled?: boolean;
    id?: string;
    name?: string;
    index?: number;
    className?: string;
    ref?: Ref<HTMLDivElement>;
  }

export interface InputItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>{
    children: string;
    disabled?: boolean;
    checked?: boolean;
    name?: string;
    value?: string;
    onClick?: () => void;
    className?: string;
    ref?: Ref<HTMLDivElement>;
}

export interface RadioGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>{
    title?: string;
    values: string[];
    disabled?: boolean;
    name: string;
    index?: number;
    className?: string;
    ref?: Ref<HTMLDivElement>;
}

export interface CheckListProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>{
    title?: string;
    values: string[];
    disabled?: boolean;
    name?: string;
    selected?: boolean[];
    className?: string;
    ref?: Ref<HTMLDivElement>;
}


