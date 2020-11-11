import Navbar from '../navbar';


const Layout = ({children}) => {
  return (
  <>
  <div>
    <Navbar/>
    <div className="container">
      {children}
    </div>
    <div>Footer</div>
  </div>
  <style jsx>{`
  .container {
    max-width: 1200px;
    margin: auto;
    }
  `}
</style>
  </>
  )
}

export default Layout;