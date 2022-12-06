package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/voter module sentinel errors
var (
	ErrNotEnoughPollOptions  = sdkerrors.Register(ModuleName, 1200, "poll must to have at least 2 options")
	ErrDuplicatedPollOptions = sdkerrors.Register(ModuleName, 1300, "poll options must not contain duplicates")
	ErrVoteToOld             = sdkerrors.Register(ModuleName, 1400, "vote is older than poll")
	ErrInvalidPollOption     = sdkerrors.Register(ModuleName, 1500, "invalid poll option")
)
