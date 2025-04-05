import { TEnvironment } from "@/types"


type TZKTLSConfigData = {
  zkPassAppId: string,
  schemas: {
    schemaId: string
    description: string
    serviceName: string
    color: string
    shortDescription: string
    icon: string
    website: string
    launch: boolean
  }[]
}

type TZKTLSConfig = Record<
  TEnvironment, TZKTLSConfigData
>

const zkTLSConfig: TZKTLSConfig = { 
  dev: {
    zkPassAppId: "0acb96f1-6e0d-4414-a744-96f2620a6682",
    schemas: [
      {
        schemaId: "f168c186d29648a2987994998b6616be",
        description: "OnlyFans account owners",
        serviceName: 'OnlyFans',
        color:  '#00AEEF',
        launch: false,
        shortDescription: "account owner", 
        icon: "https://image.com/image.png", 
        website: "https://onlyfans.com/onlyfans"
      },
      {
        schemaId: "f887f25a146d4e72a484eeac6888f4a1",
        description: "Spotify account owners", 
        serviceName: "Spotify",
        color: '#31D866',
        launch: false,
        shortDescription: "account owner", 
        icon: "https://image.com/image.png", 
        website: "https://open.spotify.com/"
      },
      {
        schemaId: "ce96fc856ab242038fccf8aecc2070d7",
        description: "Discord account owners", 
        shortDescription: "account owner",
        color: '#5865F2',
        launch: false,
        serviceName: 'Discord',
        icon: "https://image.com/image.png", 
        website: "https://discord.com"
      },
      {
        schemaId: "aad08c14f0a24759a077939ad2d0b829",
        description: "X account owners",
        launch: true,
        color:  '#1C1C1C',
        shortDescription: "account owner", 
        serviceName: 'X',
        icon: "https://image.com/image.png", 
        website: "https://x.com"
      },
      {
        schemaId: "952719f43b084ceca547e3745f76348d",
        description: "eBay account owners", 
        shortDescription: "account owner",
        launch: false,
        color: '#FFFFFF',
        serviceName: 'eBay',
        icon: "https://image.com/image.png", 
        website: "https://ebay.com"
      },
      {
        schemaId: "526db2684fb7493fba9cf758ce892a71",
        description: "Users who made at least one trip", 
        serviceName: 'Uber',
        launch: false,
        color: '#1C1C1C',
        shortDescription: "made at least one trip", 
        icon: "https://image.com/image.png", 
        website: "https://uber.com"
      },
      {
        schemaId: "d317d8d00da24f6aa5e1bf2789ac0821",
        description: "Users who have at least 100 followers", 
        serviceName: 'Instagram',
        launch: false,
        color: '#1C1C1C',
        shortDescription: "has at least 100 followers", 
        icon: "https://image.com/image.png", 
        website: "https://instagram.com"
      },
      {
        schemaId: "e3ed063579f9488293774bf37358cf06",
        description: "Users who have at least 5 Reddit Karma", 
        serviceName: 'Reddit',
        color: "#1C1C1C",
        launch: false,
        shortDescription: "has at least 5 Reddit Karma", 
        icon: "https://image.com/image.png", 
        website: "https://www.reddit.com"
      }
    ]
  },
  staging: {
    // zkPassAppId: "fceb8c8f-3fe6-4105-955f-8003bf1350da",
    zkPassAppId: "0acb96f1-6e0d-4414-a744-96f2620a6682",
    schemas: [
      {
        schemaId: "f168c186d29648a2987994998b6616be",
        description: "OnlyFans account owners",
        serviceName: 'OnlyFans',
        color:  '#00AEEF',
        launch: false,
        shortDescription: "account owner", 
        icon: "https://image.com/image.png", 
        website: "https://onlyfans.com/onlyfans"
      },
      {
        schemaId: "f887f25a146d4e72a484eeac6888f4a1",
        description: "Spotify account owners", 
        serviceName: "Spotify",
        color: '#31D866',
        launch: false,
        shortDescription: "account owner", 
        icon: "https://image.com/image.png", 
        website: "https://open.spotify.com/"
      },
      {
        schemaId: "ce96fc856ab242038fccf8aecc2070d7",
        description: "Discord account owners", 
        shortDescription: "account owner",
        color: '#5865F2',
        launch: false,
        serviceName: 'Discord',
        icon: "https://image.com/image.png", 
        website: "https://discord.com"
      },
      {
        schemaId: "aad08c14f0a24759a077939ad2d0b829",
        description: "X account owners",
        launch: true,
        color:  '#1C1C1C',
        shortDescription: "account owner", 
        serviceName: 'X',
        icon: "https://image.com/image.png", 
        website: "https://x.com"
      },
      {
        schemaId: "952719f43b084ceca547e3745f76348d",
        description: "eBay account owners", 
        shortDescription: "account owner",
        launch: false,
        color: '#FFFFFF',
        serviceName: 'eBay',
        icon: "https://image.com/image.png", 
        website: "https://ebay.com"
      },
      {
        schemaId: "526db2684fb7493fba9cf758ce892a71",
        description: "Users who made at least one trip", 
        serviceName: 'Uber',
        launch: false,
        color: '#1C1C1C',
        shortDescription: "made at least one trip", 
        icon: "https://image.com/image.png", 
        website: "https://uber.com"
      },
      {
        schemaId: "d317d8d00da24f6aa5e1bf2789ac0821",
        description: "Users who have at least 100 followers", 
        serviceName: 'Instagram',
        launch: false,
        color: '#1C1C1C',
        shortDescription: "has at least 100 followers", 
        icon: "https://image.com/image.png", 
        website: "https://instagram.com"
      },
      {
        schemaId: "e3ed063579f9488293774bf37358cf06",
        description: "Users who have at least 5 Reddit Karma", 
        serviceName: 'Reddit',
        color: "#1C1C1C",
        launch: false,
        shortDescription: "has at least 5 Reddit Karma", 
        icon: "https://image.com/image.png", 
        website: "https://www.reddit.com"
      }
    ]
  },
  production: {
    zkPassAppId: "fceb8c8f-3fe6-4105-955f-8003bf1350da",
    schemas: [
      {
        schemaId: "f168c186d29648a2987994998b6616be",
        description: "OnlyFans account owners",
        serviceName: 'OnlyFans',
        color:  '#00AEEF',
        launch: false,
        shortDescription: "account owner", 
        icon: "https://image.com/image.png", 
        website: "https://onlyfans.com/onlyfans"
      },
      {
        schemaId: "f887f25a146d4e72a484eeac6888f4a1",
        description: "Spotify account owners", 
        serviceName: "Spotify",
        color: '#31D866',
        launch: false,
        shortDescription: "account owner", 
        icon: "https://image.com/image.png", 
        website: "https://open.spotify.com/"
      },
      {
        schemaId: "ce96fc856ab242038fccf8aecc2070d7",
        description: "Discord account owners", 
        shortDescription: "account owner",
        color: '#5865F2',
        launch: false,
        serviceName: 'Discord',
        icon: "https://image.com/image.png", 
        website: "https://discord.com"
      },
      {
        schemaId: "aad08c14f0a24759a077939ad2d0b829",
        description: "X account owners",
        launch: true,
        color:  '#1C1C1C',
        shortDescription: "account owner", 
        serviceName: 'X',
        icon: "https://image.com/image.png", 
        website: "https://x.com"
      },
      {
        schemaId: "952719f43b084ceca547e3745f76348d",
        description: "eBay account owners", 
        shortDescription: "account owner",
        launch: false,
        color: '#FFFFFF',
        serviceName: 'eBay',
        icon: "https://image.com/image.png", 
        website: "https://ebay.com"
      },
      {
        schemaId: "526db2684fb7493fba9cf758ce892a71",
        description: "Users who made at least one trip", 
        serviceName: 'Uber',
        launch: false,
        color: '#1C1C1C',
        shortDescription: "made at least one trip", 
        icon: "https://image.com/image.png", 
        website: "https://uber.com"
      },
      {
        schemaId: "d317d8d00da24f6aa5e1bf2789ac0821",
        description: "Users who have at least 100 followers", 
        serviceName: 'Instagram',
        launch: false,
        color: '#1C1C1C',
        shortDescription: "has at least 100 followers", 
        icon: "https://image.com/image.png", 
        website: "https://instagram.com"
      },
      {
        schemaId: "e3ed063579f9488293774bf37358cf06",
        description: "Users who have at least 5 Reddit Karma", 
        serviceName: 'Reddit',
        color: "#1C1C1C",
        launch: false,
        shortDescription: "has at least 5 Reddit Karma", 
        icon: "https://image.com/image.png", 
        website: "https://www.reddit.com"
      }
    ]
  }
}

export default zkTLSConfig
