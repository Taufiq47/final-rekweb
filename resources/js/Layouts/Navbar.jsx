import { Children } from "react";

export default function Navbar({ children }) {
    return (
        <>
            <header className="w-full py-4 bg-slate-400">
                <nav className="w-2/4 flex justify-between m-auto text-xl font-semibold">
                    <a href="/">Catatanku</a>
                    <a href="/">Tambah</a>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    );
}