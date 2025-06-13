package help

import (
	"encoding/json"
	"log"
	"math"
	"time"
)

func FatalIfErr(err error) {
	if err != nil {
		log.Fatalln(err)
	}
}

func DecimalsToUnit(decimals uint8) uint64 {
	return uint64(math.Pow10(int(decimals)))
}

func UnmarshalDateTime(b []byte, v *time.Time) error {
	var s string
	if err := json.Unmarshal(b, &s); err != nil {
		return err
	}

	t, err := time.Parse("2006-01-02T15:04:05.999999", s)
	if err != nil {
		return err
	}
	*v = t

	return nil
}

func WrapRecheckableFunc(errorPrefix string, f func() (bool, error)) func() {
	return func() {
		for {
			recheck, err := f()
			if err != nil {
				log.Printf("%s: %v\n", errorPrefix, err)
				return
			}
			if !recheck {
				return
			}
		}
	}
}
