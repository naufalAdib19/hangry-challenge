import vendor1 from '../../assets/vendor1.png'
import vendor2 from '../../assets/vendor2.png'
import vendor3 from '../../assets/vendor3.png'
import vendor4 from '../../assets/vendor4.png'

const data = [vendor1, vendor2, vendor3, vendor4]

const Partners = () => {
    return(
        <div className='py-5 lg:py-10'>
            <h2 className='text-slate-500 text-center mb-3'>Hangry! dapat kamu temukan di</h2>
            <div className="flex w-full justify-center">
                {
                    data.map((data) => {
                        return(
                            <div>
                                <img src={data} alt="" className='w-[90px] sm:w-[170px] lg:w-[300px]'/>
                            </div>
   
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Partners