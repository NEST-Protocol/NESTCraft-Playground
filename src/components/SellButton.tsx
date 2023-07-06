import {FC, useEffect} from "react";
import {useContractRead, useContractWrite, useNetwork, usePrepareContractWrite, useWaitForTransaction} from "wagmi";
import {NEST_CRAFT_ADDRESS} from "@/constant/address";
import {bscTestnet} from "wagmi/chains";
import {NEST_CRAFT_ABI} from "@/constant/abi";
import {InlineMath} from "react-katex";
import {formatExpr} from "@/utils/expr";

type SellButtonProps = {
  item: any
}

export const SellButton: FC<SellButtonProps> = ({item}) => {
  const {chain} = useNetwork()
  const {config: sellPrepareConfig} = usePrepareContractWrite({
    address: NEST_CRAFT_ADDRESS[chain?.id ?? bscTestnet.id],
    abi: NEST_CRAFT_ABI,
    functionName: 'sell',
    args: [
      item.index,
    ],
    chainId: chain?.id ?? bscTestnet.id,
  })
  const {
    data: sellData,
    write: sell,
    status: sellStatus,
    reset: resetSell,
  } = useContractWrite(sellPrepareConfig)
  const {status: waitSellStatus} = useWaitForTransaction({
    hash: sellData?.hash,
    cacheTime: 3_000,
  })
  const {data: estimateData} = useContractRead({
    abi: NEST_CRAFT_ABI,
    address: NEST_CRAFT_ADDRESS[chain?.id ?? bscTestnet.id],
    args: [
      item.expr,
    ],
    chainId: chain?.id ?? bscTestnet.id,
    functionName: 'estimate',
    cacheTime: 3_000,
    watch: true,
  })

  useEffect(() => {
    if (sellStatus === 'success' || sellStatus === 'error') {
      setTimeout(() => {
        resetSell()
      }, 3_000)
    }
  }, [sellStatus, resetSell])

  return (
    <div className={'border border-1 rounded-xl text-sm hover:shadow hover:bg-neutral-50'}>
      <div className={'p-3'}>
        <div className={'font-light text-xs mb-2'}>
          <InlineMath>
            {formatExpr(item.expr)}
          </InlineMath>
        </div>
        <div className={'flex justify-between items-center'}>
          <div>
            {/*@ts-ignore*/}
            {estimateData ? `${(parseInt(BigInt(estimateData).toString()) / 1e18).toLocaleString('en-US', {
              maximumFractionDigits: 6
            })} NEST` : ''}
          </div>
          <button
            onClick={sell} disabled={!sell}
            className={'border-1 border px-3 py-1 text-xs rounded hover:bg-red-400 hover:text-white hover:border-red-400 disabled:cursor-not-allowed'}>
            {(sellStatus === 'loading' || waitSellStatus === 'loading') && 'Selling...'}
            {(sellStatus === 'idle' && waitSellStatus === 'idle') && 'Sell'}
            {(sellStatus === 'success' && waitSellStatus === 'success') && 'Sell Success'}
            {(sellStatus === 'error' || waitSellStatus === 'error') && 'Sell Error'}
          </button>
        </div>
      </div>
    </div>
  )
}
