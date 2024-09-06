function Sidebar(){
    return(
            <aside className="w-1/3 px-5 py-10 bg-stone-800 text-stone-50 md:w-72">
                <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">Your Projects</h2>
                <div>
                    <button className="px-4 py-2 text-xs md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add Projects</button>
                </div>
                <ul>

                </ul>
            </aside>
    )
}

export default Sidebar;