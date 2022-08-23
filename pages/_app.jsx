import { Toastful } from "react-toastful";
import { AuthProvider } from "../context/AuthContext";
import { JobsProvider } from "../context/JobsContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <JobsProvider>
        <Toastful>{(output) => <div className="...">{output}</div>}</Toastful>
        <Component {...pageProps} />
      </JobsProvider>
    </AuthProvider>
  );
}

export default MyApp;
