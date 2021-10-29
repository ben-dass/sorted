import SortedBody from "./Pages/SortedBody/SortedBody";
import { CategoriesProvider } from "./Contexts/CategoriesContext";

function App() {
  return (
    <CategoriesProvider>
      <SortedBody />
    </CategoriesProvider>
  );
}

export default App;
