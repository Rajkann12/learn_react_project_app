import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";

function App() {
  return (
    <main className="h-screen my-5 py-5 flex gap-10">
      <Sidebar></Sidebar>
      <NewProject/>
    </main>
  );
}

export default App;
