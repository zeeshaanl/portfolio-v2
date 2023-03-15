import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { ToolsSection } from '@/components/ToolsSection'
import Link from 'next/link'
import { Prose } from '@/components/Prose'
import Image from 'next/image'
import workshop1 from '@/images/photos/workshop1.jpeg'
import workshop2 from '@/images/photos/workshop2.jpeg'
import show1 from '@/images/photos/show1.jpeg'
import show2 from '@/images/photos/show2.jpeg'
import { Footer } from "@/components/Footer"

export default function ImprovTheater() {
  return (
    <>
      <Head>
        <title>Uses - Zeeshaan Lakdawala</title>
        <meta
          name="description"
          content="Improvisation Theater performer and instructor."
        />
      </Head>
      <SimpleLayout
        title="Improv teacher and instructor."
        intro="I teach Improv theater 👨‍🏫 at regular workshops, and perform at a show 🎭 every month."
      >
        <div className="mt-16 sm:mt-20 space-y-20">
          <ToolsSection title="Improv Workshops 👨‍🏫">
            <ToolsSection.Tool title="Park Kultur, Düsseldorf">
              <Prose>
                I host a drop-in session every 2 weeks in Düsseldorf. Join us
                through our{' '}
                <Link
                  target="_blank"
                  href="https://www.meetup.com/de-DE/english-improv-in-dusseldorf/"
                >
                  meetup group
                </Link>
                <Image src={workshop1} alt="improv workshop photo" />
                <Image src={workshop2} alt="improv workshop photo two" />
              </Prose>
            </ToolsSection.Tool>
          </ToolsSection>
          <ToolsSection title="Improv Show 🎭">
            <ToolsSection.Tool title="Kulturbanausen, Düsseldorf">
              <Prose>
                Perform a monthly show with Impromix, playing short form and the
                Harold.
                <br />
                Find the date of our next performance{' '}
                <Link target="_blank" href="https://impromix.de/">
                  here
                </Link>
                <Image src={show1} alt="improv show photo" />
                <Image src={show2} alt="improv show photo two" />
              </Prose>
            </ToolsSection.Tool>
            <ToolsSection.Tool title="Previously at Bar Mathilda, Hamburg">
              2017-2019 Performed with Chicken Cake Improv
            </ToolsSection.Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
