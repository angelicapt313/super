import Charts from '../pages/Charts';
import DashboardSideMenu from '../pages/DashboardSideMenu';

const quickStoreDashboard = () => {


return(
    <div className="flex min-h-screen">
    <DashboardSideMenu></DashboardSideMenu>

    <div className="container mx-auto ">
     
    <div className="flex-1 p-6 ">
     <h2 className="text-2xl font-bold mb-3">Super Quick Store Manager</h2>
       <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8'>
       
       {<Charts></Charts>}
       </div>
       
    </div>
    </div>
    </div>
)
}

export default quickStoreDashboard 