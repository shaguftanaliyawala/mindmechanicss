// import { Brain, Mail, Instagram, Facebook, Linkedin } from "lucide-react"
// import Link from "next/link"

// export function Footer() {
//   return (
//     <footer className="border-t">
//       <div className="container py-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="space-y-3">
//             <Link href="/" className="flex items-center gap-2">
//               <Brain className="h-6 w-6" />
//               <span className="font-semibold">Mind Mechanics</span>
//             </Link>
//             <p className="text-sm text-muted-foreground">
//               Professional psychological care and counseling services for mental wellness and personal growth.
//             </p>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-3">Services</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
//                   Individual Therapy
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
//                   Couple Counseling
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
//                   Group Therapy
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-3">Company</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/therapist" className="text-sm text-muted-foreground hover:text-primary">
//                   Our Therapist
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-3">Social</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="mailto:mindmechanics09@gmail.com" className="flex items-center gap-2 hover:text-primary">
//                   <Mail className="w-4 h-4" /> Email
//                 </a>
//               </li>
//               <li>
//                 <a href="https://www.linkedin.com/in/shagufta-salman-naliyawala-344aa3231" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
//                   <Linkedin className="w-4 h-4" /> LinkedIn
//                 </a>
//               </li>
//               <li>
//                 <a href="https://www.facebook.com/mindmechanics09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
//                   <Facebook className="w-4 h-4" /> Facebook
//                 </a>
//               </li>
//               <li>
//                 <a href="https://www.instagram.com/mind_mechanics09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
//                   <Instagram className="w-4 h-4" /> Instagram
//                 </a>
//               </li>
              
//             </ul>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
//           <p>© {new Date().getFullYear()} Mind Mechanics. All rights reserved.</p>
//           <p>Developed by <a href="https://muhammadsami.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Muhammad Sami</a></p>
//         </div>
//       </div>
//     </footer>
//   )
// }

import { Brain, Mail, Instagram, Facebook, Linkedin, MapPin, Phone } from "lucide-react"
import Link from "next/link"
export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
                <Link href="/therapist" className="text-sm text-muted-foreground hover:text-primary">
                  Our Therapist
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
            <h3 className="font-semibold mb-3">Social</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:mindmechanics09@gmail.com" className="flex items-center gap-2 hover:text-primary">
                  <Mail className="w-4 h-4" /> Email
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shagufta-salman-naliyawala-344aa3231" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/mindmechanics09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mind_mechanics09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Visit Us</h3>
            <div>
  <div className="space-y-3 text-sm text-muted-foreground">
    {/* Address */}
    <div className="flex items-start gap-2">
      <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
      <p>
        Shop no.5 Plot.5-C Seher Commercial Lane 3,
        D.H.A. Phase 7, Karachi
      </p>
    </div>

    {/* PTCL */}
    <div className="flex items-center gap-2">
      <Phone className="w-4 h-4 shrink-0" />
      <a
        href="tel:021-XXXXXXX"
        className="hover:text-primary"
      >
        PTCL: 021-35840666
      </a>
    </div>

    {/* Mobile */}
    {/* <div className="flex items-center gap-2">
      <Phone className="w-4 h-4 shrink-0" />
      <a
        href="tel:03XX-XXXXXXX"
        className="hover:text-primary"
      >
        Phone: 03XX-XXXXXXX
      </a>
    </div> */}
  </div>
</div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mind Mechanics. All rights reserved.</p>
          <p>Developed by <a href="https://muhammadsami.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Muhammad Sami</a></p>
        </div>
      </div>
    </footer>
  )
}