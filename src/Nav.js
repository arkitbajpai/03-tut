import React from 'react'

const Nav = ({search, setSearch}) => {
  return (
    <nav className='Nav'>
       <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search'>Search Posts</label>
       </form>
    </nav>
  )
}

export default Nav
