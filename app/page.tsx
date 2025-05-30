import AdvancedAiOptions from '@/components/AdvancedOptions'
import StepGuide from '@/components/StepGuide'
import References from '@/components/References'
import CustomInput from '@/components/CustomInput'

export default function Home() {
  return (
    <main>
      <h1>🧠 LLM Use Case Guide</h1>
      <p style={{fontStyle: 'italic' }}>Simon Wang | <a style={{textDecoration: 'none' }} href="https://simoncwang.github.io/" target="_blank">🌐 Checkout my Website!</a></p>
      <p>
        Want to use AI for a task but not sure where to start? This quick guide helps you <b>choose the simplest approach</b> for your needs. It&apos;s best practice to start with the easiest method that works, then explore more advanced options if needed to avoid wasted effort!
      </p>
      <p>
        These are <b>general recommendations</b> and aren&apos;t absolute guidelines to every use case! This guide is meant as a good starting point to figure out what tool to try, but you might find your specific use case or preferences to be a bit different.
      </p>
      <p>
        And that&apos;s perfect! <b>Using AI is all about creativity and ingenuity</b>, the more deeply you understand your use case and requirements, the better you can leverage this powerful tool in unique ways! 🤩
      </p>
      <StepGuide />
      <CustomInput />
      <AdvancedAiOptions />
      <References />
    </main>
  )
}
