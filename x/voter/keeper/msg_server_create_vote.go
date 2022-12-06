package keeper

import (
	"context"
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"voter/x/voter/types"
)

func (k msgServer) CreateVote(goCtx context.Context, msg *types.MsgCreateVote) (*types.MsgCreateVoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	poll, found := k.GetPoll(ctx, msg.PollID)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	if !contains(poll.Options, msg.Option) {
		return nil, types.ErrInvalidPollOption
	}

	vote := types.Vote{
		PollID:    msg.PollID,
		Option:    msg.Option,
		Creator:   msg.Creator,
		Id:        msg.Id,
		CreatedAt: ctx.BlockHeight(),
	}

	if vote.CreatedAt > poll.CreatedAt+100 {
		return nil, sdkerrors.Wrapf(types.ErrVoteToOld, "Vote created at %d is older than poll created at %d", vote.CreatedAt, poll.CreatedAt)
	}

	id := k.AppendVote(ctx, vote)

	return &types.MsgCreateVoteResponse{Id: id}, nil
}

func contains(values []string, value string) bool {
	for _, v := range values {
		if v == value {
			return true
		}
	}
	return false
}
