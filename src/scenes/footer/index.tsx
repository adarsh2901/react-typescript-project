import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Quam quisque id diam vel quam elementum pulvinar etiam. In hendrerit
            gravida rutrum quisque non tellus orci ac auctor. Lacinia quis vel
            eros donec ac. Ornare arcu dui vivamus arcu felis bibendum ut
            tristique et.
          </p>
          <p>© EVOGYM All Rights Reserved.</p>
        </div>
        <div className="mt-16 flex basis-1/4 flex-col md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a href="#contactus" className="my-3">
            Massa orci senectus
          </a>
          <a href="#contactus" className="my-3">
            Et gravida id et etiam
          </a>
          <a href="#contactus" className="my-3">
            Ullamcorper vivamus
          </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Bangalore, India</p>
          <p>9878460987</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
