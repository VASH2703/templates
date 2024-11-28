import { Children } from 'react';
import {GalleryProps} from './gallery.types';
import photo from './photo.module.css';
import video from './video.module.css';


export const PhotoGallery = ({children, ref, className, ...props}: GalleryProps) => {
    return (
        <div className={`${photo.gallery} ${className || ''}`} ref={ref} {...props}>
            {Children.map(children, (child) => (
                <div className={photo.item}>{child}</div>
            ))}
        </div>
    );
};

export const VideoGallery = ({children, ref, className, ...props}: GalleryProps) => {
    return (
        <div className={`${video.gallery} ${className || ''}`} ref={ref} {...props}>
            {children}
        </div>
    );
};
