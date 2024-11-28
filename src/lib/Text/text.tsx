import {TextProps, ImportantProps} from './text.types';
import head from './title.module.css';
import text from './text.module.css';
import quote from './quote.module.css';
import aling from './aling.module.css';
import important from './important.module.css';

const alingMap = {
    start: aling.start,
    center: aling.center,
    end: aling.end,
    justify: aling.justify,
};

export const TitlePage = ({children, textAling, ref, className, ...props}: TextProps) => {
    return (
        <h1 className={`${head.page} ${textAling ? alingMap[textAling] : ''} ${className || ''}`} ref={ref} {...props} >
            {children}
        </h1>
    );
};

export const TitleSection = ({children, textAling, ref, className, ...props}: TextProps) => {
    return (
        <h2 className={`${head.section} ${textAling ? alingMap[textAling] : ''} ${className || ''}`} ref={ref} {...props} >
            {children}
        </h2>
    );
};

export const TitleBlock = ({children, textAling, ref, className, ...props}: TextProps) => {
    return (
        <h3 className={`${head.block} ${textAling ? alingMap[textAling] : ''} ${className || ''}`} ref={ref} {...props} >
            {children}
        </h3>
    );
};

export const TitleSmall = ({children, textAling, ref, className, ...props}: TextProps) => {
    return (
        <h4 className={`${head.small} ${textAling ? alingMap[textAling] : ''} ${className || ''}`} ref={ref} {...props} >
            {children}
        </h4>
    );
};

export const Text = ({children, textAling, ref, className, ...props }: TextProps) => {
    return (
        <div className={`${text.text} ${textAling ? alingMap[textAling] : ''} ${className || ''}`} ref={ref} {...props} >
            {children}
        </div>
    );
};

export const Paragraph= ({children, textAling, ref, className, ...props }: TextProps) => {
    return (
        <p className={`${text.paragraph} ${textAling ? alingMap[textAling] : ''} ${className || ''}`} ref={ref} {...props} >
           {children}
        </p>
        
    );
};

export const Quote = ({children, ref, className, ...props}: TextProps) => {
   
    return (
        <div className={`${quote.block} ${className || ''}`} ref={ref} {...props} >
              <div className={`${quote.text} ${text.text}`} >
                {children}
              </div>
        </div>
    );
};

export const Important = ({title, children, ref, className, ...props}: ImportantProps) => {
   
    return (
        <div className={`${important.block} ${className || ''}`} ref={ref} {...props}>
            <h2 className={`${important.title} ${head.section}`}>{title}</h2>
            <div className={`${important.text} ${text.text}`}>
                {children} 
            </div>
      </div>
    );
};