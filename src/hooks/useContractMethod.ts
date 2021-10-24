import { ethers } from "ethers";
import simpleContractABI from "../abi/SimpleContract.json";
import { Contract } from "@ethersproject/contracts";
import { useContractFunction } from "@usedapp/core";
import { simpleContractAddress } from "../simpleContract";

const simpleContractInterface
  = new ethers.utils.Interface(simpleContractABI);
const contract = new Contract(simpleContractAddress, simpleContractInterface);

export function useContractMethod(methodName:string) {
  const { send, state } = useContractFunction(contract, methodName, {});
  return { send, state };
}