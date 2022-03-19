import React from 'react';
import styles from "../styles/Home.module.css";

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                Developed with ❤️  by{' '}
                <a
                    href="https://Bernardmasika.me"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Bernard Masika
                </a>
            </footer>
        </>
    );
};

export default Footer;