#!/usr/bin/env node

const axios = require('axios')
const BigNumber = require('bignumber.js')
const { get } = require('lodash')
const { toChecksumAddress } = require('ethereumjs-util')

const getUniDistUrl = ethAddress => `https://gentle-frost-9e74.uniswap.workers.dev/1/${ethAddress}`

const accounts = process.argv.slice(2).reduce((memo, arg) => {
  const _accounts = arg.split(' ').map(account => toChecksumAddress(account.trim()))

  memo.push(..._accounts)
  return memo
}, [])

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000))

const main = async () => {
  console.log('Checking accounts for UNI distribution...')
  for (const account of accounts) {
    try {
      const { data } = await axios.get(getUniDistUrl(account))
      const amount = new BigNumber(data.amount)
      console.log(`Account ${account}`)
      console.log(`Amount: ${amount.div(1e18).toString()}`)
      console.log(data.flags)
      console.log('-----------------------------------------------------')
      await sleep()
    } catch (err) {
      const errResponseMessage = get(err, 'response.data.message')
      if (errResponseMessage && errResponseMessage.includes('Address not found')) {
        console.log(`No distribution for ${account}`)
        continue
      }

      throw err
    }
  }
}

main().then(() => {
  console.log(`Successfully checked ${accounts.length} accounts`)
  process.exit(0)
}).catch(err => {
  console.error(err)
  process.exit(1)
})
