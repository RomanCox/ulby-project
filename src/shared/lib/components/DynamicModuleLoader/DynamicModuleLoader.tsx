import { FC, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
    [reducerName in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

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
        Object.entries(reducers).forEach(([reducerName, reducer]: ReducersListEntry) => {
            store.reducerManager.add(reducerName, reducer);
            dispatch({ type: `@INIT ${reducerName} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerName]: ReducersListEntry) => {
                    store.reducerManager.remove(reducerName);
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
