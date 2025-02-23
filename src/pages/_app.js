import "@/styles/globals.css";

const originalConsoleLog = console.log;

console.log = (...args) => {
  if (
    typeof args[0] === "string" &&
    (args[0].includes("[Fast Refresh]") || args[0].includes("[HMR]"))
  ) {
    return; // Ignora mensagens do Fast Refresh e HMR
  }
  originalConsoleLog(...args); // Exibe outros logs normalmente
};

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
