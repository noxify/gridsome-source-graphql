import consola from 'consola'
import { hirestimeNode } from 'hirestime'

export const reporter = consola.create({ defaults: { tag: 'gridsome-source-graphql' } })

export interface Timer {
  (): {
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    log(message: string, format?: string): boolean | void
  }
}

export const createTimer = (log: boolean) => () => {
  const timer = hirestimeNode()

  return {
    log: (m: string, f = 's') => log && reporter.info(m, `${f === 'ms' ? timer.ms() : timer.s()}${f}`)
  }
}

export interface Utils {
  baseUrl: string
  concurrency: number
  log: boolean
  perPage: number
  // eslint-disable-next-line no-unused-vars
  prefix(type: string): string
  timer: Timer
  typeName: string
  excluded: {
    fields: string[]
    types: string[]
  }
  included?: string[]
}

export const excludedFields = [
  'allSettings',
  'cart',
  'comments',
  'contentNodes',
  'contentTypes',
  'coupons',
  'customers',
  'discussionSettings',
  'generalSettings',
  'orders',
  'paymentGateways',
  'plugins',
  'readingSettings',
  'refunds',
  'registeredScripts',
  'registeredStylesheets',
  'revisions',
  'themes',
  'userRoles',
  'viewer',
  'visibleProducts',
  'writingSettings'
]

export const excludedTypes = ['EnqueuedScript', 'EnqueuedStylesheet', 'DownloadableItem']
