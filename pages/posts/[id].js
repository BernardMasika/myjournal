import React from 'react';
import axios from "axios";
import Poststyles from "../../styles/posts.module.scss";
import NavBar from "../../Components/NavBar";
import MarkdownIt from 'markdown-it'

const PostPage = ({ post}) => {
    const md = new MarkdownIt();
    const htmlContent = md.render(post.data.Body)
    return (
        <div className={Poststyles.container}>
            <NavBar/>
          <header>
              <article>
                  <h2>{post.data.title}</h2>
                  <p>{post.data.Description}</p>
              </article>
              <section dangerouslySetInnerHTML={{__html: htmlContent}}>
              </section>
          </header>
        </div>

    );
};

export default PostPage;

export async function getStaticProps({ params }) {
    const PostRes = await axios.get(`https://lr6cs0jv.directus.app/items/post/${params.id}`)
    console.log('single post', PostRes)

    return {
        props: {
            post: PostRes.data
        }
    }

}

export async function getStaticPaths() {
    const PostRes = await axios.get("https://lr6cs0jv.directus.app/items/post/")

    const paths = PostRes.data.data.map((post) => {
        return {params: { id: post.id.toString()}}
    });

    return {
        paths,
        fallback: false
    }
}
