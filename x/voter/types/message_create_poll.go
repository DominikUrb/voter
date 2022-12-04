package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreatePoll = "create_poll"

var _ sdk.Msg = &MsgCreatePoll{}

func NewMsgCreatePoll(creator string, title string, description string, options []string) *MsgCreatePoll {
	return &MsgCreatePoll{
		Creator:     creator,
		Title:       title,
		Description: description,
		Options:     options,
	}
}

func (msg *MsgCreatePoll) Route() string {
	return RouterKey
}

func (msg *MsgCreatePoll) Type() string {
	return TypeMsgCreatePoll
}

func (msg *MsgCreatePoll) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePoll) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePoll) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
