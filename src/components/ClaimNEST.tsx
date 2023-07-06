import {useContractWrite, useNetwork, usePrepareContractWrite, useWaitForTransaction} from "wagmi";
import {NEST_ADDRESS, NEST_FAUCET_ADDRESS} from "@/constant/address";
import {bscTestnet} from "wagmi/chains";
import {NEST_FAUCET_ABI} from "@/constant/abi";

export const ClaimNEST = () => {
  const {chain} = useNetwork()
  const {config: buyPrepareConfig} = usePrepareContractWrite({
    address: NEST_FAUCET_ADDRESS[chain?.id ?? bscTestnet.id],
    abi: NEST_FAUCET_ABI,
    functionName: 'getToken',
    args: [
      NEST_ADDRESS[chain?.id ?? bscTestnet.id],
    ],
    chainId: chain?.id ?? bscTestnet.id,
  })
  const {
    data: getTokenData,
    write: getToken,
    status: getTokenStatus,
    reset: resetGetToken,
  } = useContractWrite(buyPrepareConfig)
  const {status: waitBuyStatus} = useWaitForTransaction({
    hash: getTokenData?.hash,
    cacheTime: 3_000,
  })

  if (!getToken) {
    return null
  }

  return (
    <span className={'px-3 text-neutral-700 text-sm'}>
      If you have no NEST, click <button className={'underline'} onClick={getToken} disabled={!getToken}>here</button> to claim some
    </span>
  )
}