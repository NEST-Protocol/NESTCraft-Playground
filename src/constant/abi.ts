export const NEST_CRAFT_ABI = [{
  "anonymous": false,
  "inputs": [{"indexed": false, "internalType": "string", "name": "expr", "type": "string"}, {
    "indexed": false,
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {"indexed": false, "internalType": "uint256", "name": "openBlock", "type": "uint256"}, {
    "indexed": false,
    "internalType": "uint256",
    "name": "shares",
    "type": "uint256"
  }, {"indexed": false, "internalType": "uint256", "name": "index", "type": "uint256"}],
  "name": "Buy",
  "type": "event"
}, {
  "inputs": [{"internalType": "string", "name": "expr", "type": "string"}],
  "name": "buy",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{"internalType": "bytes", "name": "abiArgs", "type": "bytes"}],
  "name": "calculate",
  "outputs": [{"internalType": "int256", "name": "", "type": "int256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "int256", "name": "v", "type": "int256"}],
  "name": "cel",
  "outputs": [{"internalType": "int256", "name": "", "type": "int256"}],
  "stateMutability": "pure",
  "type": "function"
}, {
  "inputs": [{"internalType": "uint256", "name": "period", "type": "uint256"}, {
    "internalType": "uint256[]",
    "name": "equivalents",
    "type": "uint256[]"
  }], "name": "directPost", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
  "inputs": [{"internalType": "string", "name": "expr", "type": "string"}],
  "name": "estimate",
  "outputs": [{"internalType": "int256", "name": "value", "type": "int256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "int256", "name": "v", "type": "int256"}],
  "name": "exp",
  "outputs": [{"internalType": "int256", "name": "", "type": "int256"}],
  "stateMutability": "pure",
  "type": "function"
}, {
  "inputs": [{"internalType": "uint256", "name": "start", "type": "uint256"}, {
    "internalType": "uint256",
    "name": "count",
    "type": "uint256"
  }, {"internalType": "uint256", "name": "maxFindCount", "type": "uint256"}, {
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }],
  "name": "find",
  "outputs": [{
    "components": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, {"internalType": "uint32", "name": "openBlock", "type": "uint32"}, {
      "internalType": "uint32",
      "name": "stopBlock",
      "type": "uint32"
    }, {"internalType": "uint32", "name": "shares", "type": "uint32"}, {
      "internalType": "string",
      "name": "expr",
      "type": "string"
    }], "internalType": "struct NestCraft.CraftOrder[]", "name": "orderArray", "type": "tuple[]"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "int256", "name": "v", "type": "int256"}],
  "name": "flo",
  "outputs": [{"internalType": "int256", "name": "", "type": "int256"}],
  "stateMutability": "pure",
  "type": "function"
}, {
  "inputs": [{"internalType": "uint256", "name": "offset", "type": "uint256"}, {
    "internalType": "uint256",
    "name": "count",
    "type": "uint256"
  }, {"internalType": "uint256", "name": "order", "type": "uint256"}],
  "name": "list",
  "outputs": [{
    "components": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, {"internalType": "uint32", "name": "openBlock", "type": "uint32"}, {
      "internalType": "uint32",
      "name": "stopBlock",
      "type": "uint32"
    }, {"internalType": "uint32", "name": "shares", "type": "uint32"}, {
      "internalType": "string",
      "name": "expr",
      "type": "string"
    }], "internalType": "struct NestCraft.CraftOrder[]", "name": "orderArray", "type": "tuple[]"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "uint256", "name": "pairIndex", "type": "uint256"}, {
    "internalType": "uint256",
    "name": "offset",
    "type": "uint256"
  }, {"internalType": "uint256", "name": "count", "type": "uint256"}, {
    "internalType": "uint256",
    "name": "order",
    "type": "uint256"
  }],
  "name": "listPrice",
  "outputs": [{"internalType": "uint256[]", "name": "priceArray", "type": "uint256[]"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "int256", "name": "v", "type": "int256"}],
  "name": "ln",
  "outputs": [{"internalType": "int256", "name": "", "type": "int256"}],
  "stateMutability": "pure",
  "type": "function"
}, {
  "inputs": [{"internalType": "int256", "name": "a", "type": "int256"}, {
    "internalType": "int256",
    "name": "b",
    "type": "int256"
  }],
  "name": "log",
  "outputs": [{"internalType": "int256", "name": "v", "type": "int256"}],
  "stateMutability": "pure",
  "type": "function"
}, {
  "inputs": [{"internalType": "uint256", "name": "ctx", "type": "uint256"}, {
    "internalType": "int256",
    "name": "pairIndex",
    "type": "int256"
  }],
  "name": "m1",
  "outputs": [{"internalType": "int256", "name": "v", "type": "int256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "uint256", "name": "ctx", "type": "uint256"}, {
    "internalType": "int256",
    "name": "pairIndex",
    "type": "int256"
  }],
  "name": "m2",
  "outputs": [{"internalType": "int256", "name": "v", "type": "int256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "uint256", "name": "ctx", "type": "uint256"}, {
    "internalType": "int256",
    "name": "pairIndex",
    "type": "int256"
  }],
  "name": "m3",
  "outputs": [{"internalType": "int256", "name": "v", "type": "int256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "uint256", "name": "ctx", "type": "uint256"}, {
    "internalType": "int256",
    "name": "pairIndex",
    "type": "int256"
  }],
  "name": "m4",
  "outputs": [{"internalType": "int256", "name": "v", "type": "int256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "uint256", "name": "ctx", "type": "uint256"}, {
    "internalType": "int256",
    "name": "pairIndex",
    "type": "int256"
  }],
  "name": "m5",
  "outputs": [{"internalType": "int256", "name": "v", "type": "int256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "int256", "name": "pairIndex", "type": "int256"}, {
    "internalType": "int256",
    "name": "count",
    "type": "int256"
  }],
  "name": "oav",
  "outputs": [{"internalType": "int256", "name": "v", "type": "int256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "ob",
  "outputs": [{"internalType": "int256", "name": "", "type": "int256"}],
  "stateMutability": "pure",
  "type": "function"
}, {
  "inputs": [{"internalType": "int256", "name": "pairIndex", "type": "int256"}],
  "name": "op",
  "outputs": [{"internalType": "int256", "name": "", "type": "int256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "int256", "name": "a", "type": "int256"}, {
    "internalType": "int256",
    "name": "b",
    "type": "int256"
  }],
  "name": "pow",
  "outputs": [{"internalType": "int256", "name": "v", "type": "int256"}],
  "stateMutability": "pure",
  "type": "function"
}, {
  "inputs": [{"internalType": "string", "name": "key", "type": "string"}, {
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }], "name": "register", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
  "inputs": [{"internalType": "string", "name": "key", "type": "string"}, {
    "internalType": "address",
    "name": "addr",
    "type": "address"
  }], "name": "registerAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
  "inputs": [{"internalType": "string", "name": "functionName", "type": "string"}, {
    "internalType": "address",
    "name": "addr",
    "type": "address"
  }], "name": "registerStaticCall", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
  "inputs": [{
    "components": [{
      "internalType": "uint16",
      "name": "pairIndex",
      "type": "uint16"
    }, {"internalType": "int64", "name": "sigmaSQ", "type": "int64"}, {
      "internalType": "int64",
      "name": "miu",
      "type": "int64"
    }], "internalType": "struct NestCraft.TokenConfig", "name": "tokenConfig", "type": "tuple"
  }], "name": "registerTokenConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
  "inputs": [{"internalType": "uint256", "name": "index", "type": "uint256"}],
  "name": "sell",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "newGovernance", "type": "address"}],
  "name": "setGovernance",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{"internalType": "int256", "name": "v", "type": "int256"}],
  "name": "sqrt",
  "outputs": [{"internalType": "int256", "name": "", "type": "int256"}],
  "stateMutability": "pure",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "governance", "type": "address"}],
  "name": "update",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}]

export const NEST_FAUCET_ABI = [{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "inputs": [{"internalType": "address", "name": "token", "type": "address"}],
  "name": "getAllToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "token", "type": "address"}],
  "name": "getToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}]