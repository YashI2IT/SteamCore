import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Founder from './pages/Founder.jsx'
import Industries from './pages/Industries.jsx'
import WhyChooseUs from './pages/WhyChooseUs.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Services from './pages/Services.jsx'
import Training from './pages/Training.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import Terms from './pages/Terms.jsx'
import Privacy from './pages/Privacy.jsx'
import Cookies from './pages/Cookies.jsx'
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Route>
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  )
}
