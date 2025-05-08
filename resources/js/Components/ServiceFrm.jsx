import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
const ServiceFrm = ({ openFrm, setOpenFrm }) => {
    if (!openFrm) return null;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('mutual_fund');
    const [status, setStatus] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
    };
    return (
        <div className="rounded-md bg-gray-300 p-4">
            <div className="flex flex-row items-center justify-between pb-4 pt-4">
                <h2 className="text-xl font-bold">Add New Service</h2>

                <span>
                    <IoCloseSharp
                        size={35}
                        className="cursor-pointer"
                        onClick={() => setOpenFrm(!openFrm)}
                    />
                </span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
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
                    <label className="block text-sm font-medium text-gray-700">
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
                    <label className="block text-sm font-medium text-gray-700">
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
                    <label className="inline-flex items-center text-sm font-medium text-gray-700">
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
