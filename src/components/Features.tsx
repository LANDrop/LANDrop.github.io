import { Bolt, Devices, Image, TapAndPlay, VerifiedUser, WifiTetheringOff } from '@mui/icons-material'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function Features() {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
        <div className="text-center mx-8 mb-8">
          LANDrop automatically discovers other devices running LANDrop under the same Wi-Fi network, so you don't have to type in the IP address yourself. Moreover, you don't have to setup a server like using other apps. LANDrop does all the dirty work by itself under the hood. It's just like AirDrop, but cross-platform.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Devices className="mr-2 h-4 w-4" /> All-Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p>When we say it, we mean it. iOS, Android, macOS, Windows, Linux, Android TV, name yours.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Bolt className="mr-2 h-4 w-4" /> Ultra Fast & Secure</CardTitle>
            </CardHeader>
            <CardContent>
              <p>LANDrop uses state-of-the-art protocol to provide you with up to line rate transfer speed and military-grade encryption and authentication.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><WifiTetheringOff className="mr-2 h-4 w-4" /> No Cellular Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Outside? No problem. LANDrop can work on your personal hotspot, without consuming cellular data.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Image className="mr-2 h-4 w-4" /> No Compression</CardTitle>
            </CardHeader>
            <CardContent>
              <p>LANDrop does not compress your photos and videos when sending.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><TapAndPlay className="mr-2 h-4 w-4" /> Nearby Share</CardTitle>
            </CardHeader>
            <CardContent>
              <p>LANDrop can also detect nearby phones even if they are not in the same Wi-Fi network. LANDrop will utilize WebRTC to send files to these devices.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><VerifiedUser className="mr-2 h-4 w-4" /> Trusted Devices</CardTitle>
            </CardHeader>
            <CardContent>
              <p>LANDrop allows you to add trusted devices. You will automatically accept file requests from these devices without being prompted.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Features
