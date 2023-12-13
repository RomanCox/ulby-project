import { FC, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
    [reducerName in StateSchemaKey]?: Reducer<NonNullable<StateSchema[reducerName]>>;
}

interface DynamicModuleLoaderPropsType {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderPropsType> = (props) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    const {
        reducers,
        removeAfterUnmount = true,
        children,
    } = props;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();

        Object.entries(reducers).forEach(([reducerName, reducer]) => {
            const mounted = mountedReducers[reducerName as StateSchemaKey];
            if (!mounted) {
                store.reducerManager.add(reducerName as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${reducerName} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerName]) => {
                    store.reducerManager.remove(reducerName as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${reducerName} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
