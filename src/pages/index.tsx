import type { NextPage } from 'next'
import Head from 'next/head'

import Toolbar from '@mui/material/Toolbar'

import Counter from '../features/counter/Counter'
import styles from '../styles/Home.module.css'
import Bar from '../components/Bar'
import Editor from '../components/Editor'

const IndexPage: NextPage = () => {


    return (
      <div>
          <Head>
            <title>Koodiapuri</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Bar />
            <Editor />
        </header>
      </div>
    )
}

export default IndexPage
