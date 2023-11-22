import React, { Suspense } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import Modal from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalPropsType {
    className?: string,
    isOpen: boolean,
    onClose: () => void,
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalPropsType) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>

    </Modal>
);
