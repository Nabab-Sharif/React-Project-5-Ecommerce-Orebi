import List from "./utilities/List"
import ListItem from "./utilities/ListItem"

const CategoriesMenu = () => {
  return (
    <>
      <div className="w-[263px] bg-[#262626] absolute left-0 mt-5">
        <List className="">
          <ListItem className="font-dm text-[14px] font-medium leading-normal text-[rgba(255,255,255,0.70)] hover:text-white  transition-all duration-400 capitalize py-4 pl-5 border-b-[1px] border-[#2D2D2D] cursor-pointer hover:pl-[30px] hover:font-bold last:border-[transparent] " text="Accesories" />
          <ListItem className="font-dm text-[14px] font-normal leading-normal text-[rgba(255,255,255,0.70)] hover:text-white  transition-all duration-400 capitalize py-4 pl-5 border-b-[1px] border-[#2D2D2D] cursor-pointer hover:pl-[30px] hover:font-bold last:border-[transparent] " text="Electronice" />
          <ListItem className="font-dm text-[14px] font-normal leading-normal text-[rgba(255,255,255,0.70)] hover:text-white  transition-all duration-400 capitalize py-4 pl-5 border-b-[1px] border-[#2D2D2D] cursor-pointer hover:pl-[30px] hover:font-bold last:border-[transparent] " text="Clothes" />
          <ListItem className="font-dm text-[14px] font-normal leading-normal text-[rgba(255,255,255,0.70)] hover:text-white  transition-all duration-400 capitalize py-4 pl-5 border-b-[1px] border-[#2D2D2D] cursor-pointer hover:pl-[30px] hover:font-bold last:border-[transparent] " text="Bags" />
          <ListItem className="font-dm text-[14px] font-normal leading-normal text-[rgba(255,255,255,0.70)] hover:text-white  transition-all duration-400 capitalize py-4 pl-5 border-b-[1px] border-[#2D2D2D] cursor-pointer hover:pl-[30px] hover:font-bold last:border-[transparent] " text="Home appliances" />
          <ListItem className="font-dm text-[14px] font-normal leading-normal text-[rgba(255,255,255,0.70)] hover:text-white  transition-all duration-400 capitalize py-4 pl-5 border-b-[1px] border-[#2D2D2D] cursor-pointer hover:pl-[30px] hover:font-bold last:border-[transparent] " text="Furniture" />
        </List>
      </div>
    </>
  )
}

export default CategoriesMenu
