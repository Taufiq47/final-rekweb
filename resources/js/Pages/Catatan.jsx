import React, { useState } from "react";
import Navbar from "../Layouts/Navbar";
import { useForm } from "@inertiajs/react";

function Catatan({ posts }) {
    const { data, setData, post, put, errors, delete: destroy } = useForm({
        catat: "",
    });

    const [editId, setEditId] = useState(null);

    function submit(e) {
        e.preventDefault();

        if (editId) {
            put(`/catatan/${editId}`, {
                onSuccess: () => {
                    setEditId(null);
                    setData('catat', '');
                },
            });
        } else {
            post("/catatan", {
                onSuccess: () => {
                    setData('catat', '');
                },
            });
        }
    }

    function startEdit(id, content) {
        setEditId(id);
        setData('catat', content);
    }

    function submitDelete(id, e) {
        e.preventDefault();

        destroy(`/catatan/${id}`, {
            onSuccess: () => {
                console.log(`Catatan dengan ID ${id} berhasil dihapus`);
            },
        });
    }

    return (
        <>
            <div className="max-w-[600px] mx-auto flex flex-col gap-7">
                <div>
                    <h3 className="text-4xl font-bold place-self-center mt-6">Catatanku</h3>
                </div>

                <div className="flex items-center justify-center">
                    <form
                        onSubmit={submit}
                        className="flex flex-col items-center gap-4 bg-white shadow-md rounded-md w-full"
                    >
                        <textarea
                            rows="10"
                            value={data.catat}
                            onChange={(e) => setData('catat', e.target.value)}
                            className={`w-full p-3 border ${errors.catat ? 'border-2 border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-blue-300`}
                            placeholder="Tulis catatan Anda di sini..."
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                        >
                            {editId ? "Simpan Perubahan" : "Tambah Catatan"}
                        </button>
                    </form>
                </div>


                <div className="flex flex-col gap-2">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="w-full bg-white p-4 shadow-md rounded-md"
                        >
                            <div className="text-sm text-gray-500 mb-2">
                                <span className="font-semibold">Waktu dibuat: </span>
                                <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                            </div>
                            <p className="text-gray-800 mb-4">{post.catat}</p>
                            <div className="flex justify-between">
                                <form onSubmit={(e) => submitDelete(post.id, e)}>
                                    <button
                                        type="submit"
                                        className="text-red-500 hover:underline"
                                    >
                                        Hapus
                                    </button>
                                </form>
                                <button
                                    onClick={() => startEdit(post.id, post.catat)}
                                    className="text-blue-500 hover:underline"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}

export default Catatan;
