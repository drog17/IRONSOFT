import Hero from './Components/Hero/Hero'
import What from './Components/What/What'
import Case from '../Home/Components/Case/Case'
import Blog from '../Home/Components/Blog/Blog'
import Approach from './Components/Approach/Approach'
import WebDev from './Components/WebDev/WebDev'
import DevProd from './Components/DevProd/DevProd'
import Stack from '../About/Components/Stack/Stack'
const Web = () => {
  return (
    <div>
      <Hero/>
      <What/>
      <Approach/>
      <WebDev/>
      <Case/>
      <DevProd/>
      <Stack/>
      <Blog/>
    </div>
  )
}

export default Web
