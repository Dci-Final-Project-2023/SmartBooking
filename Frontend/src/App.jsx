import { StoreProvider } from "../store/OpenSearch";
import "../styles/App.scss";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="scroll-smooth hover:scroll-auto">
      <Layout />
    </div>
  );
}

export default App;
