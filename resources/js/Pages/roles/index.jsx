import {useState} from "react";
import {Link, router} from '@inertiajs/react'
import Pagination from "../../shared/Pagination.jsx";
import Layout from "../../shared/Layout.jsx";

export default function ListRoles({roles}) {

    const handlePaginate = (page) => {
        router.get(`/roles?page=${page}`, {}, {replace: true});
    }

    const handleDelete = (id) => {
        if(confirm("Are you sure you want to delete?")) {
            router.delete(`/roles/${id}`);
        }
    }

    return (
        <Layout>
            <div className="mx-5">
                <div className="flex justify-between my-6">
                    <h2 className="text-2xl">
                        All Roles
                    </h2>
                    <Link href="/roles/create" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Role</Link>
                </div>
                <div className="relative">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">#</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Guard</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            roles.data.map(role => {
                                return (
                                    <tr key={role.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">{role.id}</td>
                                        <td className="px-6 py-4">{role.name}</td>
                                        <td className="px-6 py-4">{role.guard_name}</td>
                                        <td className="px-6 py-4">
                                            <Link href={`/roles/${role.id}`} className="bg-green-400 text-white rounded-lg hover:bg-green-800 focus:ring-4 font-medium px-2 py-1 mx-2">Edit</Link>
                                            <a href="#" onClick={event => {event.preventDefault(); handleDelete(role.id)} } className="bg-red-400 text-white rounded-lg hover:bg-red-800 focus:ring-4 font-medium px-2 py-1 mx-2">Delete</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>

                    <div className="my-10">
                        <Pagination current_page={roles.current_page}
                                    total={roles.total}
                                    per_page={roles.per_page}
                                    onPaginate={handlePaginate}
                        />
                    </div>

                </div>

            </div>
        </Layout>

    )
}
