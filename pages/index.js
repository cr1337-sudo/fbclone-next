import Head from "next/head";
import Header from "../components/Header/Header";
import Login from "../components/Auth/Login";
import Sidebar from "../components/Main/Sidebar";
import Feed from "../components/Feed/Feed";
import Widgets from "../components/Feed/FeedWidgets";
import { getSession } from "next-auth/react";
import { db } from "../firebase";

export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  //GET the user
  //getSession busca dentro del context los datos del usuario
  //SI no los encuentra retorna NULL
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();
  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  return {
    props: {
      session,
      posts: docs,
    },
  };
}
