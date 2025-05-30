'use client'

import { useState } from 'react'

const resources = [
  {
    title: 'RAG (Retrieval-Augmented Generation)',
    summary: 'Use when you need the AI to answer questions based on content it doesn’t know, like PDFs or company docs.',
    details: 'RAG systems combine a retriever (to fetch relevant documents) and a generator (the LLM) to answer your question. Great for knowledge bases, helpdesks, or internal search.',
    link: 'https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/'
  },
  {
    title: 'Agent Workflows',
    summary: 'Use when your task has multiple steps or needs planning, memory, decision-making, or access to external tools.',
    details: 'Agentic systems can plan, break down, and retry complex tasks. They can work like a team and even utilize external tools for more capabilities! Examples include AutoGPT, LangGraph, or Autogen.',
    link: 'https://www.ibm.com/think/topics/agentic-workflows'
  },
  {
    title: 'Fine-Tuning Models',
    summary: 'Use when the base model isn’t good enough for your domain, tone, or style. When you need the AI to more reliably follow your specific requirements!',
    details: 'Fine-tuning means training the model further on your specific examples. It requires some data but gives high alignment with your needs.',
    link: 'https://www.ibm.com/think/topics/fine-tuning'
  },
]

export default function AdvancedAiOptions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section style={{ marginTop: '40px' }}>
      <h2>✨ When to Try More Advanced Tools</h2>
      <p>Here are situations where advanced LLM techniques might be worth exploring:</p>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {resources.map((item, i) => (
          <li
            key={i}
            style={{
              border: '1px solid #ddd',
              borderRadius: '6px',
              padding: '10px 16px',
              marginTop: '12px',
              backgroundColor: '#fcfcfc',
            }}
          >
            <button
              onClick={() => toggle(i)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                textAlign: 'left',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              {openIndex === i ? '▾' : '▸'} {item.title}
            </button>
            <p style={{ marginTop: '4px', fontStyle: 'italic' }}>{item.summary}</p>
            {openIndex === i && (
              <div style={{ marginTop: '8px' }}>
                <p>{item.details}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Learn more ↗
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '32px' }}>
        <h3>⚖️ Complexity vs. Control</h3>
        <p>
          Simple prompts are quick and flexible. But as tasks grow more specific or complex, more advanced methods offer more control — at the cost of time and setup.
        </p>
        <ul>
          <li>🟢 Prompting → minimal setup, fast results</li>
          <li>🔵 RAG → better factual accuracy with your data</li>
          <li>🟡 Agents → complex workflows, reasoning, autonomy</li>
          <li>🔴 Fine-Tuning → highest control, requires data + compute</li>
        </ul>
      </div>
    </section>
  )
}
