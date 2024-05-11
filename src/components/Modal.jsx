import { useRef, useState } from "react";
import Input from "./common/Input";

export default function Modal ({ type, player, onClose, onAction}){

    // const initialValue = useRef(Object.create(player)).current;
    const initialValue = useRef(player).current;
    const [error, setError] = useState(null);
    
    const handleClose = (e) => {
        if(e.keyCode === 27){
            onClose();
        }
    }
    window.addEventListener('keydown', handleClose);

    const handleAction = () => {
        if(type === 'delete'){
            onAction(player._id)
        }

        if(!initialValue.firstname || initialValue.firstname?.length === 0){
            setError('firstname')
            return;
        }
        if(!initialValue.lastname || initialValue.lastname?.length === 0){
            setError('lastname')
            return;
        }
        if(!initialValue.nationality || initialValue.nationality?.length === 0){
            setError('nationality')
            return;
        }
        if(!initialValue.club || initialValue.club?.length === 0){
            setError('club')
            return;
        }
        if(!initialValue.rank || initialValue.rank?.length === 0){
            setError('rank')
            return;
        }
        if(!initialValue.age || initialValue.age?.length === 0){
            setError('age')
            return;
        }
        if(!initialValue.trophies || initialValue.trophies?.length === 0){
            setError('trophies')
            return;
        }
        if(!initialValue.image || initialValue.image?.length === 0){
            setError('image')
            return;
        }
        onAction(initialValue)
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-neutral-950 bg-opacity-75">
        <div className="bg-neutral-900 rounded-3xl pb-8 px-4 pt-5 w-2/4 shadow-lg flex flex-col gap-6">
            <div className="grid grid-cols-3">
                <div className='flex align-middle justify-start'>
                    <button
                        className="bg-neutral-900 border text-xs border-neutral-700 hover:bg-neutral-800 text-white font-bold p-2 rounded-full"
                        onClick={() => onClose()}
                    >
                        ✖️
                    </button>
                </div>
            </div>
            <div className='text-center'>
                {
                    type === 'delete' && <h4 className="text-white-700 text-xl font-semibold">Are tou sure you want to delete {player.firstname} {player.lastname} ?</h4>
                }
                {
                    ((type === 'update') || (type === 'create'))&& 
                    <div className="flex flex-col px-8 gap-2">
                        <div className="flex flex-row gap-2">
                            <Input error={error == 'firstname'} label='First Name' type='text'  className='w-2/4' value={player.firstname} onChange={(value) => initialValue.firstname = value}/>
                            <Input error={error == 'lastname'} label='Last Name' type='text' className='w-2/4' value={player.lastname} onChange={(value) => initialValue.lastname = value}/>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Input error={error == 'nationality'} label='Nationality' type='text'  className='w-2/4' value={player.nationality} onChange={(value) => initialValue.nationality = value}/>
                            <Input error={error == 'club'} label='Club' type='text' className='w-2/4' value={player.club} onChange={(value) => initialValue.club = value}/>
                        </div>

                        <div className="flex flex-row justify-between">
                            <Input error={error == 'rank'} label='Rank' className='w-[32.5%]' type='text' value={player.rank} onChange={(value) => initialValue.rank = value}/>
                            <Input error={error == 'age'} label='Age' type='text' className='w-[32.5%]' value={player.age} onChange={(value) => initialValue.age = value}/>
                            <Input error={error == 'trophies'} label='Trophies' type='text' className='w-[32.5%]' value={player.trophies} onChange={(value) => initialValue.trophies = value}/>
                        </div>

                        <Input error={error == 'image'} label='Image' type='text' value={player.image} onChange={(value) => initialValue.image = value}/>

                    </div>
                }
            </div>
            <div className="flex justify-end px-6">
                <button className='p-2 px-4 bg-neutral-900 border border-neutral-700 rounded-lg text-white hover:bg-neutral-800 ml-4' onClick={onClose}>Cancel</button>
                {
                    type === 'create' && <button className='p-2 px-4 bg-neutral-900 border border-neutral-700 rounded-lg text-white hover:bg-green-600 hover:bg-opacity-25 ml-4' onClick={handleAction}>Create</button>
                }
                {
                    type === 'update' && <button className='p-2 px-4 bg-neutral-900 border border-neutral-700 rounded-lg text-white hover:bg-green-600 hover:bg-opacity-25 ml-4' onClick={handleAction}>Update</button>
                }
                {
                    type === 'delete' && <button className='p-2 px-4 bg-neutral-900 border border-neutral-700 rounded-lg text-white hover:bg-red-600 hover:bg-opacity-25 ml-4' onClick={handleAction}>Delete</button>
                }
            </div>
        </div>
        </div>
    );
};

