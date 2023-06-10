import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Ssup!!! Its yo boi John the rockstar dev. Project of myths, Creator of legends.]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section
        className={'${utilStyles.headingMd} ${utilStyles.padding1px}'}
      >
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id,date,title})=>(
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  };
}

// Server-side render for frequently updated data
// export async function getServerSideProps(context){
//   return {
//      props: {
        //props for your component
//      },
// };
//}

// Client side rendering - Data is fetched after page is rendered
// Next.js built a React hook called SWR for fetching data on clientside.
// It handles caching, validation, focus tracking, refetching on interval e.t.c
// e.g.
// import useSWR from 'swr';
// function Profile(){
//  const {data, error} = useSWR('/api/user',fetch);
//
//  if (error) return <div>failed to load</div>;
//  if (!data) return <div>loading...</div>;
//  return <div>hello {data.name}!</div>;
// }