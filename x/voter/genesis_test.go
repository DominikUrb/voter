package voter_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "voter/testutil/keeper"
	"voter/testutil/nullify"
	"voter/x/voter"
	"voter/x/voter/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		VoteList: []types.Vote{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		VoteCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.VoterKeeper(t)
	voter.InitGenesis(ctx, *k, genesisState)
	got := voter.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.VoteList, got.VoteList)
	require.Equal(t, genesisState.VoteCount, got.VoteCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
