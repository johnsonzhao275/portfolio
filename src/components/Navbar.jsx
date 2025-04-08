export default function Navbar() {
    return (
        <nav className="bg-black text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">Johnson Zhao</h1>
            <div className="space-x-4">
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}