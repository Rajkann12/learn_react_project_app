import Input from "./Input";

function NewProject({projectData, onChangeHandler}){
    return(
        <div className="w-[35rem] mt-10">
           
            <div>
                <Input label='Name' id='name' value={projectData.name} onChangeHandler={onChangeHandler}/>
                <Input label='Description' id='description' isTextBox value={projectData.description} onChangeHandler={onChangeHandler}/>
                <Input label='Due Date' id='dueDate' value={projectData.dueDate} onChangeHandler={onChangeHandler}/>
            </div>
             <menu className="flex items-center justify-end gap-4 my-4">
                <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                <button className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </menu>
        </div>
    );
}

export default NewProject;