import { Bolt, Devices, Image, TapAndPlay, VerifiedUser, WifiTetheringOff } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function Features() {
  const { t } = useTranslation()

  const features = [
    {
      icon: <Devices className="mr-2 h-4 w-4" />,
      title: t('crossPlatform'),
      description: t('crossPlatformDetails'),
    },
    {
      icon: <Bolt className="mr-2 h-4 w-4" />,
      title: t('ultraFastSecure'),
      description: t('ultraFastSecureDetails'),
    },
    {
      icon: <WifiTetheringOff className="mr-2 h-4 w-4" />,
      title: t('noDataUsage'),
      description: t('noDataUsageDetails'),
    },
    {
      icon: <Image className="mr-2 h-4 w-4" />,
      title: t('losslessTransfers'),
      description: t('losslessTransfersDetails'),
    },
    {
      icon: <TapAndPlay className="mr-2 h-4 w-4" />,
      title: t('nearbySharing'),
      description: t('nearbySharingDetails'),
    },
    {
      icon: <VerifiedUser className="mr-2 h-4 w-4" />,
      title: t('trustedDevices'),
      description: t('trustedDevicesDetails'),
    },
  ]

  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('features')}</h2>
        <div className="text-center mx-8 mb-8">
          {t('featuresDetails')}
        </div>
        <div className="grid grid-cols-1 mx-4 md:mx-0 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle className="flex items-center">{feature.icon} {feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
