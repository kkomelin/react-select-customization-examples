import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Examples from './components/Examples'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <a
          style={{ color: 'darkcyan', textAlign: 'center' }}
          href="https://komelin.com/..."
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Tutorial
        </a>
        <h1>React Select Customization Examples</h1>

        <Examples />
      </div>
    </QueryClientProvider>
  )
}

export default App
