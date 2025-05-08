import { Link } from '@inertiajs/react';
export default function AdminLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 space-y-4 bg-gray-800 p-4 text-white">
                <nav className="flex flex-col space-y-2">
                    <Link href="/admin/dashboard" className="hover:underline">
                        Dashboard
                    </Link>
                    <Link href="/users" className="hover:underline">
                        Users
                    </Link>
                    <Link href="/services" className="hover:underline">
                        Services
                    </Link>
                    <Link href="/settings" className="hover:underline">
                        Settings
                    </Link>
                </nav>
            </aside>

            <main className="flex-1 bg-gray-100 p-6">{children}</main>
        </div>
    );
}
