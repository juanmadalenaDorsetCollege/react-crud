import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PlayerServices from '../services/playerServices'
import Modal from '../components/Modal';

export default function PlayerDetails() {
    
    let { id } = useParams();
    const navigate = useNavigate()
    const [player, setPlayer] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [typeModal, setTypeModal] = useState('update')

    useEffect(() => {
        getPlayerById(id)
    }, [])

    const getPlayerById = (id) => {
        PlayerServices.getPlayerById(id)
        .then( ({player}) => {
            setPlayer(player);
        })
    }

    const updatePlayer = (player) => {
        PlayerServices.updatePlayer(player)
        .then( ({player}) => {
            setPlayer(player);
        })
        .finally(() => {
            setShowModal(false)
        })
    }

    const deletePlayer = (id) => {
        PlayerServices.deletePlayer(id)
        .then( () => {
            navigate('/')
        })
    }

    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true)

    const handleEdit = () => {
        setTypeModal('update')
        handleShowModal()
    }

    const handleDelete = () => {
        setTypeModal('delete')
        handleShowModal()
    }


    return (
        <>
            <section className='w-full flex justify-between px-6 py-4'>
                <div className='w-2/3'>
                    <h1 className='text-9xl font-bold'>{player.firstname} {player.lastname}</h1>
                    <p className='text-4xl font-base py-4 border-b border-neutral-700  border-opacity-70'> <span className='opacity-50 text-2xl mr-4'>Rank:</span> {player.rank}</p>
                    <p className='text-4xl font-base py-4 border-b border-neutral-700  border-opacity-70'> <span className='opacity-50 text-2xl mr-4'>Age:</span> {player.age}</p>
                    <p className='text-4xl font-base py-4 border-b border-neutral-700  border-opacity-70'> <span className='opacity-50 text-2xl mr-4'>Nationality:</span> {player.nationality}</p>
                    <p className='text-4xl font-base py-4 border-b border-neutral-700  border-opacity-70'> <span className='opacity-50 text-2xl mr-4'>Club:</span> {player.club}</p>
                    <p className='text-4xl font-base py-4 border-b border-neutral-700  border-opacity-70'> <span className='opacity-50 text-2xl mr-4'>Trophies:</span> {player.trophies}</p>
                </div>
                <div className='w-1/3'>
                    <div className='flex justify-end w-full'>
                        <button className='p-2 bg-neutral-700 border border-neutral-600 rounded-2xl text-white hover:bg-neutral-800' onClick={handleEdit}>✏️</button>
                        <button className='p-2 bg-neutral-700 border border-neutral-600 rounded-2xl text-white hover:bg-neutral-800 ml-8' onClick={handleDelete}>❌</button>
                    </div>
                    <img src={player.image} alt={player.firstname} className='h-96 object-cover rounded-full'/>
                </div>
            </section>
            {
                showModal && <Modal player={player} type={typeModal} onAction={typeModal == 'update' ? updatePlayer : deletePlayer} onClose={handleCloseModal}/>
            }
        </>
    )
}