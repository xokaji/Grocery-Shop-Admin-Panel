import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"

const SingleProduct = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src="/noproduct.png" alt="product" fill/>
                </div>
                Chocolate Biscuit
            </div>
            <div className={styles.formContainer}>
                <div className={styles.form}>
                    
                <label>Product Name</label>
                <input type="text" name="name" placeholder="Chocolate Biscuit"/>

                <label>Category</label>
                <input type="text" name="lol" placeholder="Snacks"/>
                
                <label>Price</label>
                <input type="number" name="price" placeholder="Rs 240/="/>
                
                <label>Stocks</label>
                <input type="email" name="stocks" placeholder="90"/>

                <label>Expired at</label>
                <input type="number" name="pnumber" placeholder="12/12/2024"/>

                <label>Discounts (Optional)</label>
                <input type="number" name="discounts" placeholder=""/>

                <label>Description</label>
                <input type="text" name="des" placeholder="Very tasty biscuits"/>

                <button type="submit">Update</button>
                </div>
                
            </div>
        </div>
    )
}
export default SingleProduct