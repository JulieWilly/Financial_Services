import AdminLayout from '@/Layouts/AdminLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard({ children }) {
    return (
        <AuthenticatedLayout>
         <AdminLayout>{children}</AdminLayout>
        </AuthenticatedLayout>
    );
}
