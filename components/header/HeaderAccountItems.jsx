import Link  from 'next/link';
import { useAuth } from '../../context/AuthContext';
const HeaderAccountItems = () => {
    const {logoutUser}=useAuth()
  return (
    <div className='bg-[#444444] text-white'>
      <div className="text-right text-sm border border-y-1 px-2 border-[#eee] py-3 h-100 hover:bg-[#505050] cursor-pointer">
        <button onClick={logoutUser}> خروج ❌</button>
      </div>
      
    </div>
  );
};

export default HeaderAccountItems;
