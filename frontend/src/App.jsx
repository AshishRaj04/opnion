import { Home, Navbar, Sidebar, Feed } from "./components";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="flex gap-2 flex-row">
        <Sidebar />
        <div className="flex gap-2 flex-col">
          <Home />
          <Feed />
        </div>
      </div>
    </>
  );
}

export default App;
