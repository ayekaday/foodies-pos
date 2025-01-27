import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";

function App() {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
