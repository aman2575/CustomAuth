import 'tailwindcss/tailwind.css'
import Link from 'next/link'


function MyApp({ Component, pageProps }) {
  return (
  <>
    <nav className='py-4 px-12 border-b border-gray-300'>  
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/profile'>
        <a className='px-4'>Profile</a>
      </Link>
      <Link href='/protected'>
        <a className='px-4'>protected</a>
      </Link>
      <Link href='/amplifyAuth'>
        <a className='px-4'>AmplifyAuth</a>
      </Link>
    </nav>
     <Component {...pageProps} />
  </>
  )
}

export default MyApp
