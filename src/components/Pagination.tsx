import Link from "next/link";
import styles from "./Pagination.module.css";

type Props = {
    page: number;
    total: number;
    prevCount?: number;
    nextCount?: number;
    link: (page: number) => string;
};
const Pagination = ({
    page,
    total,
    prevCount = 2,
    nextCount = 2,
    link,
}: Props) => {
    const pages: number[] = [1];

    if (page - prevCount > 1) pages.push(0);

    for (
        let p = Math.max(2, page - prevCount);
        p <= Math.min(page + nextCount, total);
        p++
    )
        pages.push(p);

    if (page + nextCount < total) pages.push(0, total);

    return (
        <div className={styles.pagination}>
            {pages.map((p, i) =>
                p !== 0 ? (
                    p === page ? (
                        <div key={p} className={styles.link}>
                            {p}
                        </div>
                    ) : (
                        <Link key={p} href={link(p)} className={styles.link}>
                            {p}
                        </Link>
                    )
                ) : (
                    <div key={-i} className={styles.spacer}>
                        ...
                    </div>
                )
            )}
        </div>
    );
};

export default Pagination;
