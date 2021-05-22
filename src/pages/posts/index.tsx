import Head from "next/head";
import Prismic from '@prismicio/client';
import { GetStaticProps } from "next";

import styles from "./styles.module.scss";
import { getPrismicClient } from "../../services/prismic";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>22 de maio de 2021</time>
            <strong>Creating a Monorepo with Lerna e Yarn Workspaces</strong>
            <p>
              In ths guide, you will learn hot to create a Monorepo to manage
              multiple packages with a shared build, test, and release process.
            </p>
          </a>
          <a href="#">
            <time>22 de maio de 2021</time>
            <strong>Creating a Monorepo with Lerna e Yarn Workspaces</strong>
            <p>
              In ths guide, you will learn hot to create a Monorepo to manage
              multiple packages with a shared build, test, and release process.
            </p>
          </a>
          <a href="#">
            <time>22 de maio de 2021</time>
            <strong>Creating a Monorepo with Lerna e Yarn Workspaces</strong>
            <p>
              In ths guide, you will learn hot to create a Monorepo to manage
              multiple packages with a shared build, test, and release process.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    // todos os documentos do prismic que o tipo for publication
    // criado no dashboard do prismic
    [Prismic.predicates.at('document.type', 'publication')],
    { 
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    }

  );

  // mostrando todo o conteúdo do response em json
  // mostrado no console do next
  console.log(JSON.stringify(response, null, 2));

  return { 
    props: {

    }
  }

}