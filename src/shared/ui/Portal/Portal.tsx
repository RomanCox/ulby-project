import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalPropsType {
    children: ReactNode;
    element?: HTMLElement;
}

const Portal = (props: PortalPropsType) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};

export default Portal;
