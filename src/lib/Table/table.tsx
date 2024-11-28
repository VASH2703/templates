import { useState } from 'react';
import styles from './table.module.css';
import classNames from 'classnames';

import { TableProps } from './table.types';

  
export const Table = ({ id, data, columns, rows, sortable, noStriped, colCount, ref, className, ...props }: TableProps) => {
    const length = colCount || columns?.length || data[0].length;
    const [active, setActive] = useState(Array(length).fill(0)); // состояния столбцов 0(без), 1(по возростанию), 2(по убыванию)
    const [order, setOrder] = useState(Array(length).fill(null)); //порядок сортировки (стек)
    const [number, setNumber] = useState(Array(length).fill(null)); //отображение стека в интерфейсе
    const [sortedData, setSortedData] = useState(data);

    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            Sort(index,event.ctrlKey);
        }
    } 
    
    const handleClick = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
        Sort(index,event.ctrlKey);
    };

    const Sort = (index: number, multi: boolean) => { //multi - мультисортировка

        {/* работа с массивами */}
        const newActive = [...active];
        const newOrder = Array(length).fill(null);
        const x = newActive[index] < 2 ? newActive[index]+1 : 0;
        let j = 0;
        if (!multi) {
            newActive.fill(0); //очищение состояний
        }
        else {
            for (let i = 0; i < length; ++i) { //перенос стека
                if (order[i] != null && order[i] != index) {
                    newOrder[j] = order[i];
                    ++j;
                }
                else {
                    if (order[i] === null) {
                        break;
                    }
                }
            }
        }
        newOrder[j] = x !== 0 ? index : null; //добавление элемента в стек
        newActive[index] = x; //изменение состояния столбца

        const newNumber = Array(length).fill(null); //изменение порядка в интерфейсе
        for (let i = 0; i < length; ++i) {
            if (newOrder[i] !== null) {
                newNumber[newOrder[i]] = i+1;
            }
            else {
                break;
            }
        }
        setOrder(newOrder); //обновление массивов
        setActive(newActive);
        setNumber(newNumber);

        {/* сортировка */}
        j = 0;
        const newSortedData = [...sortedData];
        newSortedData.sort((a, b) => { //построчное сравнение
            let res = Compare(j, newOrder, a, b, newActive);
            return res;
        });
        setSortedData(newSortedData);

    }

    type RowData = { [key: string]: any; }
    const Compare = (sortNumber: number, sortSet: typeof order, a: RowData, b: RowData, des: typeof active) : number => {
       
        const sortCol = sortSet[sortNumber]; //столбец сортирвки
        const valueA = a[sortCol]; //значения для сравнения
        const valueB = b[sortCol];

        if (valueA < valueB) {
            return des[sortCol] === 1 ? -1 : 1; // Сортировка по возрастанию
          } else if (valueA > valueB) {
            return des[sortCol] === 1 ? 1 : -1; // Сортировка по убыванию
          }  {
            if (sortNumber+1 < length && sortSet[sortNumber+1] !== null) { //рекурсия если мультисортировка и одинаковые значения
                return Compare(sortNumber + 1, sortSet, a, b, des);
            }
            else {
                return 0;
            }
          }
    }

    const headClasses = (colIndex: number) => classNames({
        [styles.th]: true,
        [styles.thCol]: true,
        [styles.sortable]: sortable,
        [styles.active]: active[colIndex] > 0,
        [styles.descend]: active[colIndex] === 1
    });

    const trClasses = classNames({[styles.striped]: !noStriped});

    const cellClasses = (cellIndex: number) => classNames({
        [styles.th]:true,
        [styles.thRow]: rows && cellIndex === 0
    });

    return (
    <table id = {id} className={`${styles.table} ${className || ''}`} ref={ref} {...props}>
        {(columns) && (
            <thead>
                <tr id={((id) ? id+' ' : '')+(-1)}> 
                {columns.map((title,columnIndex) => (
                    <th 
                        tabIndex={0} //доступность с клавиатуры
                        scope="col"
                        id={((id) ? id+' ' : '')+(-1) + ' ' + columnIndex} 
                        key={((id) ? id+' ' : '')+(-1) + ' ' + columnIndex}
                        className={headClasses(columnIndex)} 
                        onClick={sortable ? (event) =>handleClick(columnIndex, event) : ()=>{}}
                        onKeyDown={sortable ? (event) =>handleKeyDown(columnIndex, event) : ()=>{}}
                        data-sort-number={number[columnIndex]} //для отображения порядка сортировки
                    >
                        {title}
                    </th>
                ))}
                </tr>
            </thead>
        )}
        <tbody>
            {sortedData.map((row, rowIndex) => (
                <tr 
                    className={trClasses}
                    id={((id) ? id+' ' : '') + rowIndex}
                    key = {((id) ? id+' ' : '') + rowIndex}
                >
                    {row.map((cell, cellIndex) => (
                        <th 
                            id={((id) ? id+' ' : '') + rowIndex + " " + cellIndex}
                            key={((id) ? id+' ' : '') + rowIndex + " " + cellIndex}
                            scope={rows && cellIndex === 0 ? "row" : ""}
                            className={cellClasses(cellIndex)}
                        >
                            {cell}
                        </th>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
    );
};