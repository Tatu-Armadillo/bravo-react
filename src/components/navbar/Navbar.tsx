const Navbar = () => {
    return (
        <nav className="grid grid-cols-3 sm:grid-cols-2  bg-black p-3">
            <div className="col-span-1">
                <img className="w-20" src="https://i.imgur.com/FiSSBSy.png" alt="" />
            </div>
            <div className="col-span-2 sm:col-span-1 flex justify-end items-center ">
                <h1 className="text-2xl text-amber-400">MANOLO BURGER</h1>
            </div>
        </nav>
    )
}

export default Navbar;