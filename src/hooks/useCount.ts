import { ethers } from "ethers";
import simpleContractABI from "../abi/SimpleContract.json";
import { useContractCall } from "@usedapp/core";
import {simpleContractAddress} from "../simpleContract"

const simpleContractInterface
  = new ethers.utils.Interface(simpleContractABI);

export function useCount() {
const [count]:any=useContractCall({
  abi:simpleContractInterface,
  address:simpleContractAddress,
  method:"count",
  args:[]

})??[];
return count
}