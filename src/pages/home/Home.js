import BannerPageHome from "./bannerPageHome/BannerPageHome"
import NextLaunches from "./nextLaunches/NextLaunches"
import LastLaunches from "./lastLaunches/LastLaunches"
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