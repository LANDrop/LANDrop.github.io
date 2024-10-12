import { useTranslation } from 'react-i18next'

import SocialMediaBar from '@/components/SocialMediaBar'
import { Button } from '@/components/ui/button'

function NavBar() {
  const { t } = useTranslation()
  const navBarItems = [
    'features',
    'downloads',
    'faq',
    'privacy'
  ]

  return (
    <nav className="border-b">
      <div className="container px-3 md:px-0 mx-auto flex justify-between items-center py-3">
        <div className="flex items-center space-x-3">
          <img src="/assets/favicon/favicon.svg" alt="LANDrop" className="w-8 h-8" />
          <h1 className="text-2xl font-medium">LANDrop</h1>
        </div>
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center">
            {navBarItems.map((item) => (
              <Button variant="ghost" key={item} onClick={() => document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })}>{t(item)}</Button>
            ))}
          </div>
          <SocialMediaBar />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
