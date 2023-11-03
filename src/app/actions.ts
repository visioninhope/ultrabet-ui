'use server'

import { MarketOption } from '@/gql/types.generated'
import { UserProfile } from '@auth0/nextjs-auth0/client'
import { kv } from '@vercel/kv'
import { revalidatePath } from 'next/cache'
import { BetSlipOption, Slip } from '@/ui/bet-slip/bet-slip'

export async function addSlipOption(user: UserProfile | null, option: BetSlipOption) {
  await kv.hset(`betslip:${user?.sub}`, { [`${option.id}`]: option })
  revalidatePath('/events')
}

export async function removeSlipOption(user: UserProfile | null, option: MarketOption) {
  console.log(`removing slip option from user ${user?.sub}`, option.id)
  await kv.hdel(`betslip:${user?.sub}`, option.id)
  revalidatePath('/events')
}

export async function placeBet(
  user: UserProfile | null,
  slip: Slip,
  prevState: any,
  data: FormData
) {
  console.log(`placing bet for user ${user?.sub}`, data)
  await Promise.all(Object.keys(slip).map((optionId) => kv.hdel(`betslip:${user?.sub}`, optionId)))
  revalidatePath('/events')
}
