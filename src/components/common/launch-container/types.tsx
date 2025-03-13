export type TBreadcrumbsItem = {
  title?: string,
  status?: 'current' | 'done'
}

type TProps = {
  breadcrumbs: TBreadcrumbsItem[]
  children?: React.ReactNode
}

export default TProps