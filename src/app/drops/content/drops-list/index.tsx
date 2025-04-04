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
        drop={drop}
      />
    })}
  </Drops>
}

export default DropsList
