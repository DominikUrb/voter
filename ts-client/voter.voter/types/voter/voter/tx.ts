/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "voter.voter";

export interface MsgCreatePoll {
  creator: string;
  title: string;
  description: string;
  options: string[];
  id: number;
}

export interface MsgCreatePollResponse {
  id: number;
}

export interface MsgCreateVote {
  creator: string;
  options: string;
  pollID: number;
  id: number;
}

export interface MsgCreateVoteResponse {
  id: number;
}

function createBaseMsgCreatePoll(): MsgCreatePoll {
  return { creator: "", title: "", description: "", options: [], id: 0 };
}

export const MsgCreatePoll = {
  encode(message: MsgCreatePoll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.options) {
      writer.uint32(34).string(v!);
    }
    if (message.id !== 0) {
      writer.uint32(40).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.options.push(reader.string());
          break;
        case 5:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePoll {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      options: Array.isArray(object?.options) ? object.options.map((e: any) => String(e)) : [],
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgCreatePoll): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.options) {
      obj.options = message.options.map((e) => e);
    } else {
      obj.options = [];
    }
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePoll>, I>>(object: I): MsgCreatePoll {
    const message = createBaseMsgCreatePoll();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.options = object.options?.map((e) => e) || [];
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgCreatePollResponse(): MsgCreatePollResponse {
  return { id: 0 };
}

export const MsgCreatePollResponse = {
  encode(message: MsgCreatePollResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePollResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePollResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePollResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreatePollResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePollResponse>, I>>(object: I): MsgCreatePollResponse {
    const message = createBaseMsgCreatePollResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgCreateVote(): MsgCreateVote {
  return { creator: "", options: "", pollID: 0, id: 0 };
}

export const MsgCreateVote = {
  encode(message: MsgCreateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.options !== "") {
      writer.uint32(18).string(message.options);
    }
    if (message.pollID !== 0) {
      writer.uint32(24).uint64(message.pollID);
    }
    if (message.id !== 0) {
      writer.uint32(32).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.options = reader.string();
          break;
        case 3:
          message.pollID = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVote {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      options: isSet(object.options) ? String(object.options) : "",
      pollID: isSet(object.pollID) ? Number(object.pollID) : 0,
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgCreateVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.options !== undefined && (obj.options = message.options);
    message.pollID !== undefined && (obj.pollID = Math.round(message.pollID));
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateVote>, I>>(object: I): MsgCreateVote {
    const message = createBaseMsgCreateVote();
    message.creator = object.creator ?? "";
    message.options = object.options ?? "";
    message.pollID = object.pollID ?? 0;
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgCreateVoteResponse(): MsgCreateVoteResponse {
  return { id: 0 };
}

export const MsgCreateVoteResponse = {
  encode(message: MsgCreateVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVoteResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateVoteResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateVoteResponse>, I>>(object: I): MsgCreateVoteResponse {
    const message = createBaseMsgCreateVoteResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreatePoll(request: MsgCreatePoll): Promise<MsgCreatePollResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePoll = this.CreatePoll.bind(this);
    this.CreateVote = this.CreateVote.bind(this);
  }
  CreatePoll(request: MsgCreatePoll): Promise<MsgCreatePollResponse> {
    const data = MsgCreatePoll.encode(request).finish();
    const promise = this.rpc.request("voter.voter.Msg", "CreatePoll", data);
    return promise.then((data) => MsgCreatePollResponse.decode(new _m0.Reader(data)));
  }

  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse> {
    const data = MsgCreateVote.encode(request).finish();
    const promise = this.rpc.request("voter.voter.Msg", "CreateVote", data);
    return promise.then((data) => MsgCreateVoteResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
