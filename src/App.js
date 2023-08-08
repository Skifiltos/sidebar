import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Modal from "./Modal";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Modal />
      <main className="modal-controller">
        <button className="btn btn-selector">Apri Modal</button>
      </main>
    </>
  );
}

export default App;
