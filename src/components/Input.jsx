function Input({isTextBox, label, value}){
    let cssClass = 'w-full p-1 border-b-2 border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
    return(
        <p className="flex flex-col gap-1 my-3">
            <label className="text-small text-bold uppercase text-stone-500">{label}</label>
            {isTextBox ? <textarea className={cssClass} value={value} onChange={}/> : <input type="text" className={cssClass} value={value} onChange={}/>}
        </p>
    );
}

export default Input;