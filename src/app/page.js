import React from 'react';

import BlogSummaryCard from '@/components/BlogSummaryCard';
import { getBlogPostList } from '@/helpers/file-helpers';

import styles from './homepage.module.css';

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {blogPosts.map(({ slug, title, abstract, publishedOn }) => (
        <BlogSummaryCard
          key={slug}
          slug={slug}
          title={title}
          abstract={abstract}
          publishedOn={publishedOn}
        />
      ))}
    </div>
  );
}

// const placeholder = (
//   <BlogSummaryCard
//     slug='example'
//     title='Hello world!'
//     abstract="This is a placeholder, an example which shows how the “BlogSummaryCard” component should be used. You'll want to swap this out based on the data from the various MDX files!"
//     publishedOn={new Date()}
//   />
// );

export default Home;
