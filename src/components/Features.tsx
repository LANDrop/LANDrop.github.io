import { Bolt, Devices, Image, TapAndPlay, VerifiedUser, WifiTetheringOff } from '@mui/icons-material'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function Features() {
  const features = [
    {
      icon: <Devices className="mr-2 h-4 w-4" />,
      title: "Cross-Platform",
      description: "We mean it—iOS, Android, macOS, Windows, Linux, Android TV, and more. LANDrop works seamlessly across all major platforms.",
    },
    {
      icon: <Bolt className="mr-2 h-4 w-4" />,
      title: "Ultra-Fast & Secure",
      description: "LANDrop uses advanced protocols to deliver line-rate transfer speeds along with military-grade encryption and authentication for top-notch security.",
    },
    {
      icon: <WifiTetheringOff className="mr-2 h-4 w-4" />,
      title: "No Data Usage",
      description: "On the go? No worries—LANDrop works with your personal hotspot, without using cellular data.",
    },
    {
      icon: <Image className="mr-2 h-4 w-4" />,
      title: "Lossless Transfers",
      description: "LANDrop transfers your photos and videos without any compression, ensuring they remain high quality.",
    },
    {
      icon: <TapAndPlay className="mr-2 h-4 w-4" />,
      title: "Nearby Sharing",
      description: "LANDrop can detect nearby devices even if they're not on the same Wi-Fi network. Using WebRTC, it enables file transfers to those devices.",
    },
    {
      icon: <VerifiedUser className="mr-2 h-4 w-4" />,
      title: "Trusted Devices",
      description: "Add trusted devices in LANDrop and automatically accept file transfers from them without needing approval each time.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
        <div className="text-center mx-8 mb-8">
          LANDrop automatically detects other devices running LANDrop on the same Wi-Fi network, so you don't need to enter IP addresses manually. Unlike other apps, there's no need to set up a server. LANDrop handles everything behind the scenes—just like AirDrop, but cross-platform.
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
