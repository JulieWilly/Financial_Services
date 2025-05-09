import API from '@/Components/Api';
import Dashboard from '@/Pages/Dashboard';
import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const ViewService = () => {
    const {props} = usePage();

    const id = props.id;

    const [service, setService] = useState();

    const getService = async () => {
        try {
            await API.get(`/service/${id}/edit`).then((response) => {
                setService(response.data.data[0])}
            ).catch(err => console.log('Error', err));            
        } catch (error) {
            console.log('Error', error);
        }
    }
    useEffect(() => {
        getService();
    }, [id])


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setService({
            ...service,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    if (!service) {
        return <div>Loading...</div>; 
    }
    return (
        <Dashboard>
            <div className="mx-auto mt-10 max-w-2xl rounded-lg bg-white p-6 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">
                    View / Edit Service
                </h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={service.name}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={service.description}
                            onChange={handleChange}
                            rows="4"
                            className="mt-1 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Type
                        </label>
                        <input
                            name="type"
                            value={service.type}
                            onChange={handleChange}
                            name='type'
                            className="mt-1 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="status"
                            checked={service.status}
                            onChange={handleChange}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label className="ml-2 text-sm text-gray-700">
                            Active
                        </label>
                    </div>

                    <button className="mt-4 rounded bg-blue-600 px-4 py-2 font-semibold text-white shadow hover:bg-blue-700">
                        Save Changes
                    </button>
                </div>
            </div>
        </Dashboard>
    );
};

export default ViewService;
