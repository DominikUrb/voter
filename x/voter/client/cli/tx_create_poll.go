package cli

import (
	"strconv"
	"strings"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"voter/x/voter/types"
)

var _ = strconv.Itoa(0)

func CmdCreatePoll() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-poll [title] [description] [options]",
		Short: "Broadcast message createPoll",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTitle := args[0]
			argDescription := args[1]
			argOptions := args[2]
			argOptionsSlice := strings.Split(argOptions, ",")

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreatePoll(
				clientCtx.GetFromAddress().String(),
				argTitle,
				argDescription,
				argOptionsSlice,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
