import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

const Mycomponent = ()=>(
    <Image
     src="/Train1.png"
     alt='train'
     height={24}
     width={144}
    />
);
export default function FirstPost(){
    return (
        <Layout>
        <Head>
            <title>first page</title>
        </Head>
        <Script 
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy='lazyOnload'
            onLoad={() =>
                console.log("script loaded correctly, window.FB loaded")
            }
        ></Script>
        <h1>First Post</h1>
        <Mycomponent></Mycomponent>
        <h2>
            <Link href="/">Back to Home</Link>
        </h2>
        </Layout>
    );
}