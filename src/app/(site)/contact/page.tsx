import { Building2, Mail, Phone } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'

export const metadata: Metadata = {
  title: 'Contact Go Arif: Get in touch with our AI-powered data analytics platform',
  description:
    'Get in touch with Go Arif, your AI-powered data analyst. We help professionals, researchers, academics, and journalists unlock insights from their data. Reach out to us for support, sales, or general inquiries.',
}

export default function ContactPage() {
  return (
    <section className="container py-10 flex-1">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card className="p-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have questions about our data analytics services? We&apos;d love to hear from you.
              Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Building2 className="h-5 w-5 text-muted-foreground" />
              <span>
                Jl. Jend. Sudirman, Indonesia Stock Exchange, Tower 1, Level 3 Unit 304, Jakarta, DI
                Jakarta 12190, ID
              </span>
            </div>

            <Link href="mailto:care@goarif.co" className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span>care@goarif.co</span>
            </Link>

            <Link href="tel:+61435544559" className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span>+61 435 544 559</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
