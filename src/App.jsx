import Layout from "./components/Layout/Layout.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Routes from "./routes/Routes.jsx";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Routes />
      </Layout>
    </>
  );
}

export default App;
