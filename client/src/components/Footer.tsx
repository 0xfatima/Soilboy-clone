function Footer() {
  return (
    <>
      <footer className="">
        <div className="footerformat">
          <div className="footer1">
            <h1>Stay Updated</h1>
            <p>Sign up with your email address to receive news and updates.</p>
            <form action="">
              <input type="text" placeholder="Email Address" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="footer2">
            <div>
              <h1 className="heading-gap-footer">Info</h1>
              
              <a href="">About</a>
              <a href="">Plant Care</a>
              
            </div>
            <div>
              <h1 className="heading-gap-footer">Follow</h1>
             
              <a href="">Facebook</a>
              <a href="">Instagram</a>
             
            </div>
            <div>
              <h1 className="heading-gap-footer">Contact</h1>
              
              <p>46 Kim Yam Road</p>
              <p>#02-07/8, S239351</p>
              <a href="">hello@soilboy.sg</a>
              
            </div>
          </div>
        </div>
        <div className="footerformat2">
          <div className="ending">
            <p className="underline">FAQs and Delivery</p>
            <p className="underline">Privacy Policy</p>
          </div>
          <div className="">Soilboy © 2022</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
