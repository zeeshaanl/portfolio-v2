import { ArticleLayout } from '@/components/ArticleLayout'
import { Prose } from '@/components/Prose'
import { Resume } from '@/components/Resume'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Card } from '@/components/Card'

export default function Work() {
  const introText = "Currently accepting freelance web development projects."
  const subIntroText = "I've worked for 6+ years as a developer, I have a Bachelor's degree in Computer Science and an MBA, and I've worked as a project manager for digital products at a large pharma company"
  return (
    <SimpleLayout
        title="Work."
        intro={introText}
        subintro={subIntroText}
        >
      <Prose>
        <div>My favoured Tech Stack:</div>
        <div className="flex flex-wrap justify-start gap-6">
          <Card className="w-[300px]">
            <h2 className="mt-0">Languages</h2>
            <Card.Description>
              Javascript, Typescript, HTML, CSS
            </Card.Description>
          </Card>
          <Card className="w-[300px]">
            <h2 className="mt-0">Front-end frameworks</h2>
            <Card.Description>
              React.js, Redux, Mobx, Vue.js, Angular, TailwindCSS
            </Card.Description>
          </Card>
          <Card className="w-[300px]">
            <h2 className="mt-0">Back-end technologies</h2>
            <Card.Description>Node.js, Express.js, Next.js</Card.Description>
          </Card>
          <Card className="w-[300px]">
            <h2 className="mt-0">AWS</h2>
            <Card.Description>
              Lambda, DynamoDB, Cognito, S3, Amplify, EBS
            </Card.Description>
          </Card>
          <Card className="w-[300px]">
            <h2 className="mt-0">Databases</h2>
            <Card.Description>
              DynamoDB, Supabase, MongoDB, Elasticsearch, MySQL, PostgreSQL
            </Card.Description>
          </Card>
        </div>
      </Prose>
      <Resume />
    </SimpleLayout>
  )
}
