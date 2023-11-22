// import { strict as assert } from "assert"
// eslint-disable-next-line import/no-import-module-exports
import { createClient } from 'contentful-management';
// eslint-disable-next-line import/no-import-module-exports
import { EnvironmentGetter } from 'contentful-typescript-codegen';

// const { CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT } = process.env

// assert(CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN)
// assert(CONTENTFUL_SPACE_ID)
// assert(CONTENTFUL_ENVIRONMENT)

const getContentfulEnvironment: EnvironmentGetter = () => {
    // const contentfulClient = contentfulManagement.createClient({
    const contentfulClient = createClient({
        accessToken: 'CFPAT-6R_60bvUx3BhySTv0hN6aztAOE4fpkPLigxoaX2Y4bE', // TODO CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN need transfer to .env
    });

    return contentfulClient
        .getSpace('xwzmvkto3a4a') // TODO CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN need transfer to .env
        .then((space) => space.getEnvironment('master')); // TODO CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN need transfer to .env
};

module.exports = getContentfulEnvironment;
