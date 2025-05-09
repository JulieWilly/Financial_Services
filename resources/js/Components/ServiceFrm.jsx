import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import API from './Api';
const ServiceFrm = ({ openFrm, setOpenFrm }) => {
    if (!openFrm) return null;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('mutual_fund');
    const [status, setStatus] = useState(true);

    const handleSubmit =async (e) => {
        e.preventDefault();
      try {
        const createService = await API.post(
            '/create/service',
            {
                name,
                description,
                type,
                status,
            },
        );

        alert('dsklskl')
        console.log('result', createService);

        
      } catch (error) {
        console.log('Error', error);
      }
    };
    return (
        <div className="rounded-md bg-gray-800 p-4">
            <div className="flex flex-row items-center justify-between pb-4 pt-4">
                <h2 className="text-xl font-bold text-white">Add New Service</h2>

                <span>
                    <IoCloseSharp
                        size={35}
                        className="cursor-pointer text-white"
                        onClick={() => setOpenFrm(!openFrm)}
                    />
                </span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-white">
                        Service Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 w-full rounded-md border border-gray-300 p-2"
                        placeholder="Enter service name"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-white">
                        Description
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 w-full rounded-md border border-gray-300 p-2"
                        placeholder="Enter service description"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-white">
                        Service Type
                    </label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="mt-1 w-full rounded-md border border-gray-300 p-2"
                        required
                    >
                        <option value="mutual_fund">Mutual Fund</option>
                        <option value="sip">SIP Plan</option>
                        <option value="insurance">Insurance</option>
                    </select>
                </div>
                <div>
                    <label className="inline-flex items-center text-sm font-medium text-white">
                        <input
                            type="checkbox"
                            checked={status}
                            onChange={() => setStatus(!status)}
                            className="mr-2"
                        />
                        Active
                    </label>
                </div>
                <div>
                    <button
                        type="submit"
                        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    >
                        Add Service
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ServiceFrm;
