import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreatePoll } from "./types/voter/voter/tx";
import { MsgCreateVote } from "./types/voter/voter/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/voter.voter.MsgCreatePoll", MsgCreatePoll],
    ["/voter.voter.MsgCreateVote", MsgCreateVote],
    
];

export { msgTypes }