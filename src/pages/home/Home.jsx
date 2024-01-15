import Banner from "../../components/home/Banner"
import BannerFooter from "../../components/home/BannerFooter"
import BannerProductAds from '../../components/home/BannerProductAds';
import NewArrivals from './../../components/home/NewArrivals';


const Home = () => {
  return (
    <>
      <Banner />
      <BannerFooter />
      <BannerProductAds />
      <NewArrivals />
    </>
  )
}

export default Home
