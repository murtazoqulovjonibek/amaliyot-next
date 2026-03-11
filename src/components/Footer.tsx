import Link from "next/link"

export default function Footer(){
  return(

    <footer className="footer">

      <img src="../nav-logo.png" alt="no Img" className="logo"/>

      <div className="footerMenu">

        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact Us</Link>

      </div>

      <div className="social">

        <span>FB</span>
        <span>IG</span>
        <span>LN</span>
        <span>YT</span>

      </div>

      <hr/>

      <p className="copyright">
        Copyright Ideapeel Inc © 2023. All Right Reserved
      </p>

    </footer>

  )
}