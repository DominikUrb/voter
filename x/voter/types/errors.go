package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/voter module sentinel errors
var (
	ErrSample                = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrNotEnoughPollOptions  = sdkerrors.Register(ModuleName, 1200, "poll must to have at least 2 options")
	ErrDuplicatedPollOptions = sdkerrors.Register(ModuleName, 1300, "poll options must not contain duplicates")
	ErrVoteToOld             = sdkerrors.Register(ModuleName, 1400, "vote is older than poll")
)
