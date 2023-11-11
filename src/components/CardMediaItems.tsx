import { TautulliItem } from '@/utils/fetchTautulli'
import CardContentItem from './CardMediaItem'

type Props = {
  items: TautulliItem[]
  type: string
  serverId: string
}

export default function CardMediaItems({ items, type, serverId }: Props) {
  return (
    <ul className='mt-4 grid gap-y-3 overflow-hidden sm:mt-6 sm:gap-y-5 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-8'>
      {items.map((itemData, i) => (
        <CardContentItem
          data={itemData}
          i={i}
          key={i}
          type={type}
          serverId={serverId}
        />
      ))}
    </ul>
  )
}