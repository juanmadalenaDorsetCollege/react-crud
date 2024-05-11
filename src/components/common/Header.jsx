import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 w-full px-6 pt-6">
        <section className='h-full w-full py-4 px-6 rounded-3xl border border-neutral-700 border-opacity-70 bg-neutral-800'>
            <Link to={'/'}>
                <h1 className= "h-full font-semibold text-left text-xl">Top 10 Football Players</h1>
            </Link>
        </section>
    </header>
  )
}
