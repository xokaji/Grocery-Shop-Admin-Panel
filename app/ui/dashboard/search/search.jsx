"use client";

import styles from "@/app/ui/dashboard/search/search.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const handleSearch = (e) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", 1);

        if (e.target.value) {
            e.target.value.length > 2 ? params.set("q", e.target.value) : params.delete("q");
        } else {
            params.delete("q");
        }
        router.replace(`${pathName}?${params}`);
    };

    return (
        <div className={styles.container}>
            <MdSearch />
            <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
        </div>
    );
};

export default Search;
