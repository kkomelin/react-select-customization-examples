import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Examples from './components/Examples'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className='top-links'>
          <a
            style={{ color: 'darkcyan', textAlign: 'center' }}
            href="https://komelin.com/..."
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Tutorial
          </a>
          <a
            style={{ color: 'darkcyan', textAlign: 'center' }}
            href="https://github.com/kkomelin/nextjs-image-optimization-examples"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Github
          </a>
        </div>

        <h1>React Select Customization Examples</h1>

        <Examples />
      </div>
    </QueryClientProvider>
  )
}

export default App
