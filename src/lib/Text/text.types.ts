declare const VALID_ALING_VALUES: readonly ["start", "end", "center", "justify", undefined];
declare type AlingValue = typeof VALID_ALING_VALUES[number];

export interface TextProps {
  children: string;
  id?:string;
  style?: React.CSSProperties;
  textAling?: AlingValue;
}

export interface ImportantProps {
  title?: string;
  children: string;
  id?:string;
}