export interface FinanceKpi {
  name: string;
  type: string;
  period: number;
  actual: number;
  budget: number;
  variance: number;
  variancePercent: number;
}
