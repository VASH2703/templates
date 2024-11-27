import { ReactNode, Children } from 'react';
import photo from './photo.module.css';
import video from './video.module.css';

export interface GalleryProps {
  children:ReactNode;
}

export const PhotoGallery = ({children}: GalleryProps) => {
    return (
        <div className={photo.gallery}>
            {Children.map(children, (child) => (
                <div className={photo.item}>{child}</div>
            ))}
        </div>
    );
};

export const VideoGallery = ({children}: GalleryProps) => {
    return (
        <div className={video.gallery}>
            {children}
        </div>
    );
};
