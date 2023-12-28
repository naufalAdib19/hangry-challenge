type propsType = {
    imgSource: string,
    title: string,
    typeApps: string
}

const AppDownload = ({props}: {props: propsType}) => {
    return(
        <div className="w-[180px] md:w-[200px] h-[70px] bg-black text-white mt-7 rounded-md flex gap-x-2 md:gap-x-4  items-center justify-center">
            <div>
                <img src={props.imgSource} alt="" className='w-[30px]'/>
            </div>
            <div>
                <p className='text-sm'>{props.title}</p>
                <h1 className="text-sm md:text-xl font-semibold">{props.typeApps}</h1>
            </div>

        </div>
    )
}

export default AppDownload