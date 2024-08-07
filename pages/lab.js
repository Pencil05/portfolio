import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function home(){
    return(
        <>
            <Head>
            <title>POOH</title>

                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/smile.png" />
            </Head>

            <main >
                <div className={`${styles.ehe}`}>
                    <nav className={`${styles.nav}`}>
                    <Link href={"/"}>
                    <div className={`${styles.logo}`}></div>
                    </Link>
                        <div className={`${styles.navi}`}>
                            <Link href={"/"} className={`${styles.links}`}>
                            <div className={`${styles.linknav1}`}>Home</div>
                            </Link>
                            <Link href={"about"} className={`${styles.links}`}>
                            <div className={`${styles.linknav2}`}>About</div>
                            </Link>
                            <Link href={"lab"} className={`${styles.links}`}>
                            <div className={`${styles.linknav3}`}>MyLab</div>
                            </Link>
                        </div>
                    </nav>

                    <div className={`${styles.top}`}>
                        <h1>Pooh's Lab</h1>
                        <p>this is my 
                        performance that you can play</p>
                    </div>

                    <div className={`${styles.bigblock}`}>
                        <Link href={'https://jarskin.netlify.app/'}className={`${styles.nondec}`} >
                        <div className={`${styles.block}`}>
                            <div className={`${styles.blocktext}`}>
                            <h1>
                            Jarskin website project
                            </h1>
                            </div>
                        </div>
                        </Link>
                        <Link href={'https://drive.google.com/drive/folders/1ZQqy2PMc8btgQSPWgSMIVeVez1ZZN0uU?usp=sharing/'}>
                        <div className={`${styles.block1}`}>
                            <div className={`${styles.blocktext}`}>
                                <h1>
                                Helper Application
                                </h1>
                            </div>
                        </div>
                        </Link>
                        <Link href={'https://jarskin.netlify.app/'}>
                        <div className={`${styles.block2}`}>
                        <div className={`${styles.blocktext}`}>
                                <h1>
                                Kopcareon website project
                                </h1>
                            </div>
                        </div>
                        </Link>

                        <Link href={'https://drive.google.com/file/d/1nUo_ad5wIdWMS6HHFgQ5hic0rLnCn0H8/view?usp=drivesdk'}>
                        <div className={`${styles.block3}`}>
                        <div className={`${styles.blocktext}`}>
                                <h1>
                                Fortune Application
                                </h1>
                            </div>
                        </div>
                        </Link>
                        <Link href={'https://jarskin.netlify.app/'}>
                        <div className={`${styles.block4}`}>
                        <div className={`${styles.blocktext}`}>
                                <h1>
                                Roblox MydeerObby
                                </h1>
                            </div>
                        </div>
                        </Link>
                        <Link href={'https://jarskin.netlify.app/'}>
                        <div className={`${styles.block5}`}>
                        <div className={`${styles.blocktext}`}>
                                <h1>
                                MydeerObby website
                                </h1>
                            </div>
                        </div>
                        </Link>
                    </div>


                </div>
            </main>
        
        </>
    );

}