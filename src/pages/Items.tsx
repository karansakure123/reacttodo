import axios from "axios";
import { Delete, Edit, Plus, } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import type { Item } from "../types/item.types"
import { useNavigate } from "react-router-dom";

const Items = () => {
  const navigate = useNavigate();

  const [items, setItem] = useState<Item[]>([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const getData = await axios.get("http://localhost:5000/api/items/")
        setItem(getData.data.data);
        toast.success("items fetch");
      } catch (error: any) {
        setError(error);
        toast.error("failed to get data", error)
      }
    }
    fetchItems();
  }, [])


  const editHandle = (id: any) => {
    navigate(`/items/edit/${id}`)
  }

  const deleteHandler = async (id: String) => {

    try {

      const res: any = await axios.delete(`http://localhost:5000/api/items/${id}`);
      toast.success("successfully deleted", res)
      setItem(prev => prev.filter(item => item._id !== id))
    } catch (error: any) {

      toast.error(error)
    }
  }


  const addHandle = () => {
    navigate("/item/addnew")
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="heading p-3 m-3">
            <div className="text-2xl mb-5">
              Items
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {
              items.map((item) => (
                <div className="card m-2 p-3">
                  <div className="p-2">

                    <div className="add-new flex item-center justify-start px-2 ">
                      <h2>add new item</h2>
                      <Plus onClick={() => addHandle()} />
                    </div>
                    <div className="item-name">

                      <h1 key={item._id}> {item.name}</h1>
                    </div>
                    <div className="item-price">
                      <h1 key={item._id}> {item.price}</h1>
                    </div>
                    <div className="item-description">
                      <h1 key={item._id}> {item.description}</h1>
                    </div>
                  </div>
                  <div className="modify-items flex item-end justify-start  ">

                    <div>

                      <Edit className="text-blue-400" onClick={() => editHandle(item._id)} />
                      <Delete className="text-red-500 ml-6" onClick={() => deleteHandler(item._id)} />

                    </div>

                  </div>
                </div>
              ))
            }
            {error && <p className="text-red-400">{error}</p>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Items;