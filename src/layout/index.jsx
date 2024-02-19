import MainNavbar from "./navbar";

const Layout = ({children}) => {
    return (
        <div>
            <MainNavbar />

            {children}
        </div>
    )
}

export default Layout