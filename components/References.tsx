'use client'

const referenceGroups = [
  {
    category: '📘 Learning & Tutorials',
    items: [
        {
            name: 'Prompt Engineering Guide',
            url: 'https://www.promptingguide.ai/'
        },
      {
        name: 'NVIDIA Blog: What Is Retrieval-Augmented Generation, aka RAG?',
        url: 'https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/'
      },
      {
        name: 'IBM: Components of agentic workflows',
        url: 'https://www.ibm.com/think/topics/agentic-workflows'
      },
      {
        name: 'IBM: What is fine-tuning?',
        url: 'https://www.ibm.com/think/topics/fine-tuning'
      },
      {
        name: 'Understanding Agentic AI Systems for Data Analysis (my paper <3)',
        url: 'https://simoncwang.github.io/documents/Understanding_Agentic_AI_Systems_for_Data_Analysis.pdf'
      },
        
    ]
  },
  {
    category: '🧰 Frameworks & Tools',
    items: [
    {
        name: 'ChatGPT',
        url: 'https://chatgpt.com/'
      },
      {
        name: 'LangChain Documentation',
        url: 'https://docs.langchain.com/'
      },
      {
        name: 'LlamaIndex Docs',
        url: 'https://docs.llamaindex.ai/'
      },
      {
        name: 'Microsoft Autogen',
        url: 'https://www.microsoft.com/en-us/research/project/autogen/'
      }
    ]
  }
]

export default function References() {
  return (
    <section style={{ marginTop: '40px' }}>
      <h2>📚 References & Learning Resources</h2>
      {referenceGroups.map((group, i) => (
        <div key={i} style={{ marginBottom: '24px' }}>
          <h3>{group.category}</h3>
          <ul style={{ paddingLeft: '20px' }}>
            {group.items.map((ref, j) => (
              <li key={j} style={{ marginBottom: '8px' }}>
                <a href={ref.url} target="_blank" rel="noopener noreferrer">
                  {ref.name} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
