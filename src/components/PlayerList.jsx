import ListItem from "./ListItem";

export default function PlayerList({data}) {

    if(!data) return <h1>Loading...</h1>

    return (
        <section className="px-6">
            {
                data?.map( (player) => (
                    <ListItem item={player} key={player._id}/>
                ))
            }
        </section>
    )
}