package keeper

import (
	"context"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	"github.com/cosmos/cosmos-sdk/types/query"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"voter/x/voter/types"
)

func (k Keeper) Polls(c context.Context, req *types.QueryPollsRequest) (*types.QueryPollsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var polls []*types.Poll
	ctx := sdk.UnwrapSDKContext(c)
	store := ctx.KVStore(k.storeKey)
	pollStore := prefix.NewStore(store, []byte(types.PollKey))

	pageRes, err := query.Paginate(pollStore, req.Pagination, func(key []byte, value []byte) error {
		var poll types.Poll
		if err := k.cdc.Unmarshal(value, &poll); err != nil {
			return err
		}

		polls = append(polls, &poll)

		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryPollsResponse{Poll: polls, Pagination: pageRes}, nil
}
