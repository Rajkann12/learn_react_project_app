import noProjectImg from '../assets/no-projects.png';
import Button from './Button'

function NoProjectSelected(prop){
    return(
        <div className="mt-10 text-center w-1/3 flex-grow">
            <img src={noProjectImg} alt="" className='w-16 h-16 object-contain mx-auto'/>
            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
            <p className='text-stone-400 mb-4'>Select a project or get started by creating</p>
            <p className='mt-5'>
                <Button {...prop}/>
            </p>
        </div>
    );
}

export default NoProjectSelected;