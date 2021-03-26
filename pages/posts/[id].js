import Head from "next/head";
import Layout from "../../components/Layout";
import Date from "../../components/Date";
import { getAllPostsIds, getPostData } from "../../lib/post";
import utilStyles from "../../styles/utils.module.css";

export default function Post(props) {
  const { postData } = props;
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <br />
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <br />

        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData: postData,
    },
  };
}
