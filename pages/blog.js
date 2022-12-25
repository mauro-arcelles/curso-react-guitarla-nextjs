import Layout from '../components/layout';
import Post from '../components/post';
import styles from '../styles/grid.module.css';

export default function Blog({ posts }) {
  console.log(posts);
  return (
    <div>
      <Layout title="Blog" description="Blog de música, ventas de guitarras, consejos, guitarLA">
        <main className="contenedor">
          <h1 className="heading">Blog</h1>
          <div className={styles.grid}>
            {
              posts?.map(post => (
                <Post key={post.id} post={post.attributes} />
              ))
            }
          </div>
        </main>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const { data: posts } = await res.json();

  return {
    props: {
      posts
    }
  };
}
