import { useRef, useEffect } from 'react';

import media from './media.module.css';
import {MediaProps} from './media.types';

export const Media = ({children, title, date, float, width, aspectRatio}: MediaProps) => {
    const refContent = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (refContent.current && aspectRatio) {
            const ratio = aspectRatio;
            refContent.current.style.setProperty('--aspect-ratio', `${ratio}`);
        }
    }, [aspectRatio]);

    const floatMap = {
        left: media.left,
        right: media.right,
        none: '' as const,
    };

    return (
        <div className={floatMap[float!]||''} style={{width: width}}>
            <div className={media.content} ref={refContent}>
                {children}
            </div>
            {(title) && (<div className={media.name}>{title}</div>)}
            {(date) && (<div className={media.date}>{date}</div>)}
        </div>
    );
};
