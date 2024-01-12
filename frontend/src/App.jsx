import { Home, Navbar, Sidebar, Feed , Login ,Register} from "./components";

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
          <Login />
          <Register />
        </div>
      </div>
    </>
  );
}

export default App;
