## uni-check

Uniswap recently launched their UNI token, and if you have every traded on Uniswap you are eligible to receive tokens. [See Uniswap blog](https://uniswap.org/blog/uni/)

If you have used many different Ethereum accounts it can be a hassle to log in to Uniswap with each one to check if you have received any tokens.
`uni-check` allows you to check all your addresses at once by providing a space separated list of your Ethereum addresses.

## Usage

1. Install `npm install -g uni-check`
1. Run command with your Ethereum addresses as space separated arguments

```
uni-check 0x0000000000000000000000000000000000000000 0x0000000000000000000000000000000000000001 0x0000000000000000000000000000000000000002
```

1. You should see a response similar to

```
Checking accounts for UNI distribution...
Account 0x0000000000000000000000000000000000000000
Amount: 400
{ isSOCKS: false, isLP: true, isUser: true }
-----------------------------------------------------
Account 0x0000000000000000000000000000000000000001
Amount: 5988.626491
{ isSOCKS: false, isLP: true, isUser: true }
-----------------------------------------------------
No distribution for 0x0000000000000000000000000000000000000002
Successfully checked 3 accounts
```

- `isSOCKS` means you will receive UNI for owning `SOCKS` token
- `isLP` means you will receive UNI for being a liquidity provider
- `isUser` means you will receive UNI for having traded on Uniswap
