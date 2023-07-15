import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Script from 'next/script';

export default function Optimization() {
  return (
    <Layout>
      <Head>
        <title>SEO Optimization</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>NextJS Page Optimizations:</h1>
      <p>Information taken from <a href="https://nextjs.org/learn/basics/create-nextjs-app" target="_blank">NextJS tutorial.</a></p>
      <h2>Code Splitting and prefetching:</h2>
      <p>Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.</p>
      <p>Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!</p>
      <h2>Image Component and Image Optimization:</h2>
      <p>Next.js also has support for Image Optimization by default. This allows for resizing, optimizing, and serving images in modern formats like WebP when the browser supports it. This avoids shipping large images to devices with a smaller viewport. It also allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats.</p>
      <p>Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized.</p>
      <h2>Using the Image Component</h2>
      <p>Instead of optimizing images at build time, Next.js optimizes images on-demand, as users request them. </p>
      <p>Images are always rendered in such a way as to avoid Cumulative Layout Shift, a Core Web Vital that Google is going to use in search ranking.</p>
      <h2>Code Splitting:</h2>
      <h2>Code Splitting:</h2>
      <h2>Code Splitting:</h2>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}