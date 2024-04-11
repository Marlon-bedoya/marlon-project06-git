 
 
const UserLogged = ({ setUser, user }) => {


const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser()
}

  return (
    <article>
        <header>
            <img 
            src={
                user.gender === 'female'
                ? '/user-female-icon.svg'
                : '/user-male-icon.svg'
            } 
            alt="" 
            />
        </header>
        <h2>
            {user.firstName} {user.lastName}
        </h2>
        <button onClick={handleLogout}>Logout</button>
    </article>
  )
}

export default UserLogged