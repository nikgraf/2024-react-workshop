import ErrorBoundary from "./ErrorBoundary";
import { UpdateName } from "./UpdateName";

function App() {
  return (
    <>
      <h1>Workshop</h1>
      <ErrorBoundary fallback={"Ops"}>
        <UpdateName />
      </ErrorBoundary>
    </>
  );
}

export default App;
