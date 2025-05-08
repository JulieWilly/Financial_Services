import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-gray-900 dark:text-white/50">
                <div className="relative flex min-h-screen flex-col items-center">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="flex w-full flex-row items-center justify-end py-6">
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <h1 className="w-full text-center text-2xl font-bold tracking-wide text-white">
                                My Plans, My Freedom, My Wealth
                            </h1>
                            <p className="p-4 text-center text-white">
                                Check on some of the financial plans we have
                            </p>
                            <div className="grid min-h-screen grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
                                <div className="rounded-2xl p-6 shadow-xl dark:bg-blue-200">
                                    <h2 className="text-2xl font-bold text-blue-700">
                                        Mutual Funds
                                    </h2>
                                    <p className="mt-2 text-gray-600">
                                        Diversify your investment with
                                        professionally managed portfolios.
                                    </p>
                                </div>

                                <div className="rounded-2xl p-6 shadow-xl dark:bg-blue-200">
                                    <h2 className="text-2xl font-bold text-blue-700">
                                        SIP Plans
                                    </h2>
                                    <p className="mt-2 text-gray-600">
                                        Invest small amounts regularly for
                                        long-term wealth creation.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-blue-200">
                                    <h2 className="text-2xl font-bold text-blue-700">
                                        Life Insurance
                                    </h2>
                                    <p className="mt-2 text-gray-600">
                                        Secure your family's future with
                                        reliable life insurance policies.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-blue-200">
                                    <h2 className="text-2xl font-bold text-blue-700">
                                        Health Insurance
                                    </h2>
                                    <p className="mt-2 text-gray-600">
                                        Protect yourself from unexpected medical
                                        expenses.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-blue-200">
                                    <h2 className="text-2xl font-bold text-blue-700">
                                        Retirement Plans
                                    </h2>
                                    <p className="mt-2 text-gray-600">
                                        Plan your retirement early and live
                                        comfortably in later years.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-blue-200">
                                    <h2 className="text-2xl font-bold text-blue-700">
                                        Child Education Plans
                                    </h2>
                                    <p className="mt-2 text-gray-600">
                                        Save smartly for your child’s future
                                        education and dreams.
                                    </p>
                                </div>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Simple and Basic Financial System @ 2025
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
