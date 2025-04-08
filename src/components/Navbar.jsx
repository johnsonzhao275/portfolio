export default function Navbar() {
    return (
        <nav className="bg-black text-white p-4 flex justify-between">
            <div className="space-x-4">
                <a href="#home">Home</a>
                <a href="#about">About Me</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#gaming">Gaming</a>
                <a href="#sports">Sports</a>
            </div>
        </nav>
    )
}