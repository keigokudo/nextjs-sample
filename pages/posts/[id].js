import Layout from "../../components/Layout";
import { getAllPostsIds, getPostData } from "../../lib/post";

export default function Post(props) {
  const { postData } = props;
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
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
  const postData = getPostData(params.id);

  return {
    props: {
      postData: postData,
    },
  };
}
