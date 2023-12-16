import styles from './HomePage.module.css';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image } from '@nextui-org/react'


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
                    <NavbarItem isActive>
                        <Link 
                            href="/about"
                            aria-current="about">
                            About
                        </Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Link 
                            href="/portfolio"
                            aria-current="portolio"
                            color="foreground">
                            Porfolio
                        </Link>
                    </NavbarItem>
                    
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem>
                    <Button as={Link} color="warning" href="/contact" variant="flat">
                        Contact
                    </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            {/* App starts here */}
            
        </main>
      
    </div>
    );
}