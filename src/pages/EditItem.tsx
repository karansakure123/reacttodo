import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import type { Item } from "../types/item.types"
import { useNavigate, useParams } from "react-router-dom"

const EditItem = () => {
     const { id } = useParams();

    const navigate = useNavigate();

    const [item, setItems] = useState<Item>({
        _id: " ",
        name: "",
        price: " ",
        description: " "
    })

    useEffect(() => {
        const getItems = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/items/${id}`);
                setItems(res.data.data)
            } catch (error: any) {
                toast.error(error)
            }
        }
        getItems();
    }
        , [id])


    const handleUpdate = async (e: React.FormEvent) => {

        e.preventDefault();
             try {
                const res:any = await axios.put(`http://localhost:5000/api/items/${id}`, item);
                navigate("/item")
                toast.success("updated successfully",res)
            } catch (error: any) {

                toast.error(error);
            }
    
    }


    return (
        <>
            <h1>edit item</h1>
            <form action="" onSubmit={handleUpdate}>
                <input type="text" value={item.name} onChange={(e) => { setItems({ ...item, name: e.target.value }) }} placeholder="name" className="bg-red-100" />
                <input type="text" value={item.price} onChange={(e) => { setItems({ ...item, price: e.target.value }) }} className="bg-red-100"  />

                <input type="text" value={item.description} onChange={(e) => { setItems({ ...item, description: e.target.value }) }} className="bg-red-100" />

  <button type="submit" >Submit</button>
            </form>

        </>
    )
}

export default EditItem