
function Header() {
  return (
    <>
           <header>
    <nav>
      <div className="nav-left">
        <img src="src/assets/logo-regular.png" alt=""/>
      </div>
      <ul>
        <li><a href="">SHOP ALL</a></li>
        <li><a href="">MAKEUP</a></li>
        <li><a href="">SKIN CARE</a></li>
        <li><a href="">HAIR CARE</a></li>
        <li><a href="">ABOUT</a></li>
        <li><a href="">CONTACT</a></li>
      </ul>
     <div className="nav-right">
      <img src="src/assets/download (2).svg" alt="" height="30px"/>
      <h2>$0.00</h2>
     </div>
     <div className="humberger">
      <img src="src/assets/icon-hamburger.svg" alt=""/>
     </div>
    </nav>
    <div className="header-hero">
      <div className="text-contant">
        <h3>NEW IN TOWN </h3>
        <h1>The New Beauty Collection</h1>
        <p>This new collection brings with it the most exciting lorem ipsm dolor sit ament.</p>
         <a href="">SHOP NOW</a>
      </div>
    </div>
  </header>
    </>
  )
}

export default Header
