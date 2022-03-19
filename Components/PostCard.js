import React from 'react';
import styles from "../styles/Home.module.css";
import Link from 'next/link'

const PostCard = ({ posts}) => {
    return (
        <>
            <Link href={`/posts/${posts.id}`}>
                <a  className={styles.card}>
                    <h2>{posts.title} </h2>
                    <code>{posts.Description}</code>
                </a>
            </Link>
        </>
    );
};

export default PostCard;