import {  useState } from "react"
import type { Item } from "../types/item.types"
import toast from "react-hot-toast"
import axios from "axios"
import { useNavigate } from "react-router-dom"
 


const CreateItem = () => {
    const navigate = useNavigate();
    const [item, setItem] = useState<Omit<Item,"_id">>(
        {
            
            name: " ",
            price: " ",
            description: ""
        }
    )


    const addItemHandle = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/items", item);
            toast.success("items is added successfully");
            navigate("/item")
        } catch (error: any) {
            toast.error("failed to add item", error)

        }

    }


    return (
        <>
            <h2>add new items here</h2>
            <div className="container">
                <div className="row">
                    <form action="" onSubmit={addItemHandle}>

                        <input type="text"    value={item.name}   placeholder="enter item name" onChange={((e)=>{setItem({...item, name:e.target.value})})}/>
                        <input type="number"   value={item.price}    placeholder="enter item price"  onChange={((e)=>{setItem({...item, price:e.target.value})})} />
                        <input type="text"   value={item.description}    placeholder="enter item description"   onChange={((e)=>{setItem({...item, description:e.target.value})})}/>
                        <button type="submit">Add item</button>

                    </form>
                </div>
            </div>


        </>
    )
}

export default CreateItem