type propsType = {
    productLogo: string,
    productImage: string,
    productTitle: string,
    prodcutDesc: string,
    productCountry: string
}

const Card = ({props}: {props: propsType}) => {
    return(
        <div className=''>
            <div className="card-container relative w-[170px] h-[255px] lg:w-[370px] lg:h-[475px]  shadow-md rounded-md">
                <div className="logo-product absolute top-2 left-2">
                    <img src={props.productLogo} alt="" width={60}/>
                </div>
                <div className="image-product overflow-hidden">
                    <img src={props.productImage} alt="" className='w-full h-full hover:scale-105 rounded-md transition duration-300 delay-75'/>
                </div>
                <div className="product-desc px-3 pb-4 pt-2">
                    <div className='flex items-center gap-x-3 mb-1'>
                        <h1 className={`font-semibold ${props.productTitle.length > 11 ? 'text-sm' : 'text-lg'} lg:text-3xl`}>{props.productTitle}</h1>
                        <h1 className='text-red-500 font-bold text-3xl'>&#8594;</h1>
                    </div>
                    <div className='flex items-center gap-x-1 lg:gap-x-2 text-[10px] lg:text-base mt-2'>
                        <p>{props.prodcutDesc}</p>
                        <p>&#8226;</p>
                        <p>{props.prodcutDesc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card