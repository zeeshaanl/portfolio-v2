import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import {Button} from '@/components/Button'
import {Card} from '@/components/Card'
import {Container} from '@/components/Container'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
} from '@/components/SocialIcons'

import {formatDate} from '@/lib/formatDate'
import {generateRssFeed} from '@/lib/generateRssFeed'
import {getAllArticles} from '@/lib/getAllArticles'
import {TwitterBlock} from '@/components/TwitterBlock'
import Projects from './projects'
import {Photos} from '@/components/Photos'
import {Prose} from '@/components/Prose'

function MailIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function BriefcaseIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function ArrowDownIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function Article({article}) {
    return (
        <Card as="article">
            <Card.Title href={`/articles/${article.slug}`}>
                {article.title}
            </Card.Title>
            <Card.Eyebrow as="time" dateTime={article.date} decorate>
                {formatDate(article.date)}
            </Card.Eyebrow>
            <Card.Description>{article.description}</Card.Description>
            <Card.Cta>Read article</Card.Cta>
        </Card>
    )
}

function SocialLink({icon: Icon, ...props}) {
    return (
        <Link target="_blank" className="group -m-1 p-1" {...props}>
            <Icon
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
        </Link>
    )
}

function Newsletter() {
    return (
        <form
            action="/thank-you"
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
        >
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <MailIcon className="h-6 w-6 flex-none"/>
                <span className="ml-3">Stay up to date</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Get notified when I publish something new, and unsubscribe at any time.
            </p>
            <div className="mt-6 flex">
                <input
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    required
                    className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                />
                <Button type="submit" className="ml-4 flex-none">
                    Join
                </Button>
            </div>
        </form>
    )
}

export default function Home({articles}) {
    return (
        <>
            <Head>
                <title>
                    Zeeshaan Lakdawala - Indie Hacker, Web developer, and technology
                    enthusiast
                </title>
                <meta
                    name="description"
                    content="I&apos;m Zeeshaan, a front-end and full-stack developer and entrepreneur, based in Düsseldorf."
                />
            </Head>
            <Container className="mt-9">
                <div className="max-w-2xl">
                    <div>
                        <Image className="pb-8 sm:py-10 h-auto w-[120px] sm:w-[150px]" src="/avatarNew.webp" alt="avatar" width={150} height={150}/>
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                            👋 Hi, I&apos;m Zeeshaan.
                        </h1>
                        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
                            Freelance web developer 🌐, building useful tech products 🛠️,
                            aiming for happy customers 😊 and financial independence 🚀.
                        </p>
                        {/* <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Based in Düsseldorf, Germany 🇩🇪.
          </p> */}


                        <div className="mt-6 flex gap-6">
                            {/* <TwitterBlock /> */}
                            <SocialLink
                                href="https://twitter.com/zeeshaanl"
                                aria-label="Follow on Twitter"
                                icon={TwitterIcon}
                            />
                            <SocialLink
                                href="https://github.com/zeeshaanl"
                                aria-label="Follow on GitHub"
                                icon={GitHubIcon}
                            />
                            {/* <SocialLink
                  href="https://instagram.com"
                  aria-label="Follow on Instagram"
                  icon={InstagramIcon}
                />

                <SocialLink
                  href="https://www.linkedin.com/in/zeeshaan-lakdawala-2b8b712b/"
                  aria-label="Follow on LinkedIn"
                  icon={LinkedInIcon}
                /> */}
                        </div>
                    </div>
                </div>

                <Prose>
                    <div className="mt-14 text-lg text-zinc-600 dark:text-zinc-400 flex flex-col gap-4">
                        <div>Open to freelance web development projects, see my <Link href="/work">work skills.</Link>
                        </div>
                        <div>Currently working as Co-founder and CTO at TheMultiverseAI</div>
                        <div>Check out my <Link href="/projects">projects.</Link></div>
                        <div>I play and teach <Link href="/improv-theater">improvisation theater.</Link></div>
                        <div>Based in Düsseldorf, Germany 🇩🇪.</div>
                    </div>
                </Prose>
            </Container>
            {/* <Projects extraDetails={false} /> */}
            {/* <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container> */}
        </>
    )
}

export async function getStaticProps() {
    if (process.env.NODE_ENV === 'production') {
        await generateRssFeed()
    }

    return {
        props: {
            articles: (await getAllArticles())
                .slice(0, 4)
                .map(({component, ...meta}) => meta),
        },
    }
}
