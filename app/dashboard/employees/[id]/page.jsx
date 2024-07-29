import styles from "@/app/ui/dashboard/employees/singleEmployee/singleEmployee.module.css"
import Image from "next/image"

const SingleEmployee = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src="/noavatar.png" alt="emloyee" fill/>
                </div>
                Shehani Perera
            </div>
            <div className={styles.formContainer}>
                <div className={styles.form}>
                <label>Full Name</label>
                <input type="text" name="name" placeholder="Shehani Perera"/>

                <label>Gender</label>
                <input type="text" name="email" placeholder="shehani@gmail.com"/>
                
                <label>Role</label>
                <input type="text" name="role" placeholder="Cashier"/>
                
                <label>Email Address</label>
                <input type="email" name="email" placeholder="shehani@gmail.com"/>

                <label>Phone Number</label>
                <input type="number" name="pnumber" placeholder="1234567890"/>

                <label>Bank Number</label>
                <input type="number" name="bname" placeholder="1212 1212 1212 1212"/>

                <label>Status</label>
                <input type="text" name="status" placeholder="Active"/>

                <label>Started Date</label>
                <input type="date" name="date" placeholder="12/12/2024"/>

                <label>Address</label>
                <input type="text" name="adress" placeholder="Kururnegala, Sri Lanka"/>

                <button type="submit">Update</button>
                </div>
                
            </div>
        </div>
    )
}
export default SingleEmployee