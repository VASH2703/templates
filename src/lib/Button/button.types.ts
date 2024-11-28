import { ReactNode, HTMLAttributes, Ref } from 'react';

declare const VALID_SIZE_VALUES: readonly ["small", "large", undefined];
declare type SizeValue = typeof VALID_SIZE_VALUES[number];

declare const VALID_STYLE_VALUES: readonly ["primary", "secondary", "fillYellow", "whiteBorder", "iconButton", undefined];
declare type StyleValue = typeof VALID_STYLE_VALUES[number];
  
export interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'className'> {
    children: ReactNode;
    size?: SizeValue;
    styleBtn?: StyleValue;
    disabled?: boolean;
    className?: string;
    ref?: Ref<HTMLButtonElement>;
  }