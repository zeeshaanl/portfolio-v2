import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Prose } from "@/components/Prose"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Uses - Zeeshaan Lakdawala</title>
        <meta
          name="description"
          content="Get in touch with me."
        />
      </Head>
      <SimpleLayout
        title="Say Hi."
        // intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <Prose>
        At{' '}
        <a href="mailto:zeeshaanl@gmail.com ">zeeshaanl@gmail.com</a>
        </Prose>
      </SimpleLayout>
    </>
  )
}
