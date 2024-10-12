import { Bolt, Devices, Image, TapAndPlay, VerifiedUser, WifiTetheringOff } from '@mui/icons-material'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function Features() {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
        <div className="text-center mx-8 mb-8">
          LANDrop automatically detects other devices running LANDrop on the same Wi-Fi network, so you don’t need to enter IP addresses manually. Unlike other apps, there’s no need to set up a server. LANDrop handles everything behind the scenes—just like AirDrop, but cross-platform.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Devices className="mr-2 h-4 w-4" /> Cross-Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We mean it—iOS, Android, macOS, Windows, Linux, Android TV, and more. LANDrop works seamlessly across all major platforms.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Bolt className="mr-2 h-4 w-4" /> Ultra-Fast & Secure</CardTitle>
            </CardHeader>
            <CardContent>
              <p>LANDrop uses advanced protocols to deliver line-rate transfer speeds along with military-grade encryption and authentication for top-notch security.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><WifiTetheringOff className="mr-2 h-4 w-4" /> No Data Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <p>On the go? No worries—LANDrop works with your personal hotspot, without using cellular data.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Image className="mr-2 h-4 w-4" /> Lossless Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p>LANDrop transfers your photos and videos without any compression, ensuring they remain high quality.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><TapAndPlay className="mr-2 h-4 w-4" /> Nearby Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>LANDrop can detect nearby devices even if they’re not on the same Wi-Fi network. Using WebRTC, it enables file transfers to those devices.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><VerifiedUser className="mr-2 h-4 w-4" /> Trusted Devices</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Add trusted devices in LANDrop and automatically accept file transfers from them without needing approval each time.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Features
