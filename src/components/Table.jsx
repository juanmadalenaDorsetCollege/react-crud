import { useEffect } from "react";

export default function Table({data, headers, actions}){

    useEffect(() => {
        console.log(data)
    }, [data])

    if(!data) return <h1>Loading...</h1>

    return(
        <table className="w-full table-auto">
            <thead>
                <tr className="mb-10">
                    { headers?.map( (header) => (
                        <th key={header}>{header.charAt(0).toUpperCase() + header.slice(1)}</th>
                    )) }
                </tr>
            </thead>
            <tbody>
                { data?.map( element => (
                    <tr className={`hover:bg-blue-900 h-14`} key={element.id}>
                        {headers?.map( header => (
                            <td key={element[header]}>
                                {element[header]}
                            </td>
                        ))}
                        <td>
                            {actions?.map( ({title, icon, action}) => (
                                <button onClick={() => action(element)} key={title} className="p-2 mr-2">
                                    { icon ?? title }
                                </button>
                            ))}
                        </td>
                    </tr>
                )) }
            </tbody>
        </table>
    )
}