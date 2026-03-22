import { exportPages } from 'next/dist/export/worker'
import styles from './bookingmenu.module.css'

export default function ReservationMenu(){
    return (
        <div className={styles.submenu}>
            <h1>Venue Booking</h1>
        </div>
    )
}