import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Prose } from '@/components/Prose'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Uses - Zeeshaan Lakdawala</title>
        <meta name="description" content="Get in touch with me." />
      </Head>
      <SimpleLayout
        title="Say Hi 🙋‍♂️"
        // intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="flex flex-col gap-6">
          <Prose>
            Email me at {' '}
            <Link target="_blank" href="mailto:zeeshaanl@gmail.com ">
              zeeshaanl@gmail.com
            </Link>{' '}
            ✉️
          </Prose>
          <Prose>
            Follow me on {' '}
            <Link target="_blank" href="https://twitter.com/zeeshaanl">
            Twitter
            </Link>
          </Prose>
          <Prose>
            Stalk me on {' '}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/zeeshaan-lakdawala-2b8b712b/"
            >
              Linkedin
            </Link>
          </Prose>
        </div>
      </SimpleLayout>
    </>
  )
}
