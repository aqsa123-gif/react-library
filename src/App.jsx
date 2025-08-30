import { Button, Card, Modal } from "./lib";
import { useState } from "react";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">UI Library Demo</h1>

      <Button label="Open Modal" onClick={() => setModalOpen(true)} />
      
      <Card title="My Card" description="This is a sample card." />

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <p>This is a modal content.</p>
      </Modal>
    </div>
  );
}

export default App;
