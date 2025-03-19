import Link from 'next/link';



const HomePage = () => {
    return (
        <div>
        <h1 className="text-3xl font-bold text-gray-900 px-4 py-4">Welcome</h1>
        <Link href='/properties' className='px-4 py-4'>Go to Propteries</Link>
        </div>
    );
}

export default HomePage;