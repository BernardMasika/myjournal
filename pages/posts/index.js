import React from 'react';
import NavBar from "../../Components/NavBar";
import Poststyles from '../../styles/posts.module.scss'
import PostCard from "../../Components/PostCard";
import axios from "axios";
import styles from '../../styles/Home.module.css'


const Index = ({posts}) => {
    return (
        <>
            <div>
                <div className={Poststyles.container}>
                    <NavBar/>

                    <div style={{ marginTop: 10}}>
                        <div className={styles.grid}>
                            {posts.data.map((post) => {
                                return <PostCard posts={post} key={post.id}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        ;
};

export default Index;

export async function getServerSideProps() {
    const PostRes = await axios.get("https://lr6cs0jv.directus.app/items/post/")

    // console.log('the res', PostRes.data.data)
    return {
        props: {
            posts: PostRes.data
        },
    }
}