import { ReactElement, HTMLAttributes, Ref } from 'react';

/**
 * Props for the VideoContainer component.
 * @param children - The video, iframe or img element.
 * @param title - (Optional) The title of the video.
 * @param date - (Optional) The date of the video.
 * @param width - (Optional) The width of the container.
 * @param aspectRatio - (Optional) The aspect ratio (e.g., 16/9, 4/3, 1), required for iframe.
 * @param float - (Optional) The text wrapping media.
 */

declare const VALID_FLOAT_VALUES: readonly ["left", "right", "none", undefined];
declare type FloatValue = typeof VALID_FLOAT_VALUES[number];

export interface MediaProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>{
    children:ReactElement;
    title?:string;
    date?:string;
    width?:string;
    float?: FloatValue;
    aspectRatio?:number;
    className?: string;
    ref?: Ref<HTMLDivElement>;
};