import { IoBarChartSharp } from 'react-icons/io5';
import { BsCalendar2Date } from 'react-icons/bs'
import { TfiGallery} from 'react-icons/tfi';
import { ImProfile } from 'react-icons/im';
import { HiOutlineUserAdd } from 'react-icons/hi' 

const link = [
    {
        id:1,
        text:'stats',
        path:'/',
        icon:<IoBarChartSharp />
    },
    {
        id:2,
        text:'bookings',
        path:'bookings',
        icon:<BsCalendar2Date />
    },
    {
        id:3,
        text:'upload gallery',
        path:'upload-gallery',
        icon:<TfiGallery />
    },
    {
        id:4,
        text:'add admin',
        path:'add-admin',
        icon:<HiOutlineUserAdd />
    },
    {
        id:5,
        text:'profile',
        path:'profile',
        icon:<ImProfile />
    }
    
]

export default link