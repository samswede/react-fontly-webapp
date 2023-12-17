import styles from './HomePage.module.css';

import React from "react";
import { Navbar, 
        NavbarBrand, 
        NavbarContent, 
        NavbarItem, 
        
        Link, 
        Button, 
        
        Image } from '@nextui-org/react'

import SearchBar from '../../base/search/SearchBar';
import FontMap from './font_map/FontMap';

import Favicon from '../../assets/favicon.jpg';
import FontMapImage from './connected_papers_graph.png'


export default function HomePage() {
    //const [font, setFont] = React.useState(new Set([]));
    const [font, setFont] = React.useState(null);

    return (
        <div className="dark text-foreground bg-background">
        <main className={styles.mainContainer}>
            <Navbar
                shouldHideOnScroll
                position="sticky">
                <NavbarBrand>
                    <Image src={Favicon} width={30} height={30} />
                </NavbarBrand>

                <NavbarContent >
                    <NavbarItem>
                        <Link 
                            href="/about"
                            aria-current="about"
                            color="foreground">
                            About
                        </Link>
                    </NavbarItem>

                    <NavbarItem isActive>
                        <Link 
                            href="/home"
                            aria-current="about">
                            Home
                        </Link>
                    </NavbarItem>
                    
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem>
                    <Button as={Link} color="primary" href="/login" variant="flat">
                        Login
                    </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            {/* App starts here */}
            <main className={styles.secondContainer}>
                <div className={styles.searchContainer}>
                    {/* 
                    <SearchBar 
                        value={font}
                        setValue={setFont}/>
                    */}
                </div>
                <div className={styles.fontMapContainer}>
                    {/*}
                    <Image 
                        src={FontMapImage} 
                        
                        />
                    */}
                    <FontMap 
                        font={font}
                        setFont={setFont}/>
                </div>
                <div className={styles.carouselContainer}>

                </div>
            </main>

        </main>
      
    </div>
    );
}