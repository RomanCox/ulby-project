import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import Modal from 'shared/ui/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalPropsType {
    className?: string,
    isOpen: boolean,
    onClose: () => void,
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalPropsType) => (
    <Modal
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <LoginForm />
    </Modal>
);
