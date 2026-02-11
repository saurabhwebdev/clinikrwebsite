import SEO from '../components/SEO'
import Hero from '../components/Hero'
import WaveDivider from '../components/WaveDivider'
import StoryIntro from '../components/StoryIntro'
import Solution from '../components/Solution'
import PatientModule from '../components/PatientModule'
import AppointmentsModule from '../components/AppointmentsModule'
import EMRModule from '../components/EMRModule'
import BillingModule from '../components/BillingModule'
import POSModule from '../components/POSModule'
import InventoryModule from '../components/InventoryModule'
import Workflow from '../components/Workflow'
import Dashboard from '../components/Dashboard'
import WhyCliniker from '../components/WhyCliniker'
import Settings from '../components/Settings'
import TechStack from '../components/TechStack'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <WaveDivider from="var(--bg)" to="var(--surface)" />
      <StoryIntro />
      <WaveDivider from="var(--surface)" to="var(--bg)" />
      <Solution />
      <PatientModule />
      <AppointmentsModule />
      <EMRModule />
      <BillingModule />
      <POSModule />
      <InventoryModule />
      <Workflow />
      <Dashboard />
      <WhyCliniker />
      <Settings />
      <TechStack />
      <WaveDivider from="var(--bg)" to="var(--bg)" />
      <CTA />
    </>
  )
}
