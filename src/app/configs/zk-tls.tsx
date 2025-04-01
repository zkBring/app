import { TEnvironment } from "@/types"

type TZKTLSConfigData = {
  zkPassAppId: string,
  schemas: {
    schemaId: string
    description: string
    shortDescription: string
    icon: string
    website: string
  }[]
}

type TZKTLSConfig = Record<
  TEnvironment, TZKTLSConfigData
>


const zkTLSConfig: TZKTLSConfig = { 
  dev: {
    zkPassAppId: "6543a426-2afe-4efa-9d23-2d6ce8723e23",
    schemas: [{
        schemaId: "c38b96722bd24b64b8d349ffd6391a8c",
        description: "Verify Twitter Followers", 
        shortDescription: "For X users", 
        icon: "https://image.com/image.png", 
        website: "https://x.com"
      }
    ]
  },
  staging: {
    zkPassAppId: "fceb8c8f-3fe6-4105-955f-8003bf1350da",
    schemas: [{
        schemaId: "94cde52ae2154d67befa7e0faafc223c",
        description: "Verify Twitter Followers", 
        shortDescription: "For X users", 
        icon: "https://image.com/image.png", 
        website: "https://x.com"
      }
    ]
  },
  production: {
    zkPassAppId: "fceb8c8f-3fe6-4105-955f-8003bf1350da",
    schemas: [{
        schemaId: "94cde52ae2154d67befa7e0faafc223c",
        description: "Verify Twitter Followers", 
        shortDescription: "For X users", 
        icon: "https://image.com/image.png", 
        website: "https://x.com"
      }
    ]
  }
}

export default zkTLSConfig
