import { useState } from 'react';
import styles from './input.module.css';
import { InputProps, SelectProps, InputItemProps, RadioGroupProps, CheckListProps} from './input.types'

export const TextInput = ({title, hint, maxLines, disabled, value, onChange, id, name, resize}: InputProps) => {
    
    return (
        <div className={styles.block}>
            {title && <div className={styles.title}>{title}</div>}
            {maxLines === 1 ? 
             (<input type="text" className={styles.input}
                id={id}
                name={name}
                placeholder={hint}
                disabled={disabled}
                value={value}
                onChange={(event) => onChange?.(event.target.value)}
                style={resize ? {resize: resize} : {}}
             />)            :
            (<textarea className={styles.textarea}
                id={id}
                name={name}
                placeholder={hint}
                disabled={disabled}
                rows={maxLines}
                value={value}
                onChange={(event) => onChange?.(event.target.value)}
                style={resize ? {resize: resize} : {}}
            />)}
        </div>
    );
};

export const Select = ({title, hint, disabled, values, id, name, index}: SelectProps) => {

    return (
        <div className={styles.block}>
            <div className={styles.title}>
                {title}
            </div>
            <select 
                id={id}
                name={name}
                disabled={disabled ? true : false}
                className={styles.select}
            >
                {hint && (<option value='' selected disabled hidden className={styles.option}>
                    {hint}
                </option>)}
                {values.map((item, itemIndex) => (
                    <option className={styles.option} value={item} selected={index === itemIndex}>
                        {item}
                    </option>
                ))}
              </select>
          </div>
    );
};



export const RadioItem = ({children, disabled, checked, name, value, onClick}: InputItemProps) => {

    return (
        <div className={styles.radioBlock} onClick={onClick}>
            <input
                type="radio"
                value={value || children}
                name={name}
                disabled={disabled}
                checked={checked}
                className={styles.radio}
            />
            <label className={styles.radioLabel}> {children} </label>
        </div>
    );
};



export const RadioGroup = ({title, values, disabled, index, name}: RadioGroupProps) => {

    const [checked, setChecked] = useState(index || -1);

    const handleClick = (index: number) => {
        setChecked(index);
    }

    return (
        <div className={styles.block}>
            {title && <div className={title}>{title}</div>}
            {values.map((item, index) => (
                    <RadioItem
                        disabled={disabled}
                        name={name}
                        checked={checked === index ? true : false}
                        onClick={!disabled ? () => handleClick(index) : () => {}}
                    >
                        {item}
                    </RadioItem>
                ))}
        </div>
    );
};



export const CheckBox = ({children, disabled, checked, name, value, onClick}: InputItemProps) => {

    return (
        <div className={styles.checkboxBlock} onClick={onClick}>
            <input
                type="checkbox"
                value={value || children}
                name={name}
                disabled={disabled}
                checked={checked}
                className={styles.checkbox}
            />
            <label className={styles.checkboxLabel}>{children}</label>
        </div>  
    );
};



export const CheckList = ({title, values, disabled, selected, name}: CheckListProps) => {

    const length = values.length;
    const [select, setSelect] = useState(selected || Array(length).fill(false));

    const handleClick = (index: number) => {
        const newSelect = [...select];
        newSelect[index] = !newSelect[index];
        setSelect(newSelect);
    }

    return (
        <div className={styles.block}>
            {title && <div className={styles.title}>{title}</div>}
            {values.map((item, index) => (
                    <CheckBox
                        disabled={disabled}
                        name={name}
                        checked={select[index]}
                        onClick={!disabled ? () => handleClick(index) : () => {}}
                    >
                        {item}
                    </CheckBox>
                ))}
        </div>
    );
};
