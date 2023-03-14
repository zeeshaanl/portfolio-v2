import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoMultiverse from '@/images/logos/multiverselogo.svg'
import logoGameaway from '@/images/logos/gameawaylogo.svg'
import logoFlashcard from '@/images/logos/flashcardlogo.svg'
import { Prose } from '@/components/Prose'
import { Section } from '@/components/Section'


const projects = [
  {
    name: 'Gameaway',
    description: 'Cloud gaming for AAA games with ultra-low latency.',
    link: { href: 'https://www.gameaway.in', label: 'gameaway.in' },
    logo: logoGameaway,
    techStack: 'React.js, AWS EC2, Lambda, DynamoDB, Cognito',
  },
  {
    name: 'TheMultiverseAI',
    description:
      'Create AI-generated avatars from regular pictures of yourself using Stable Diffusion.',
    link: { href: 'https://www.themultiverse.ai', label: 'themultiverse.ai' },
    logo: logoMultiverse,
    techStack: 'Next.js, React.js, TailwindCSS, AWS Lambda, DynamoDB',
  },
  {
    name: 'TranslationToFlashcard',
    description:
      'Android and iOS app to automatically create flashcards from words you translate.',
    link: { href: 'https://www.themultiverse.ai', label: 'themultiverse.ai' },
    logo: logoFlashcard,
    techStack: 'React-Native, Firebase, Google Cloud Functions',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects({ extraDetails = true }) {
  return (
    <>
      <Head>
        <title>Projects - Zeeshaan Lakdawala</title>
        <meta name="description" content="Things I've made." />
      </Head>
      <SimpleLayout
        title="Projects."
        // intro="My goal is to make products that people love ❤️."
      >
        {extraDetails && (
          <div>
            <Prose className="mb-8">
              Looking to build great projects that people love, with my&nbsp;
              <a target="_blank" href="https://www.anikakowalska.com">
                wife
              </a>{' '}
              and friends.
            </Prose>
            <Prose>
              Fascinated by the AI revolution and eager to build products using
              GPT-4, Whisper, and Stable Diffusion, among others
            </Prose>
          </div>
        )}
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>

              {extraDetails && (
                <div className="mt-4">
                  <Card.Description>
                    <h3>Tech Stack:</h3>
                    {project.techStack}
                  </Card.Description>
                </div>
              )}
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>

        {extraDetails && (
          <Prose className="mt-8">
            <h2>Other things I've done</h2>
            <ul role="list" className="space-y-2">
              <li className="mb-0">
                Served as Vice-President of Membership of the Hamburg Power
                Speakers, a <a target="_blank" href="https://www.toastmasters.org/">Toastmasters</a> club.
              </li>
              <li>
                Volunteered in Russia for 2 months on an <a target="_blank" href="https://aiesec.org/">AIESEC</a> internship, organising events to help
                locals learn English, where I met my <a target="_blank" href="https://www.anikakowalska.com">wife</a>
              </li>
              <li>
                Volunteered at the <a target="_blank" href="https://www.tiff.net//">Toronto International Film Festival</a> 2016,
                as a coordinator and an usher
              </li>
              <li>
                Founded a company selling slim wallets with the brand "Thinmann" on
                Amazon.de. Had them manufactured in China, shipped to Europe and fulfilled by Amazon
              </li>
              <li>
                Created an e-commerce store, "The Laptop Bags", curating a
                collection of laptop bags and drop-shipped to customers.
              </li>
            </ul>
          </Prose>
        )}
      </SimpleLayout>
    </>
  )
}
