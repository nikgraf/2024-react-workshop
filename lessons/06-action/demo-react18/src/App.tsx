import ErrorBoundary from "./ErrorBoundary";
import { UpdateName } from "./UpdateName";

function App() {
  return (
    <ErrorBoundary fallback={"Ops"}>
      <UpdateName />
    </ErrorBoundary>
  );
}

export default App;
