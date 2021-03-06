import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Post from '../components/post';
import Bio from '../components/bio';

const BlogIndex: React.FC<
  PageProps<GatsbyTypes.BlogIndexQuery>
> = ({ data, location }) => {
  const siteTitle =
    data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout>
        <SEO />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to
          "content/blog" (or the directory you specified for
          the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title={"All Posts"}/>
      <h2>All Posts</h2>
      <ol style={{ listStyle: `none` }}>
        {posts.map((post: any) => {
          return <Post post={post} class="post-summary" />;
        })}
      </ol>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          description
          tags
        }
      }
    }
  }
`;
