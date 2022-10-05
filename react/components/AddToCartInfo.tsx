import React from 'react'
import { useProduct } from 'vtex.product-context'
import {useOrderForm} from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'
import styles from "./styles.css"

const AddToCartInfo = ({blockClass}:{blockClass: string}) => {

    const container = generateBlockClass(styles.container, blockClass)
    const container_item = generateBlockClass(styles.container_item,blockClass)
    const image = generateBlockClass(styles.image,blockClass)
    const item_image = generateBlockClass(styles.item_image,blockClass)
    const item_info = generateBlockClass(styles.item_info,blockClass)
    const button_container = generateBlockClass(styles.button_container, blockClass)
    const button_link = generateBlockClass(styles.button_link, blockClass)
    const button = generateBlockClass(styles.button, blockClass)
    const  productInfo  = useProduct()

    const { orderForm: {
        items
    }}  = useOrderForm()

    console.log("Este producto tiene esta info",productInfo)

    return (
        <div className={container}>
        {items.map((item: any,index: number)=>{
            return(
                <div key={index} className={container_item}>
                   <div className={item_image}>
                    <img src={item.imageUrls.at1x} className={image}/> 
                   </div>
                   <div className={item_info}>
                    <p>{item.name}</p>
                    <p>${item.price/100}</p>
                    <p>Cant: {item.quantity}</p>
                   </div>
                </div>
            )
        })
        }
        <div>
            <p>Tenemos {items.length} items en tu compra</p>
        </div>

         <div className={button_container}>
            <div>
                <a href="/checkout/#/cart" className={button_link}> CHECK OUT</a>
            </div>
            <div>
                <a href="/construccion" className={button}> CONTINUAR COMPRANDO</a>
            </div>
            </div>
        </div>
    )
}
export default AddToCartInfo 