"use client"

import { signOut } from 'firebase/auth';
import styles from '../sidebar/sidebar.module.css'
import Menulinks from './menuLinks/menuLnks';
import Image from 'next/image';
import { auth } from '@/lib/firebase';

import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdStocks,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout


} from "react-icons/md";



const menuItems = [
    { 
      title: "Pages ",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        
        {
          title: "Employees",
          path: "/dashboard/employees",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        
      ],
    },
    {
      title: "Reports ",
      list: [
        {
          title: "Sales Reports",
          path: "/dashboard/sales",
          icon: <MdAnalytics /> ,
        },
        {
          title: "Salary Reports",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
        {
          title: "Supplier Reports",
          path: "/dashboard/supplier",
          icon:<MdWork /> ,
        },
        {
          title: "Stock Reports",
          path: "/dashboard/stocks",
          icon: <MdAnalytics />,
        },
      ],
    },
    {
      title: "User ",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
const Sidebar = ()=> {
    return(

        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50"/>
                <div className={styles.userDetails}>
                    <span className={styles.username}>Basura Thennakoon</span>
                    <span className={styles.usertitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key = {cat.title}>{cat.title}
                    <span className={styles.cat}>{cat.title}</span>
                    {cat.list.map(item=>(
                        <Menulinks item={item} key={item.title}/>
                    ))}
                    </li>   
                ))}
            </ul>
            <button className={styles.logout} onClick={()=>{
              signOut(auth)
              sessionStorage.removeItem('user')
            }}><MdLogout/> Logout</button>  
               
        </div>
    )
}

export default Sidebar