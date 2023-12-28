import imageBanner from '../../assets/banner-image.png'
import imageBannerMobile from '../../assets/banner-image-mobile.png'
import { useMediaQuery } from 'react-responsive'
import AppDownload from '../molecules/PlayStore'
import playStoreImage from '../../assets/google-play-logo.png'
import appleImage from '../../assets/apple-logo.png'

const Banner = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 567px)'
    })

    const isTab = useMediaQuery({
        query: '(max-width: 1024px)'
    })

    return(
        <div className="h-[360px] md:h-[420px] bg-[#FAFAFA] flex items-center relative w-full">
            <div className="pl-5 md:pl-12 w-full lg:pl-36">
                <p className="font-semibold text-sm md:text-base mb-2 text-[#303030]">Kamu laper atau haus?</p>
                <h1 className="font-semibold text-xl sm:text-3xl md:text-4xl max-w-[200px] sm:max-w-[330px] md:max-w-[400px] text-[#303030]">Tenang...ada Hangry! yang siap mengatasi</h1>
                <div className="flex gap-x-10">
                {
                    isTab ? '' :
                    <AppDownload props={{
                        imgSource: playStoreImage,
                        title: 'Get on it',
                        typeApps: 'Play Store'
                    }}/>
                }
                <AppDownload props={{
                            imgSource: appleImage,
                            title: 'Download on the',
                            typeApps: 'App Store'
                }}/>
                </div>
            </div>
            {
                isMobile ?
                <div className='relative w-full h-full '>
                    <img src={imageBannerMobile} alt="" className='absolute bottom-0 right-0' width={130} height={130}/>
                </div>
                :
                <div className='relative w-full h-full'>
                    <img src={imageBanner} alt="" className='absolute bottom-0 left-1/2 translate-x-[-60%] w-[60%] h-[85%]' />
                </div>
            }
        </div>
    )
}

export default Banner;