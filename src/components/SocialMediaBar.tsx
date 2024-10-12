function SocialMediaBar() {
  return (
    <div className="flex items-center space-x-2">
      <a href="https://www.buymeacoffee.com/LANDrop" target="_blank" className="hidden md:block">
        <img src="https://cdn.buymeacoffee.com/buttons/v2/arial-blue.png" className="h-8" />
      </a>
      <a href="https://discord.gg/5adm6sPugT" target="_blank">
        <img src="/assets/img/discord.svg" className="h-6 ml-1" />
      </a>
      <a href="https://x.com/LANDropApp" target="_blank">
        <img src="/assets/img/x.svg" className="h-6" />
      </a>
    </div>
  )
}

export default SocialMediaBar
