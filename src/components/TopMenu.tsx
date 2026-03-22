import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

export default async function TopMenu() {
    
    const session = await getServerSession();

    return (
        <div className={styles.menucontainer}>
            
            <div className="flex items-center h-full px-4 text-cyan-600 mr-auto gap-4">
                {session ? (
                    <Link href="/api/auth/signout">
                        <div>Sign-Out</div>
                    </Link>
                ) : (
                    <Link href="/api/auth/signin">
                        <div>Sign-In</div>
                    </Link>
                )}

                
                <Link href="/mybooking">
                    <div>My Booking</div>
                </Link>
            </div>

            
            <TopMenuItem title='Booking' pageRef='/booking'/>

            <Image 
                src={'/img/logo.png'} 
                className={styles.logoimg}
                alt='logo' 
                width={0} 
                height={0} 
                sizes='100vh'
            />
        </div>
    )
}