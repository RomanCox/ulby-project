import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticlesView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticlesView;
}
