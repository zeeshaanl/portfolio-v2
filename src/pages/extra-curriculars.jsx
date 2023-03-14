import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { ToolsSection } from '@/components/ToolsSection'
import Link from "next/link"
import { Prose } from "@/components/Prose"

export default function ExtraCurriculars() {
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
        intro="I teach Improv theater at workshops every 2 weeks, and perform at a show every month."
      >
        <div className="space-y-20">
          <ToolsSection title="Improv Workshops">
            <ToolsSection.Tool title="Park Kultur, Düsseldorf">
              <Prose>I host a drop-in session every 2 weeks in Düsseldorf. Join us through our <Link target="_blank" href="https://www.meetup.com/de-DE/english-improv-in-dusseldorf/">meetup group</Link></Prose>
            </ToolsSection.Tool>
          </ToolsSection>
          <ToolsSection title="Improv Show">
            <ToolsSection.Tool title="Kulturbanausen, Düsseldorf">
            <Prose>Perform a monthly show with Impromix, playing short form and the Harold.< br />
              Find the date of our next performance <Link target="_blank" href="hhttps://impromix.de/">here</Link></Prose>
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
