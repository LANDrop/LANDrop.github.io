import { DownloadIcon, GlobeIcon, HeartIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="flex justify-center h-[420px]">
        <img src="/assets/img/screenshot-macos.png" className="object-contain" />
        <img src="/assets/img/screenshot-iphone.png" className="object-contain" />
      </div>
      <h2 className="text-4xl font-bold mb-2">LANDrop</h2>
      <p className="text-xl mb-4">Drop any files to any devices on your LAN</p>
      <div className="flex justify-center space-x-2">
        <Button onClick={() => document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' })}>
          <DownloadIcon className="mr-2 h-4 w-4" /> Download Now
        </Button>
        <Button variant="outline" onClick={() => window.open('https://discord.gg/5adm6sPugT', '_blank')}>
          <GlobeIcon className="mr-2 h-4 w-4" /> Community
        </Button>
        <Button variant="outline" onClick={() => window.open('https://www.buymeacoffee.com/LANDrop', '_blank')}>
          <HeartIcon className="mr-2 h-4 w-4" /> Donate
        </Button>
      </div>
    </section>
  )
}

export default Hero
