package prices

import (
	"fmt"

	"example.com/price-calculator/conversion"
	iomanagergo "example.com/price-calculator/iomanager.go"
)

type TaxIncludedPriceJob struct {
	IOManager iomanagergo.IOManager `json:"-"`
	TaxRate          float64 `json:"tax_rate"`
	InputPrices      []float64 `json:"input_prices"`
	TaxIncludedPrice map[string]string `json:"tax_included_prices"`
}

func (job *TaxIncludedPriceJob) LoadData() error {
	lines, err := job.IOManager.ReadLines()

	if err != nil {
		return err
	}
	
	prices, err := conversion.StringsToFloat(lines)

	if err != nil {
		return err
	}

	job.InputPrices = prices
	return nil
}

func (job *TaxIncludedPriceJob) Process() error {
	err := job.LoadData()

	if err != nil {
		return err
	}

	result := make(map[string]string)

	for _, price := range job.InputPrices {
		TaxIncludedPrice := price * (1 + job.TaxRate)
		result[fmt.Sprintf("%.2f", price)] = fmt.Sprintf("%.2f", TaxIncludedPrice)
	}

	job.TaxIncludedPrice = result
	return job.IOManager.WriteResult(job)
}

func NewTaxIncludedPriceJob(iom iomanagergo.IOManager, taxRate float64) *TaxIncludedPriceJob {
	return &TaxIncludedPriceJob{
		IOManager: iom,
		InputPrices: []float64{10, 20, 30},
		TaxRate:     taxRate,
	}
}