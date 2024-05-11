import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItem({item}) {

    return (
        <Link to={`/${item._id}`}>
            <section className='flex justify-between px-10 rounded-3xl py-8 mb-4 border-neutral-700  border-opacity-70 border hover:bg-neutral-700 hover:bg-opacity-40 cursor-pointer'>
                <div className='w-2/3 border-b-2 border-white border-opacity-10'>
                    <p className='text-7xl font-semibold'>{item.rank}<span className='text-2xl'>⚽</span> </p>
                </div>
                <div className='w-1/3'>
                    <div className='mb-4'>
                        <p className='text-2xl font-semibold'>{item.firstname} {item.lastname}</p>
                        <p className='text-lg font-light'>{item.nationality}</p>
                    </div>
                    <img src={item.image} alt={item.firstname} className='w-80 h-44 object-cover rounded-full'/>
                </div>
            </section>
        </Link>
    )
}
