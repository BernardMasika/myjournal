import React from 'react';
import Link from "next/link";
import style from './navbar.module.scss'
import {Image, List} from "semantic-ui-react";

const NavBar = () => {
    return (
        <>
         <nav className={style.container}>
            <div>
                <List link  animated size={'massive'}>
                    <List.Item icon='theme'
                               content={
                                   <Link href='/'>
                                       <a>Home</a>
                                   </Link>
                               }/>
                    <List.Item icon='list alternate'
                               content={
                                   <Link href='/posts'>
                                       <a>All Journals</a>
                                   </Link>
                               }/>
                </List>
            </div>

             <div>
                 <Image  src={'/articleProfile.png'} size={'tiny'} bordered rounded/>
             </div>
         </nav>
        </>
    );
};

export default NavBar;