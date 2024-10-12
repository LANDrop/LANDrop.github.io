import { DownloadIcon, GlobeIcon, HeartIcon } from '@radix-ui/react-icons'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'

function Hero() {
  const { t } = useTranslation()

  return (
    <section className="py-20 text-center">
      <div className="flex justify-center h-[420px] mb-2 md:mb-0">
        <img src="/assets/img/screenshot-macos.png" className="hidden md:block object-contain" />
        <img src="/assets/img/screenshot-iphone.png" className="object-contain" />
      </div>
      <h2 className="text-4xl font-bold mb-2">LANDrop</h2>
      <p className="text-xl mb-4 px-4 md:px-0">{t('appSubTitle')}</p>
      <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-2">
        <div className="flex justify-center">
          <Button onClick={() => document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' })}>
            <DownloadIcon className="mr-2 h-4 w-4" /> {t('downloadNow')}
          </Button>
        </div>
        <div className="flex justify-center space-x-2">
          <Button variant="outline" onClick={() => window.open('https://discord.gg/5adm6sPugT', '_blank')}>
            <GlobeIcon className="mr-2 h-4 w-4" /> {t('community')}
          </Button>
          <Button variant="outline" onClick={() => window.open('https://www.buymeacoffee.com/LANDrop', '_blank')}>
            <HeartIcon className="mr-2 h-4 w-4" /> {t('donate')}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
