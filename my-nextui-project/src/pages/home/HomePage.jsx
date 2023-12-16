import styles from './HomePage.module.css';

import { Navbar, 
        NavbarBrand, 
        NavbarContent, 
        NavbarItem, 
        
        Link, 
        Button, 
        
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
                    <input className={styles.searchBar} type="text" placeholder="Search for a paper"/>
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