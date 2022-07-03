import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Examples from './components/Examples';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React Select Examples</h1>

        <Examples />
      </div>
    </QueryClientProvider>
  );
}

export default App;
