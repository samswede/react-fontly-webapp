import styles from './HomePage.module.css';

import React from "react";
import { Navbar, 
        NavbarBrand, 
        NavbarContent, 
        NavbarItem, 
        
        Link, 
        Button, 

        Select,
        SelectItem,
        
        Image } from '@nextui-org/react'



import Favicon from '../../assets/favicon.jpg';
import FontMapImage from './connected_papers_graph.png'


export default function HomePage() {
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
                <Select
                    label="Select a font"
                    placeholder="sans-serif"
                    className="max-w-xs"
                    >
                    <SelectItem>font style 1</SelectItem>
                    <SelectItem>font style 2</SelectItem>
                    <SelectItem>font style 3</SelectItem>
                    <SelectItem>font style 4</SelectItem>
                    <SelectItem>font style 5</SelectItem>
                    <SelectItem>font style 6</SelectItem>
                </Select>
                </div>
                <div className={styles.fontMapContainer}>
                    <Image 
                        src={FontMapImage} 
                        
                        />
                </div>
                <div className={styles.carouselContainer}>

                </div>
            </main>

        </main>
      
    </div>
    );
}