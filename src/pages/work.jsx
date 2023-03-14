import { Resume } from '@/components/Resume'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function Work() {
  return (
    <SimpleLayout>
      <p>Currently accepting Freelance projects.</p>
      <p>
        <h2>Proficient in the following Stack: </h2>
        
        Languages: Javascript, Typescript, HTML, CSS
        
        Front-end frameworks: React.js, Redux, Mobx, Vue.js,
        Angular, TailwindCSS
        
        Back-end technologies: Node.js, Express.js,
        Next.js
        
        AWS: Lambda, DynamoDB, Cognito, S3, Amplify, EBS
        
        Databases: DynamoDB, MongoDB, Elasticsearch, MySQL, PostgreSQL
      </p>
      <Resume />
    </SimpleLayout>
  )
}
