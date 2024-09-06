function Input({isTextBox, label}){
    let cssClass = 'w-full p-1 border-b-2 border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
    return(
        <p className="flex flex-col gap-1 my-3">
            <label className="text-small text-bold uppercase text-stone-500">{label}</label>
            {isTextBox ? <textarea className={cssClass}/> : <input type="text" className={cssClass} />}
        </p>
    );
}

export default Input;