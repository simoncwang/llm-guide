'use client'

import { useState } from 'react'

export default function CustomInput() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState<null | { method: string; reason: string; tips: string; complex: string}>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    setResponse(null)
    const res = await fetch('/api/suggest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userInput: input }),
    })
    const data = await res.json()
    setResponse(data)
    setLoading(false)
  }

  return (
    <section style={{ marginTop: '40px', padding: '20px', border: '2px dashed #ccc', borderRadius: '8px' }}>
      <h2>💬 Describe Your Use Case</h2>
      <p style={{fontStyle: 'italic' }}>This feature relies on using an LLM (gpt-4.1-nano) to give recommendations based on a crafted system prompt, but it is NOT perfect! It is still a good starting point, and the better and more in detail you can describe your use case the better the suggestion will be! NOTE: this feature uses my own API Key so please don&pos;t overuse it!</p>
      <textarea
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe what you're trying to do with AI..."
        style={{ width: '100%', marginTop: '10px', padding: '10px', fontSize: '16px', boxSizing: 'border-box' }}
      />
      <button onClick={handleSubmit} style={{ marginTop: '10px' }} disabled={loading}>
        {loading ? 'Thinking...' : 'Get Suggestion'}
      </button>

      {response && (
        <div style={{ marginTop: '20px' }}>
          <h3>✅ Recommendation</h3>
          <p><strong>{response.method}</strong></p>
          <p><strong>Why:</strong> {response.reason}</p>
          <p><strong>Tips:</strong> {response.tips}</p>
          <p><strong>More complex option:</strong> {response.complex}</p>
        </div>
      )}
    </section>
  )
}
