import MainRoutes from "./Routes";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <MainRoutes />
      </TodoContextProvider>
    </div>
  );
}

export default App;
