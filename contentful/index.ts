import { createClient } from 'contentful';

export const client = createClient({
    space: 'xwzmvkto3a4a', // TODO CONTENTFUL_SPACE_ID need transfer to .env
    accessToken: 'HVxbrdxX8b1tYq5YXPlN54GeDKlljDRTOy2z_CJeFF4', // TODO need transfer to .env
});
