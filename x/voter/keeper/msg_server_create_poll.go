package keeper

import (
	"context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"voter/x/voter/types"
)

func (k msgServer) CreatePoll(goCtx context.Context, msg *types.MsgCreatePoll) (*types.MsgCreatePollResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if containsDuplicates(msg.Options) {
		return nil, types.ErrDuplicatedPollOptions
	} else if len(msg.Options) < 2 {
		return nil, types.ErrNotEnoughPollOptions
	}

	post := types.Poll{
		Creator:     msg.Creator,
		Title:       msg.Title,
		Description: msg.Description,
		Options:     msg.Options,
	}
	id := k.AppendPoll(ctx, post)

	return &types.MsgCreatePollResponse{Id: id}, nil
}

func containsDuplicates(values []string) bool {
	encountered := make(map[string]bool, len(values))

	for _, value := range values {
		if encountered[value] == true {
			return true
		} else {
			encountered[value] = true
		}
	}

	return false
}
