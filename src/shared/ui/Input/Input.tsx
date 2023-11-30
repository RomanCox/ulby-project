import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputPropsType = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputPropsType extends HTMLInputPropsType {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    readOnly?: boolean;
}

export const Input = memo((props: InputPropsType) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [carriagePosition, setCarriagePosition] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readOnly,
        ...otherProps
    } = props;

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCarriagePosition(e?.target?.selectionStart || 0);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCarriagePosition(e.target.value.length);
    };

    const mods: Mods = {
        [cls.readOnly]: readOnly,
    };

    const isCarriageVisible = isFocused && !readOnly;

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.carriageWrapper}>
                <input
                    ref={inputRef}
                    type={type}
                    onChange={onChangeHandler}
                    value={value}
                    className={cls.input}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    readOnly={readOnly}
                    {...otherProps}
                />
                {isCarriageVisible && (
                    <span
                        className={cls.carriage}
                        style={{ left: `${carriagePosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
});
