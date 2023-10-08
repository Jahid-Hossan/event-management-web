import { IoColorPaletteOutline } from 'react-icons/io5'
import { MdManageAccounts } from 'react-icons/md'
import { FaCity } from 'react-icons/fa6'

const Focus = () => {
    return (
        <div className='py-10 px-5 bg-white relative text-center lg:flex justify-between '>
            <div className=" space-y-3  w-96">
                <IoColorPaletteOutline className='text-6xl mx-auto'></IoColorPaletteOutline>
                <h2 className='text-2xl font-semibold'>UNIQUE DESIGN</h2>
                <p>Our team developing 100% unique designs for your any kind of Social Event.</p>
            </div>
            <div className=" space-y-3  w-96">
                <FaCity className='text-6xl mx-auto'></FaCity>
                <h2 className='text-2xl font-semibold'>IN-HOUSE FACILITIES</h2>
                <p>All the services we provide are 100% done in-house using our designing and fabrication facilities.</p>
            </div>
            <div className=" space-y-3  w-96">
                <MdManageAccounts className='text-6xl mx-auto'></MdManageAccounts>
                <h2 className='text-2xl font-semibold'>PLANNING</h2>
                <p>Coordinate and manage all aspects of events to create memorable and seamless experiences for couples and their guests.</p>
            </div>

        </div>
    );
};

export default Focus;