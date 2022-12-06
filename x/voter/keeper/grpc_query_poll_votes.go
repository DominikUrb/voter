package keeper

import (
	"context"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"voter/x/voter/types"
)

func (k Keeper) PollVotes(goCtx context.Context, req *types.QueryPollVotesRequest) (*types.QueryPollVotesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var votes []*types.Vote
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	voteStore := prefix.NewStore(store, []byte(types.VoteKey))
	poll, _ := k.GetPoll(ctx, req.Id)

	pageRes, err := query.Paginate(voteStore, req.Pagination, func(key []byte, value []byte) error {
		var vote types.Vote
		if err := k.cdc.Unmarshal(value, &vote); err != nil {
			return err
		}

		if vote.PollID == poll.Id {
			votes = append(votes, &vote)
		}

		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryPollVotesResponse{Poll: &poll, Vote: votes, Pagination: pageRes}, nil
}
