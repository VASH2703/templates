import {HTMLAttributes, Ref } from "react";

declare const VALID_ALING_VALUES: readonly ["start", "end", "center", "justify", undefined];
declare type AlingValue = typeof VALID_ALING_VALUES[number];

export interface TextProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  children: string;
  textAling?: AlingValue;
  className?: string;
  ref?: Ref<HTMLDivElement>;
}

export interface ImportantProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>{
  title?: string;
  children: string;
  className?: string;
    ref?: Ref<HTMLDivElement>;
}