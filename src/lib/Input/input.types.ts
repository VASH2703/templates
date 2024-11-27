declare const VALID_RESIZE_VALUES: readonly ["none","both", "horizontal", "vertical", "block", "inline", undefined];
declare type ResizeValue = typeof VALID_RESIZE_VALUES[number];
export interface InputProps {
    title?: string;
    hint?: string;
    value?: string;
    disabled?: boolean;
    id?: string;
    name?: string;
    onChange?: (value: string) => void;
    maxLines?: number;
    resize?: ResizeValue;
  }

export interface SelectProps {
    title?: string;
    hint?: string;
    values: string[];
    disabled?: boolean;
    id?: string;
    name?: string;
    index?: number;
  }

export interface InputItemProps {
    children: string;
    disabled?: boolean;
    checked?: boolean;
    name?: string;
    value?: string;
    onClick?: () => void;
}

export interface RadioGroupProps {
    title?: string;
    values: string[];
    disabled?: boolean;
    name: string;
    index?: number;
}

export interface CheckListProps {
    title?: string;
    values: string[];
    disabled?: boolean;
    name?: string;
    selected?: boolean[];
}


