import productLogo1 from '../assets/product-1-logo.png'
import productImage1 from '../assets/product-1-image.png'
import productLogo2 from '../assets/product-2-logo.png'
import productImage2 from '../assets/product-2-image.png'
import productLogo3 from '../assets/product-3-logo.png'
import productImage3 from '../assets/product-3-image.png'
import productImage4 from '../assets/product-4-image.png'

type propsType = {
    productLogo: string,
    productImage: string,
    productTitle: string,
    productDesc: string,
    productCountry: string
}[]

export const arrOfObj: propsType = [
    {
        productLogo: productLogo1,
        productImage: productImage1,
        productTitle: 'Ayam Koplo',
        productDesc: 'Ayam Geprek',
        productCountry: 'Indonesia'
    },
    {
        productLogo: productLogo2,
        productImage: productImage2,
        productTitle: 'San Gyu',
        productDesc: 'Beef Bowl',
        productCountry: 'Jepang'
    },
    {
        productLogo: productLogo3,
        productImage: productImage3,
        productTitle: 'Bude Sari',
        productDesc: 'Nasi Ayam',
        productCountry: 'Indonesia'
    },
    {
        productLogo: '',
        productImage: productImage4,
        productTitle: 'Kopi Dari|Pada',
        productDesc: 'Minuman',
        productCountry: 'Indonesia'
    }
]