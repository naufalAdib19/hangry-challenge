import promoImg from '../../assets/promo-image.png'

const Promo = () => {
    return(
        <div className='px-5 lg:px-36 mt-12 py-10 mb-12'>
            <div className="flex flex-col-reverse lg:flex-row gap-x-12 justify-center items-center">
                <div>
                    <h1 className='font-semibold text-4xl mt-7 lg:mt-0'>Makin rame, makin hemat!</h1>
                    <p className='max-w-[350px] my-4 text-slate-500'>Nikmati keuntungan dengan minimum pembelian 20 porsi menu apa aja. Cocok untuk hidangan segala acara!</p>
                    <ul className='list-promo flex flex-col gap-y-3 mt-5'>
                        <li className='flex gap-x-4 font-semibold'>Beragam pilihan menu</li>
                        <li className='flex gap-x-4 font-semibold'>Semua menu diskon 20%</li>
                        <li className='flex items-center gap-x-4'>
                            <div>
                                <p className='font-semibold'>Gratis biayaa kirim</p>
                                <p className='text-[12px]'>*Syarat dan ketentuan berlaku</p>
                            </div>
                        </li>
                    </ul>
                    <button className='mt-8 bg-[#A30926] px-3 py-3 rounded-md text-white w-full sm:w-[180px]'>Pesan Sekarang</button>
                </div>
                <div>
                    <img src={promoImg} alt="" width={380}/>
                </div>
            </div>
        </div>
    )
}

export default Promo