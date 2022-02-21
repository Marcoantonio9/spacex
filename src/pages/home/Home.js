import BannerPageHome from "../../components/bannerPageHome/BannerPageHome"
import NextLaunches from "../../components/nextLaunches/NextLaunches"
import LastLaunches from "../../components/lastLaunches/LastLaunches"
import Rockets from "../../components/rockets/Rockets"

const Home = () => {
  return(
    <div>
      <BannerPageHome />
      <NextLaunches />
      <LastLaunches />
      <Rockets />
    </div>
  )
}

export default Home