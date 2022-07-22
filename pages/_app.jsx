import { Toastful } from "react-toastful";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toastful>{(output) => <div className="...">{output}</div>}</Toastful>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
