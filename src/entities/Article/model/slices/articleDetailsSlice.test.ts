import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';
import { ArticleType, ArticleBlock, ArticleBlockType } from '../types/article';
import { articleDetailsReducer } from '../slices/articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const blocks: ArticleBlock[] = [
    {
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'Заголовок этого блока',
        paragraphs: [
            'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
            'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        ],
    },
    {
        id: '2',
        type: ArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
        id: '3',
        type: ArticleBlockType.IMAGE,
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
    },
];

const data = {
    id: '1',
    title: 'Javascript news СВЕЖАЯ',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.04.2022',
    user: { id: '1', username: 'admin' },
    type: [
        ArticleType.IT,
    ],
    blocks,
};

describe('articleDetailsSlice.test', () => {
    test('fetch article by id pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: undefined,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('fetch article by id fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            error: undefined,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data, '', '1'),
        )).toEqual({
            isLoading: false,
            error: undefined,
            data,
        });
    });
});
