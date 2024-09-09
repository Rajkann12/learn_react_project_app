import Button from './Button'

function Sidebar(prop){
    return(
            <aside className="w-1/3 px-5 py-10 bg-stone-800 text-stone-50 md:w-72">
                <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">Your Projects</h2>
                <div>
                    <Button {...prop}/>
                </div>
                <ul>

                </ul>
            </aside>
    )
}

export default Sidebar;