import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateVote } from "./types/voter/voter/tx";
import { MsgCreatePoll } from "./types/voter/voter/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/voter.voter.MsgCreateVote", MsgCreateVote],
    ["/voter.voter.MsgCreatePoll", MsgCreatePoll],
    
];

export { msgTypes }