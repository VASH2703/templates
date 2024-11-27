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

export const TitlePage = ({children, id, style, textAling}: TextProps) => {
    return (
        <h1 className={`${head.page} ${textAling ? alingMap[textAling] : ''}`} style={style} id={id} >
            {children}
        </h1>
    );
};

export const TitleSection = ({children, id, style, textAling}: TextProps) => {
    return (
        <h2 className={`${head.section} ${textAling ? alingMap[textAling] : ''}`} style={style} id={id} >
            {children}
        </h2>
    );
};

export const TitleBlock = ({children, id, style, textAling}: TextProps) => {
    return (
        <h3 className={`${head.block} ${textAling ? alingMap[textAling] : ''}`} style={style} id={id} >
            {children}
        </h3>
    );
};

export const TitleSmall = ({children, id, style, textAling}: TextProps) => {
    return (
        <h4 className={`${head.small} ${textAling ? alingMap[textAling] : ''}`} style={style} id={id} >
            {children}
        </h4>
    );
};

export const Text = ({children, id, style, textAling}: TextProps) => {
    return (
        <div className={`${text.text} ${textAling ? alingMap[textAling] : ''}`} style={style} id={id} >
            {children}
        </div>
    );
};

export const Paragraph= ({children, id, style, textAling}: TextProps) => {
    return (
        <p className={`${text.paragraph} ${textAling ? alingMap[textAling] : ''}`} style={style} id={id} >
           {children}
        </p>
        
    );
};

export const Quote = ({children, id}: TextProps) => {
   
    return (
        <div className={quote.block}  id={id} >
              <div className={`${quote.text} ${text.text}`}>
                {children}
              </div>
        </div>
    );
};

export const Important = ({title, children, id}: ImportantProps) => {
   
    return (
        <div className={important.block} id={id}>
            <h2 className={`${important.title} ${head.section}`}>{title}</h2>
            <div className={`${important.text} ${text.text}`}>
                {children} 
            </div>
      </div>
    );
};