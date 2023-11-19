import { LuMenuSquare } from 'react-icons/lu'
import './NavBar.css'
export function NavBar () {
  return (
    <nav className='navBar'>
      <div className='menu-btn'>
        <button>
          <LuMenuSquare size='25' />
        </button>
      </div>
      <h1>Hogwarts Connect</h1>
      <img src='./src/assets/userPhoto.jpg' width='38px' alt='User profile image' />
    </nav>
  )
}
