import React from 'react';
import Layout from './src/components/Layout';
import { MainProvider } from './src/context/MainContext';


export function wrapPageElement({element, props}) {
    return (
        <MainProvider>
            <Layout {...props}>
                {element}
            </Layout>
        </MainProvider>
    )
}