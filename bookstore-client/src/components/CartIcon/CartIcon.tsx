import {CiShoppingCart} from 'react-icons/ci'
import './CartIcon.css'

const CartIcon = () => {
    
    
  return (
    <div className='relative flex justify-center items-center h-11 cursor-pointer'>
        <CiShoppingCart color='white' size='30px'/>
        <span className=' absolute bottom-[13px] text-[11px]'>2</span>
    </div>
  )
}

export default CartIcon