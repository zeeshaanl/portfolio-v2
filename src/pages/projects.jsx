import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoMultiverse from '@/images/logos/multiverselogo.svg'
import logoGameaway from '@/images/logos/gameawaylogo.png'
import logoFlashcard from '@/images/logos/flashcardlogo.png'
import { Prose } from '@/components/Prose'
import { Section } from '@/components/Section'
import { Photos } from "@/components/Photos"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import logoInfluencerAI from '/public/TheInfluencerAILogo.png'

const projects = [
  {
    name: 'The Influencer AI',
    description:
        'Create photo and video content in minutes with the world\'s best AI influencer platform.',
    link: { href: 'https://www.theinfluencer.ai', label: 'theinfluencer.ai' },
    logo: logoInfluencerAI,
    techStack: 'Next.js, TailwindCSS, Supabase, PostgreSQL, Vercel',
  },
  {
    name: 'The Multiverse AI',
    description:
        'Turn your selfies into professional headshots with our premier AI headshot generator.',
    link: { href: 'https://www.themultiverse.ai', label: 'themultiverse.ai' },
    logo: logoMultiverse,
    techStack: 'Next.js, TailwindCSS, AWS Lambda, DynamoDB',
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
        <meta name="description" content="My micro-startups and other achievements." />
      </Head>
      <SimpleLayout
        title="Projects."
        intro=""
        subintro=""
      >
        {extraDetails && (
          <div className="mb-12">
            <Prose className="mb-8">
              Looking to build great projects that people love, with my wife and friends.
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
                  className="h-8 w-8 rounded-full"
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
                    <span>Tech Stack: </span>
                    {project.techStack}
                  </Card.Description>
                </div>
              )}
              <div className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </div>
            </Card>
          ))}
        </ul>

        {extraDetails && (
          <Prose className="mt-20 lg:mt-24">
            <h2>Other things I&apos;ve done</h2>
            <ul role="list" className="space-y-2">
              <li className="mb-0">
                Served as Vice-President of Membership of the Hamburg Power
                Speakers, a <Link target="_blank" href="https://www.toastmasters.org">Toastmasters</Link> club.
              </li>
              <li>
                Volunteered in Russia for 2 months on an <Link target="_blank" href="https://aiesec.org">AIESEC</Link> internship, organising events to help
                locals learn English, where I met my <Link target="_blank" href="https://www.anikakowalska.com">wife</Link>
              </li>
              <li>
                Volunteered at the <Link target="_blank" href="https://www.tiff.net">Toronto International Film Festival</Link> 2016,
                as a coordinator and an usher
              </li>
              <li>
                Founded a company selling slim wallets with the brand &quot;Thinmann&quot; on
                Amazon.de. Had them manufactured in China, shipped to Europe and fulfilled by Amazon
              </li>
              <li>
                Created an e-commerce store, &quot;The Laptop Bags&quot;, curating a
                collection of laptop bags and drop-shipped to customers.
              </li>
            </ul>
          </Prose>
        )}

        {extraDetails && <Photos />}
      </SimpleLayout>
    </>
  )
}
