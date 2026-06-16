import { Routes, Route } from 'react-router'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Insurance from './pages/Insurance'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import AdminLayout from './pages/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'
import AdminContent from './pages/AdminContent'
import AdminMessages from './pages/AdminMessages'
import AdminSettings from './pages/AdminSettings'

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col" style={{ background: 'var(--cream)', color: 'var(--ink)' }}>
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainLayout />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
      <Route path="/admin/content" element={<AdminLayout><AdminContent /></AdminLayout>} />
      <Route path="/admin/messages" element={<AdminLayout><AdminMessages /></AdminLayout>} />
      <Route path="/admin/settings" element={<AdminLayout><AdminSettings /></AdminLayout>} />
    </Routes>
  )
}
