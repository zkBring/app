import { TDrop, TDropsPaginationData } from "@/types"

type TProps = {
  drops: (TDrop | null)[]
  resultSet?: TDropsPaginationData
  includePageComponent?: boolean
}

export default TProps