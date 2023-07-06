export type ExpressionSubItem = {
  coefficient: number
  function: string
  description: string
  name: string
  argument: {
    type: string
    name: string
    value: string | number | undefined
  } | null,
  cost: string
  settlement: string
}

export const Functions: ExpressionSubItem[] = [
  {
    coefficient: 1,
    function: 'm1',
    name: 'm_1',
    argument: {
      type: 'token',
      name: 'ETH',
      value: 0,
    },
    description: `m_1 = ax + c`,
    cost: `C = aS_0 + c`,
    settlement: `F = a S_t exp(−μt) + c`,
  },
  {
    coefficient: 1,
    function: 'm2',
    name: 'm_2',
    argument: {
      type: 'token',
      name: 'ETH',
      value: 0,
    },
    description: `m_2 = a x ^ 2 + c`,
    cost: `C = a {S_0} ^ 2 + c`,
    settlement: `F = a {S_t} ^ 2 exp(−2μt − σ^2t) + c`,
  },
  {
    coefficient: 1,
    function: 'm3',
    name: 'm_3',
    argument: {
      type: 'token',
      name: 'ETH',
      value: 0,
    },
    description: `m_3 = a x ^ {-1} + c`,
    cost: `C = a {S_0} ^ {-1} + c`,
    settlement: `F = a {S_t} ^ {-1} exp(μt − σ^2t) + c`,
  },
  {
    coefficient: 1,
    function: 'm4',
    name: 'm_4',
    argument: {
      type: 'token',
      name: 'ETH',
      value: 0,
    },
    description: `m_4 = ax^{\\frac{1}{2} } + c`,
    cost: `C = a {S_0} ^ \\frac{1}{2} + c`,
    settlement: `F = a {S_t} ^ \\frac{1}{2} exp(-\\frac{1}{2} μt + \\frac{1}{8}σ^2 t) + c`,
  },
  {
    coefficient: 1,
    function: 'm5',
    name: 'm_5',
    argument: {
      type: 'token',
      name: 'ETH',
      value: 0,
    },
    description: `m_5 = a lnx + c`,
    cost: `C = a ln S_0 + c`,
    settlement: `F = a(lnS_t - μt + \\frac{1}{2} σ^2) + c`,
  },
]