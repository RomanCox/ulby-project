import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article';
import { addCommentFormActions } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { getAddCommentFormText } from '../../selectors/addCommentFormSelectors';

export const sendComment = createAsyncThunk<
    Comment,
    void,
    ThunkConfig<string>
>(
    'addCommentForm/sendComment',
    async (authData, thunkAPI) => {
        const {
            extra, dispatch, rejectWithValue, getState,
        } = thunkAPI;

        const userData = getUserAuthData(getState());
        const text = getAddCommentFormText(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article?.id,
                userId: userData?.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(addCommentFormActions.setText(''));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
