import { memo, useCallback } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { Button, ButtonTheme } from '../Button/Button';

import cls from './Code.module.scss';

interface CodePropsType {
    className?: string;
    text: string;
}

export const Code = memo((props: CodePropsType) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
