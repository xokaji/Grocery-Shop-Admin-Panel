import  styles from '@/app/ui/dashboard/products/products.module.css'
import Link from "next/link"
import Image from "next/image"

import Search from "@/app/ui/dashboard/search/search"

const Products = () => {
    return(
        <div>
            <div className={styles.container}>
            <div className={styles.top}>
            <Search placeholder="Search for a product..."/>
            <Link href='products/add'>
                <button className={styles.addButton}>Add New</button>
            </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td>Category</td>
                        <td>Expired at</td>
                        <td>Price</td>
                        <td>Stock</td>
                        <td>Action</td>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noproduct.jpg" height={40} width={40} className={styles.userImage} alt="productImage"/>
                                Chocolate Biscuits
                            </div>
                        </td>
                        <td>Biscuits</td>
                        <td>09.08.2024</td>
                        <td>Rs 250/=</td>
                        <td>90</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href='/dashboard/products/test02'>
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>  
                        </td>
                    </tr>
                </tbody>
            </table>
           
        </div>
        </div>
    )
}

export default Products