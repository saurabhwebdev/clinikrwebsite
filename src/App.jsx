import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StoryIntro from './components/StoryIntro'
import Solution from './components/Solution'
import PatientModule from './components/PatientModule'
import AppointmentsModule from './components/AppointmentsModule'
import EMRModule from './components/EMRModule'
import BillingModule from './components/BillingModule'
import POSModule from './components/POSModule'
import InventoryModule from './components/InventoryModule'
import Workflow from './components/Workflow'
import Dashboard from './components/Dashboard'
import WhyCliniker from './components/WhyCliniker'
import Settings from './components/Settings'
import TechStack from './components/TechStack'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StoryIntro />
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
      <CTA />
      <Footer />
    </>
  )
}

export default App
