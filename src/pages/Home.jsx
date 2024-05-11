import { useEffect, useState } from "react";
import PlayerServices from "../services/playerServices";
import PlayerList from "../components/PlayerList";
import Modal from "../components/Modal";

export default function Home(){

    const [playersList, setPlayersList] = useState(null)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
       getPlayers()
    }, [])

    const getPlayers = () => {
        PlayerServices.getPlayers()
        .then( ({players}) => {
            setPlayersList(players)
        })
    }

    const handleCreate = (player) => {
        PlayerServices.createPlayer(player)
        .then( () => {
            getPlayers()
        })
        .finally(() => {
            setShowModal(false)
        })
    }

    const handleModal = () => {
        setShowModal(!showModal)
    }

    return(
        <>
            <div className="mt-12">
                <PlayerList data={playersList}/>
            </div>
            <button className="fixed bottom-8 right-8 pb-4 pt-3 px-5  border border-neutral-800 bg-indigo-800 hover:bg-indigo-900 rounded-full font-semibold text-4xl" onClick={handleModal}>
                +
            </button>
            {showModal && <Modal type={'create'} player={{}} onAction={handleCreate} onClose={handleModal}/>}
        </>
    )
}