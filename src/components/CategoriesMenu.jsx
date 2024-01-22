import { useEffect, useState } from "react"
import List from "./utilities/List"
import ListItem from "./utilities/ListItem"
import axios from 'axios'


const CategoriesMenu = () => {
  let [categoryData, setCategoryData] = useState();

  useEffect(() => {
    let response = async () => {
      let getData = await axios.get('https://dummyjson.com/products/categories')
      setCategoryData(getData.data)
    }
    response();
  }, [])



  return (
    <>
      <div className="w-[263px] bg-[#262626] absolute left-0 mt-5 z-30">
        <List className="h-[500px] overflow-y-scroll">

          {categoryData?.map((item, index) => (

            <ListItem key={index} className="font-dm text-[14px] font-medium leading-normal text-[rgba(255,255,255,0.70)] hover:text-white  transition-all duration-400 capitalize py-4 pl-5 border-b-[1px] border-[#2D2D2D] cursor-pointer hover:pl-[30px] hover:font-bold last:border-[transparent] " text={item} />

          ))

          }
        </List>
      </div>
    </>
  )
}

export default CategoriesMenu
