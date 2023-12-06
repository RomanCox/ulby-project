import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    Array<Comment>,
    string | undefined,
    ThunkConfig<string>
>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, ThunkAPI) => {
        const { extra, rejectWithValue } = ThunkAPI;

        try {
            const response = await extra.api.get<Array<Comment>>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            if (!articleId) {
                return rejectWithValue('error');
            }

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
