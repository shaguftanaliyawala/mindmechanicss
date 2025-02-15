import { Brain, Mail, Instagram, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <Brain className="h-6 w-6" />
              <span className="font-semibold">Mind Mechanics</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional psychological care and counseling services for mental wellness and personal growth.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Individual Therapy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Couple Counseling
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Group Therapy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-sm text-muted-foreground hover:text-primary">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex space-x-6">
            <a href="mailto:mindmechanics09@gmail.com" className="flex items-center gap-2 hover:text-primary">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href="https://www.instagram.com/mindmechanics09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href="https://www.facebook.com/mindmechanics09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
              <Facebook className="w-4 h-4" /> Facebook
            </a>
            <a href="https://www.linkedin.com/in/shagufta-salman-naliyawala-344aa3231/?fbclid=IwY2xjawIctUtleHRuA2FlbQIxMAABHadG1x6z2CGNZOEH6PEy4xxN0EpOfZ33vom7MLSHUCOICBwSYVvOyjHE_w_aem_MuTG2A9A_SS12kyfDcwDHg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <p>© {new Date().getFullYear()} Mind Mechanics. All rights reserved.</p>
            <p>Developed by Muhammad Sami</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
