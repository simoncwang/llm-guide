'use client'

import { useState } from 'react'

type Step = {
  question: string
  options: { label: string; nextStep?: number; result?: string; reason?: string; tips?: string }[]
}

const steps: Step[] = [
  {
    question: '🤔 What do you want the AI to do?',
    options: [
      {
        label: 'Answer a simple question',
        result: 'Single-Shot Prompting ✨',
        reason: 'This is the fastest and simplest way to get answers from an AI — perfect for fact-based or one-off questions.',
        tips: 'Just type your question directly into ChatGPT or another chatbot. You don’t need to provide examples or context.'
      },
      {
        label: 'Write or rewrite something (email, caption, ad)',
        nextStep: 1
      },
      {
        label: 'Ask questions about my documents',
        result: 'RAG (Retrieval-Augmented Generation) 🤖',
        reason: 'AI doesn’t always “know” your personal files — RAG connects it with your own knowledge base to find accurate answers.',
        tips: 'You can try tools like ChatGPT with “custom files,” or use apps like LangChain or LlamaIndex to build a simple document search bot.'
      },
      {
        label: 'Automate a multi-step task (e.g. research + summarize + email)',
        result: 'Multi-Step Agent Workflow ⚙️',
        reason: 'This lets the AI plan and act across multiple steps — useful for research, generating code, or decision-making.',
        tips: 'Tools like AutoGPT or LangGraph let you build workflows that simulate a team of AIs working together.'
      },
      {
        label: 'Teach the AI my tone, knowledge, or domain',
        result: 'Fine-Tuning or Custom Model 🧪',
        reason: 'When standard models don’t perform well in your specific context, fine-tuning trains the model on your examples for better alignment.',
        tips: 'You’ll need a dataset of labeled examples. Services like OpenAI fine-tuning or Hugging Face tools make this accessible.'
      },
    ],
  },
  {
    question: 'Do you want to give examples or format the answer?',
    options: [
      {
        label: 'Yes',
        result: 'Few-Shot or Chain-of-Thought Prompting 🔄',
        reason: 'When a single prompt isn’t enough, a few examples or “think step-by-step” instructions can improve quality and accuracy.',
        tips: 'Try giving 2–3 examples directly in your prompt or ask the model to “explain before answering.”'
      },
      {
        label: 'No, just one-shot (i.e. no examples) is fine',
        result: 'Single-Shot Prompting ✨',
        reason: 'Quickest and most lightweight — perfect when you don’t need format control or reasoning chains.',
        tips: 'Try phrasing your request like a clear command or question, e.g., “Summarize this email.”'
      },
    ],
  },
]

export default function StepGuide() {
  const [stepIndex, setStepIndex] = useState(0)
  const [result, setResult] = useState<string | null>(null)
  const [reason, setReason] = useState<string | null>(null)
  const [tips, setTips] = useState<string | null>(null)

  const handleOption = (option: Step['options'][0]) => {
    if (option.result) {
      setResult(option.result)
      setReason(option.reason || null)
      setTips(option.tips || null)
    } else if (option.nextStep !== undefined) {
      setStepIndex(option.nextStep)
    }
  }

  const reset = () => {
    setStepIndex(0)
    setResult(null)
    setReason(null)
    setTips(null)
  }

  return (
    <section
        style={{
        marginTop: '32px',
        border: '2px solid #d0eaff',
        borderRadius: '10px',
        padding: '20px',
        backgroundColor: '#f9fcff',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
        }}
    >
        {result ? (
        <div>
            <h2>✅ Recommended Approach</h2>
            <h3><strong>{result}</strong></h3>
            {reason && <p><strong>Why this works:</strong> {reason}</p>}
            {tips && <p><strong>Tips to try:</strong> {tips}</p>}
            <button onClick={reset}>🔄 Start Over</button>
        </div>
        ) : (
        <div>
            <h2>{steps[stepIndex].question}</h2>
            <p style={{fontStyle: 'italic' }}>These are just some common use cases to give a good basic guide for what different LLM-based approaches are good for. If you have a more unique use case, try out the custom input feature below that uses an LLM to give you suggestions!</p>
            {steps[stepIndex].options.map((opt, i) => (
            <button key={i} onClick={() => handleOption(opt)}>
                {opt.label}
            </button>
            ))}
        </div>
        )}
    </section>
    )
}
