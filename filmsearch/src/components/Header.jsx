import { NavLink } from "react-router-dom"

export const Header = ()=>{
    return (
        <>
            <header className="header">
                <div className="header-box">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/movies">Movies</NavLink>
                    </nav>
                </div>
            </header>
        </>
    )
}