package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"voter/x/voter/types"
)

func (k msgServer) CreatePoll(goCtx context.Context, msg *types.MsgCreatePoll) (*types.MsgCreatePollResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	var post = types.Poll{
		Creator:     msg.Creator,
		Title:       msg.Title,
		Description: msg.Description,
		Options:     msg.Options,
	}
	id := k.AppendPoll(ctx, post)
	return &types.MsgCreatePollResponse{Id: id}, nil
}
