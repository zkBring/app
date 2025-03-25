'use client'
import { Input }  from '@/components/common'
import {
  FC
} from 'react'
import { Drops } from './styled-components'
import { Drop } from '@/components/common'

import { TProps } from './types'

const DropsList: FC<TProps> = ({
  drops
}) => {

  return <Drops>
    {drops.map(drop => {
      return <Drop
        title={drop.title}
        address={drop.address}
      />
    })}
  </Drops>
}

export default DropsList
