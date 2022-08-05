import { Toastful } from "react-toastful";
import { AuthProvider } from "../context/AuthContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Toastful>{(output) => <div className="...">{output}</div>}</Toastful>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
