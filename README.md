# constructor-argument-detector
🚀 Terminal util to find constructor arguments when creating a contract in ethereum based networks

[![npm (tag)](https://img.shields.io/npm/v/constructor-argument-detector)](https://www.npmjs.com/package/constructor-argument-detector)


## Get Started
```bash
npm install -g constructor-argument-detector
```


## Usage
```bash
Usage: constructor-detector [options] <transaction-hash-of-creation-contract>

CLI to find constructor argument in ethereum based chain contracts

Arguments:
  hash                  Tx of creating transactions

Options:
  -e, --endpoint <url>  RPC endpoint url
  -t, --types <string>  Constructor types (Example: uint,string,address)
  -h, --help            display help for command
```


## Example
```bash
user@macbook ~ % constructor  -e https://bsc-dataseed1.binance.org \
                              -t address,address \
                              0x1bfbff8411ed44e609d911476b0d35a28284545b690902806ea0a7ff0453e931

(address) 0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73
(address) 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
```

Or set RRC endpoint to env
```bash
user@macbook ~ % export WEB3_ENDPOINT=https://bsc-dataseed1.binance.org
user@macbook ~ % constructor -t address,address,address,address,address,uint 0xc0e636dcebeeed30525f1ca2214b93331fe2263adc87cd467d57d4ff04257d4d
(address) 0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82
(address) 0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652
(address) 0x7a2C5c265bDC9724dACe715c5FF60Eea40E07F47
(address) 0xeCc90d54B10ADd1ab746ABE7E83abe178B72aa9E
(address) 0xeCc90d54B10ADd1ab746ABE7E83abe178B72aa9E
(uint) 0

```

## Or using as library
```js
const detector = require("constructor-argument-detector");

detector.parse({
    txHash: "0xc0e636dcebeeed30525f1ca2214b93331fe2263adc87cd467d57d4ff04257d4d",
    endpoint: "https://bsc-dataseed1.binance.org/",
    types: ["address", "address", "address", "address", "address", "uint"]
}).then(result => {
    console.log(result);
})

/* Output:
[
  {
    type: 'address',
    value: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82'
  },
  {
    type: 'address',
    value: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652'
  },
  {
    type: 'address',
    value: '0x7a2C5c265bDC9724dACe715c5FF60Eea40E07F47'
  },
  {
    type: 'address',
    value: '0xeCc90d54B10ADd1ab746ABE7E83abe178B72aa9E'
  },
  {
    type: 'address',
    value: '0xeCc90d54B10ADd1ab746ABE7E83abe178B72aa9E'
  },
  {
    type: 'uint',
    value: BigNumber { _hex: '0x00', _isBigNumber: true }
  }
]
*/
```
