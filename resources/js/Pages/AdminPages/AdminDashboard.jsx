import ServiceFrm from '@/Components/ServiceFrm';
import { useEffect, useState } from 'react';
import Dashboard from '../Dashboard';
import API from '@/Components/Api';
import { router } from '@inertiajs/react';
const services = [
    {
        id: 1,
        name: 'Equity Mutual Fund',
        description: 'High-growth long-term investments',
        type: 'mutual_fund',
        status: true,
    },
    {
        id: 2,
        name: 'Monthly SIP Plan',
        description: 'Start small and grow your savings',
        type: 'sip',
        status: true,
    },
    {
        id: 3,
        name: 'Health Insurance',
        description: 'Covers medical expenses',
        type: 'insurance',
        status: false,
    },
];
export default function AdminDashboard() {
    const [service, setServices] = useState([]);

    const getData = async () => {
        try {
            await API.get('/get-services').then((response) => setServices(response.data.data)).catch(err => {
                console.error('Error fetching services:', err);
            });
        } catch(error){
            console.log('Error');
        }
    }
    useEffect(() => {
        getData();
    }, []);


    const [openFrm, setOpenFrm] = useState(false);

    const handleNavigation = (id) => {
        router.visit(`/service/${id}/edit`);
    };

    return (
        <Dashboard>
            <div className="relative p-4">
                <div className="flex flex-row items-center justify-between p-4">
                    <h2 className="mb-4 text-xl font-bold">
                        Financial Services
                    </h2>
                    <button
                        className="rounded bg-blue-500 px-2 py-1 text-xs capitalize text-white hover:bg-red-600"
                        onClick={() => setOpenFrm(!openFrm)}
                    >
                        Add new Service
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full rounded-md border border-gray-200 bg-white shadow-sm">
                        <thead>
                            <tr className="bg-gray-100 text-sm text-gray-700">
                                <th className="border-b px-4 py-2">ID</th>
                                <th className="border-b px-4 py-2">Name</th>
                                <th className="border-b px-4 py-2">
                                    Description
                                </th>
                                <th className="border-b px-4 py-2">Type</th>
                                <th className="border-b px-4 py-2">Status</th>
                                <th className="border-b px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {service.map((service) => (
                                <tr
                                    key={service.id}
                                    className="text-sm text-gray-800"
                                >
                                    <td className="border-b px-4 py-2">
                                        {service.id}
                                    </td>
                                    <td className="border-b px-4 py-2">
                                        {service.name}
                                    </td>
                                    <td className="border-b px-4 py-2">
                                        {service.description}
                                    </td>
                                    <td className="border-b px-4 py-2 capitalize">
                                        {service.type.replace('_', ' ')}
                                    </td>
                                    <td className="border-b px-4 py-2">
                                        <span
                                            className={`rounded-full px-2 py-1 text-xs font-medium ${service.status ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                                        >
                                            {service.status
                                                ? 'Active'
                                                : 'Inactive'}
                                        </span>
                                    </td>
                                    <td className="space-x-2 border-b px-4 py-2">
                                        <button
                                            className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                                            onClick={() =>
                                                handleNavigation(service.id)
                                            }
                                        >
                                            Edit
                                        </button>
                                        <button className="rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {openFrm == false ? (
                    ''
                ) : (
                    <div className="absolute left-28 top-20 w-3/4 rounded-lg bg-gray-500">
                        <ServiceFrm openFrm={openFrm} setOpenFrm={setOpenFrm} />
                    </div>
                )}
            </div>
        </Dashboard>
    );
}
