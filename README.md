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
