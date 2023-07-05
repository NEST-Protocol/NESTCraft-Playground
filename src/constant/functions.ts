export type ExpressionSubItem = {
  coefficient: number
  function: string
  description: string
  argument: {
    type: string
    name: string
    value: string | number | undefined
  } | null
}

export const Functions: ExpressionSubItem[] = [
  // {
  //   coefficient: 1,
  //   function: '1',
  //   argument: null,
  //   description: 'constant',
  // },
  {
    coefficient: 1,
    function: 'm1',
    argument: {
      type: 'token',
      name: 'ETH',
      value: 0,
    },
    description: 'Linear function: m1 = a * x + c',
  },
  {
    coefficient: 1,
    function: 'm2',
    argument: {
      type: 'token',
      name: 'ETH',
      value: 0,
    },
    description: 'Square function, m2 = a * x ** 2 + c',
  },
  {
    coefficient: 1,
    function: 'm3',
    argument: {
      type: 'token',
      name: 'ETH',
      value: 0,
    },
    description: 'Reciprocal function, m3 = a / x + c',
  },
  {
    coefficient: 1,
    function: 'm4',
    argument: {
      type: 'token',
      name: 'ETH',
      value: 0,
    },
    description: 'Square root function, m4 = a * x ** 0.5 + c',
  },
  {
    coefficient: 1,
    function: 'm5',
    argument: {
      type: 'token',
      name: 'ETH',
      value: 0,
    },
    description: 'logarithmic function, m5 = a * ln(x) + c',
  },
]