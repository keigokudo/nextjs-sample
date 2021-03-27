import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import utilStyles from "../../styles/utils.module.css";

const name = "keigo";
export const siteTitle = "Sample Website";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="sample website" content="just scribbling next.js" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/image/profile.jpeg"
              className={utilStyles.borderCircle}
              width="144"
              height="144"
              alt="profile picture"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/image/profile.jpeg"
                  className={utilStyles.borderCircle}
                  width="144"
                  height="144"
                  alt="profile picture"
                />
              </a>
            </Link>

            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
