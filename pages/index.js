import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from "axios";
import Link from 'next/link';
import {Button, Icon, Menu} from "semantic-ui-react";
import PostCard from "../Components/PostCard";
import React, {useEffect} from "react";

export default function Home({posts}) {
    const [latestPosts, setLatestPosts] = React.useState([]);

    useEffect(() => {
        // console.log('the posts,', posts)
        const reversedPoste = posts.data.reverse();
        setLatestPosts(reversedPoste.slice(0, 6));

    }, [posts])
    return (
        <div className={styles.container}>
            <Head>
                <title>My Journals</title>
                <meta name="description" content="journal to get your day started"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="#">My Journal</a>
                </h1>

                <p className={styles.description}>
                    <code className={styles.code}>
                        My names are Prof. Lujamo Kalista. i am Security Researcher, Senior Lecture,
                        and a Writer. is dummy text used in laying out print,
                        graphic or web designs.
                    </code>
                </p>

                <div style={{ margin: '2rem 0 2rem 0'}} className={styles.allPostHeader}>
                    <Menu pointing secondary style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Menu.Item
                            name='Starting from the Latest journals'
                            active
                            className={styles.menuItem}
                        />
                        <Menu.Menu position='right'>
                            <Menu.Item
                                content={
                                    <Link href={'/posts'}>
                                        <Button animated primary style={{background: '#0070f3'}}>
                                            <Button.Content visible>
                                                <div style={{minWidth: '80px'}}>
                                                    All Journals
                                                </div>
                                            </Button.Content>
                                            <Button.Content hidden>
                                                <Icon name='arrow right'/>
                                            </Button.Content>
                                        </Button>
                                    </Link>}
                            />
                        </Menu.Menu>
                    </Menu>
                </div>

                <div className={styles.grid}>
                    {latestPosts.map((post) => {
                        return <PostCard posts={post} key={post.id}/>
                    })}
                </div>
            </main>


        </div>
    )
}

export async function getStaticProps() {
    const PostRes = await axios.get("https://lr6cs0jv.directus.app/items/post/")

    // console.log('the res', PostRes.data)
    return {
        props: {
            posts: PostRes.data
        },
    }
}