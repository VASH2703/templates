import {ReactNode} from 'react';

declare const VALID_SIZE_VALUES: readonly ["small", "large", undefined];
declare type SizeValue = typeof VALID_SIZE_VALUES[number];

declare const VALID_STYLE_VALUES: readonly ["primary", "secondary", "fillYellow", "whiteBorder", "iconButton", undefined];
declare type StyleValue = typeof VALID_STYLE_VALUES[number];
  
export interface ButtonProps {
    children: ReactNode;
    size?: SizeValue;
    styleBtn?: StyleValue;
    disabled?: boolean;
    onClick?: () => void;
  }