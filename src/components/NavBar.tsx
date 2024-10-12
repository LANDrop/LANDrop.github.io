import SocialMediaBar from '@/components/SocialMediaBar'
import { Button } from '@/components/ui/button'

function NavBar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="flex items-center space-x-3">
          <img src="/assets/favicon/favicon.svg" alt="LANDrop" className="w-8 h-8" />
          <h1 className="text-2xl font-medium">LANDrop</h1>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Button variant="ghost" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>Features</Button>
            <Button variant="ghost" onClick={() => document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' })}>Downloads</Button>
            <Button variant="ghost" onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}>FAQ</Button>
            <Button variant="ghost" onClick={() => document.getElementById('privacy')?.scrollIntoView({ behavior: 'smooth' })}>Privacy</Button>
          </div>
          <SocialMediaBar />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
