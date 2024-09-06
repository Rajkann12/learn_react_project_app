import Input from "./Input";

function NewProject(){
    return(
        <div className="w-[35rem] mt-10">
            <menu className="flex items-center justify-center gap-4 my-4">
                <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                <button className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </menu>
            <div>
                <Input label='Name'/>
                <Input label='Description' isTextBox/>
                <Input label='Due Date'/>
            </div>
        </div>
    );
}

export default NewProject;