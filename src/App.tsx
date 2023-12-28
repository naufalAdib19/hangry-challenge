import Navbar from "./components/organisms/Navbar"
import SideBar from "./components/organisms/Sidebar"
import { GlobalContext } from "./helper/context"
import { useContext, useEffect } from 'react'
import Banner from "./components/organisms/Banner"
import Card from "./components/molecules/Card"
import { arrOfObj } from "./helper/data"
import Partners from "./components/molecules/HangryPartners"
import Promo from "./components/organisms/Promo"

function App() {
  const { isNavbarActive } = useContext(GlobalContext);

  useEffect(() => {
    if(isNavbarActive) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }, [isNavbarActive])


  return (
    <div className="">
      <div className="navigation-user-section relative h-[68px] bg-red-500">
        <SideBar/>
        <Navbar/>
      </div>
      <div className="content-section">
        <div className="banner">
          <Banner/>
        </div>
        <div className="product lg:px-36 py-12 ">
          <h1 className="font-bold text-[#303030] text-2xl lg:text-4xl mb-2 px-5 lg:px-0">Hangry! adalah restorand dengan beragam brand</h1>
          <h2 className="text-[#707070] text-lg px-5 lg:px-0">Kami menyajikan beragam brand untuk menemani setiap waktu santapmu</h2>
          <div className="flex justify-center ">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-5 lg:px-0 mt-7 lg:mt-12 gap-y-5 lg:gap-y-12 w-full">
            {
              arrOfObj.map((data) => {
                return(
                  <Card props={{
                    productLogo: data.productLogo,
                    productImage: data.productImage,
                    productTitle: data.productTitle,
                    prodcutDesc: data.productDesc,
                    productCountry: data.productCountry 
                  }}/>
                )
              })
            }
            </div>
          </div>
        </div>
        <div className="partners">
          <Partners/>
        </div>
        <div className="promo">
          <Promo/>
        </div>
      </div>

    </div>
  )
}

export default App
