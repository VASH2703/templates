import { useState, Children } from 'react';
import classNames from 'classnames';
import menu from './menu.module.css';
import tab from './tab.module.css';

import { TabsProps, MenuProps, ContentProps } from './tabs.types';



export const Tabs = ({titles, children, positionMenu}: TabsProps) => {

    const [active, setActive] = useState(0);

    const positionMap = {
        top: "horizontal" as const,
        left: "vertical" as const,
        right:"vertical" as const,
        bottom: "horizontal" as const
    };

    const menuClasses = classNames(
        tab.container, 
        {[tab.vert]: !positionMenu || positionMenu === "top" || positionMenu === "bottom"}
    );

    return (
        <div className={menuClasses}>
            {(!positionMenu || positionMenu === "left" || positionMenu === "top") && 
                <Menu
                    titles={titles}
                    active={active}
                    setActive={setActive}
                    orientation={positionMap[positionMenu!] || "horizontal"}
                /> }
            {Children.toArray(children).map((child, index) => ( 
                <div 
                    className={classNames(tab.view, { [tab.active]: active===index})} 
                    id = {index.toString()}
                    key = {titles[index]+' page'}
                >
                   {child}
               </div>
                ))}
            {(positionMenu === "right" || positionMenu === "bottom") && 
                <Menu
                    titles={titles}
                    active={active}
                    setActive={setActive}
                    orientation={positionMap[positionMenu!] || "horizontal"}
                /> }
        </div>
    );
};

export const Menu = ({titles, active, setActive, orientation}:MenuProps) => { ///

    const orientationMap = {
        vertical: menu.vertical,
        horizontal: menu.horizontal
    };

    const classesMenu = classNames(
        menu.block,
        menu.underline, 
        orientationMap[orientation!] || menu.horizontal
    );

    return (
        <div className={classesMenu}>
                {titles.map((item, index) => ( 
                    <div 
                        onClick={() => setActive(index)}
                        className={classNames(menu.link, {[menu.active]: active===index})}
                        id={index.toString()}
                        key={item}
                        tabIndex={0}
                    >
                        {item}
                    </div>
                ))}
            </div>
    );
}

export const ContentBlock = ({children}: ContentProps) => {
   
    return (
        <div className={tab.content}>
            {children}
            <div style={{clear: "both"}}></div>
        </div> 
    );
};