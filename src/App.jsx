import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'
const App = () => {
  const [markdown, setMarkdown] = useState("## hello");
  return (
    <main>
      <section className="text">
        <textarea className="text-area" value={markdown} onChange={(e) => { setMarkdown(e.target.value) }}>

        </textarea>
      </section>
      <section className="result">
        <div className="markdown">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </section>
    </main>
  )
}

export default App
