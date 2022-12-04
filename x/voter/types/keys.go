package types

const (
	// ModuleName defines the module name
	ModuleName = "voter"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_voter"

	PollKey      = "Poll/value/"
	PollCountKey = "Poll/count/"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
