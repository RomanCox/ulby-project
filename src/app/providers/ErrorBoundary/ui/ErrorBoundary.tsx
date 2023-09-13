import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import PageError from 'widgets/PageError/ui/PageError';

interface ErrorBoundaryPropsType {
    children: ReactNode;
}

interface ErrorBoundaryStateType {
    hasError: boolean;
}

class ErrorBoundary
    extends React.Component<ErrorBoundaryPropsType, ErrorBoundaryStateType> {
    constructor(props: ErrorBoundaryPropsType) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        console.log(error, info.componentStack);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
