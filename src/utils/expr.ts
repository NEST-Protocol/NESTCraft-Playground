// 将Latex表达式转换为合约可执行的函数
import {ExpressionSubItem} from "@/constant/functions";

export const parseExpr = (item: ExpressionSubItem) => {
  let expr = ''
  if (item.argument) {
    if (item.coefficient === 1) {
      expr += `${item.function}(${item.argument?.value})`
    } else {
      expr += `${item.coefficient}*${item.function}(${item.argument?.value})`
    }
  } else {
    if (item.coefficient === 1) {
      expr += `${item.function}`
    } else {
      expr += `${item.coefficient}*${item.function}`
    }
  }
  expr = expr.replace(/\*1/g, '')
  return expr
}

// 将合约可执行的函数转换为Latex表达式
export const formatExpr = (expr: string) => {
  return expr.replace(/\s/g, '')
    .replace(/m1/g, 'm_1')
    .replace(/m2/g, 'm_2')
    .replace(/m3/g, 'm_3')
    .replace(/m4/g, 'm_4')
    .replace(/m5/g, 'm_5')
    .replace(/\(0\)/g, '(ETH)')
    .replace(/\(1\)/g, '(BTC)')
    .replace(/\(2\)/g, '(BNB)')
    .replace(/\*/g, '\\cdot ')
}