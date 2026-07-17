import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { WeldingHub } from './pages/WeldingHub'
import { WoodworkHub } from './pages/WoodworkHub'
import { ServiceDetail } from './pages/ServiceDetail'
import { Projects } from './pages/Projects'
import { Process } from './pages/Process'
import { About } from './pages/About'
import { FAQ } from './pages/FAQ'
import { Contact } from './pages/Contact'
import { Reviews } from './pages/Reviews'
import { Experience } from './pages/Experience'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="welding" element={<WeldingHub />} />
          <Route path="welding/:slug" element={<ServiceDetail kind="welding" />} />
          <Route path="woodwork" element={<WoodworkHub />} />
          <Route path="woodwork/:slug" element={<ServiceDetail kind="woodwork" />} />
          <Route path="projects" element={<Projects />} />
          <Route path="process" element={<Process />} />
          <Route path="about" element={<About />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="experience" element={<Experience />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
