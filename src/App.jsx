import './App.css'
import ReCAPTCHA from "react-google-recaptcha";
function App() {

function onChange(value) {
  console.log("Captcha value:", value);
}

  return (
    <>
       <ReCAPTCHA
    sitekey="Your client site key"
    onChange={onChange}
  />
    </>
  )
}

export default App
