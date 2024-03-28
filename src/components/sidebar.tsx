import React from 'react';
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="h-[95vh] sticky top-0 p-2 w-1/6 mr-2 bg-gray-200 dark:bg-gray-800">
            <div className="mb-4">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Hospital Management System</h1>
            </div>
            <div>
                <ul className="space-y-2 px-2">
                    {sidebarLists.map((item,index)=><li key={index} className={'w-full list-none '}><Link href={item.path} className="text-gray-700 py-2 text-2xl text-center dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">{item.name}</Link></li>)}

                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
const sidebarLists=[{
    name:"Patients",
    path:"/patients",

},
    {
        name:"Rooms",
        path:"/rooms",
    },
    {
        name:"Appointments",
        path:"/appointments",
    },{
        name:"Doctor",
        path:"/doctor",
    },{
        name:"Diseases",
        path:"/diseases",
    },{
        name:"Medical Records",
        path:"/medical-records",
    }
]
