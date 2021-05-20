import { ReactChild, ReactElement } from "react";
import styles from '@/layouts/index.less'
import setRem from "@/utils/rem";
setRem({ maxRootSize: +Infinity });
export default function Tangerine({ children, ...props }: { children: React.ReactNode }) {



  return <div className={styles.layoutWrap}>
    <div className={styles.menu}></div>
    <div className={styles.main}>
      <div className={styles.header}></div>
      <div className={styles.container}>{children}</div>
    </div>

  </div>
}