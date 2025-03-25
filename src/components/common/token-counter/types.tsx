
type TProps = {
  value: number | bigint
  max: number | bigint
  action: (
    isPublic: boolean 
  ) => void
  isPublic: boolean
  actionTitle?: string
  tokenSymbol: string
  tokenIcon: React.ReactNode
}


export default TProps