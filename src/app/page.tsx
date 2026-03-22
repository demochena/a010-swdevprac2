import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import CardPanel  from "@/components/CardPanel";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner/>
        <div style={{
          margin:"20px",
          display:"flex",
          flexDirection:"row",
          flexWrap:"wrap",
          alignContent: "space-around",
          justifyContent:"space-around",

        }}>
        </div>
      </main>
      
    </div>
  );
}
