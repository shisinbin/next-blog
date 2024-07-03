import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import BlogHero from '@/components/BlogHero';
import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';

async function BlogPost({ params }) {
  const {
    frontmatter: { title, publishedOn },
    content,
  } = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={publishedOn} />
      <div className={styles.page}>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

/*
const placeholder = (
  <article className={styles.wrapper}>
    <BlogHero title='Example post!' publishedOn={new Date()} />
    <div className={styles.page}>
      <p>This is where the blog post will go!</p>
      <p>
        You will need to use <em>MDX</em> to render all of the
        elements created from the blog post in this spot.
      </p>
    </div>
  </article>
);
*/

export default BlogPost;
