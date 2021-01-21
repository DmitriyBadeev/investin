import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The multiplier path scalar represents a valid GraphQL multiplier path string. */
  MultiplierPath: any;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};



export type Queries = {
  __typename?: 'Queries';
  aggregateBalance?: Maybe<OperationResultOfInt32>;
  aggregateBonds?: Maybe<Array<Maybe<BondReport>>>;
  aggregateFonds?: Maybe<Array<Maybe<FondReport>>>;
  aggregateFuturePayments?: Maybe<OperationResultOfListOfPaymentData>;
  aggregateInvestSum: Scalars['Int'];
  aggregatePortfolioCost?: Maybe<OperationResultOfInt32>;
  aggregatePortfolioCostGraph?: Maybe<Array<Maybe<CostGraphData>>>;
  aggregatePortfolioCostWithInvestSum?: Maybe<OperationResultOfCostWithInvestSum>;
  aggregatePortfolioPaperProfit?: Maybe<OperationResultOfValuePercent>;
  aggregatePortfolioPaymentProfit?: Maybe<OperationResultOfValuePercent>;
  aggregatePortfolioPayments?: Maybe<OperationResultOfListOfPayment>;
  aggregateStocks?: Maybe<Array<Maybe<StockReport>>>;
  allAssetOperations?: Maybe<Array<Maybe<AssetOperation>>>;
  allAssetPricesReport?: Maybe<AssetPricesReport>;
  allCurrencyOperations?: Maybe<Array<Maybe<CurrencyOperation>>>;
  allFuturePaymentsReport?: Maybe<Array<Maybe<PaymentDataReport>>>;
  allPortfoliosReport?: Maybe<AllPortfoliosReport>;
  assetActions?: Maybe<Array<Maybe<AssetAction>>>;
  assetReport?: Maybe<AssetData>;
  assetTypes?: Maybe<Array<Maybe<AssetType>>>;
  bondReports?: Maybe<Array<Maybe<BondReport>>>;
  currencyActions?: Maybe<Array<Maybe<CurrencyAction>>>;
  fondReports?: Maybe<Array<Maybe<FondReport>>>;
  marketQuotes?: Maybe<Array<Maybe<CommonMarketQuote>>>;
  portfolioCostGraph?: Maybe<Array<Maybe<TimeValue>>>;
  portfolioPayments?: Maybe<OperationResultOfListOfPayment>;
  portfolios?: Maybe<Array<Maybe<Portfolio>>>;
  searchAsset?: Maybe<SearchData>;
  secretData?: Maybe<Scalars['String']>;
  stockCandles?: Maybe<Array<Maybe<StockCandle>>>;
  stockReports?: Maybe<Array<Maybe<StockReport>>>;
  test?: Maybe<Scalars['String']>;
};


export type QueriesAggregateBalanceArgs = {
  portfolioIds?: Maybe<Array<Scalars['Int']>>;
};


export type QueriesAggregateBondsArgs = {
  portfolioIds?: Maybe<Array<Scalars['Int']>>;
};


export type QueriesAggregateFondsArgs = {
  portfolioIds?: Maybe<Array<Scalars['Int']>>;
};


export type QueriesAggregateFuturePaymentsArgs = {
  portfolioIds?: Maybe<Array<Scalars['Int']>>;
};


export type QueriesAggregateInvestSumArgs = {
  portfolioIds?: Maybe<Array<Scalars['Int']>>;
};


export type QueriesAggregatePortfolioCostArgs = {
  portfolioIds?: Maybe<Array<Scalars['Int']>>;
};


export type QueriesAggregatePortfolioCostGraphArgs = {
  portfolioIds?: Maybe<Array<Scalars['Int']>>;
};


export type QueriesAggregatePortfolioCostWithInvestSumArgs = {
  portfolioIds?: Maybe<Array<Scalars['Int']>>;
};


export type QueriesAggregatePortfolioPaperProfitArgs = {
  portfolioIds?: Maybe<Array<Scalars['Int']>>;
};


export type QueriesAggregatePortfolioPaymentProfitArgs = {
  portfolioIds?: Maybe<Array<Scalars['Int']>>;
};


export type QueriesAggregatePortfolioPaymentsArgs = {
  portfolioIds?: Maybe<Array<Scalars['Int']>>;
};


export type QueriesAggregateStocksArgs = {
  portfolioIds?: Maybe<Array<Scalars['Int']>>;
};


export type QueriesAllAssetOperationsArgs = {
  portfolioId: Scalars['Int'];
};


export type QueriesAllCurrencyOperationsArgs = {
  portfolioId: Scalars['Int'];
};


export type QueriesAssetReportArgs = {
  ticket?: Maybe<Scalars['String']>;
};


export type QueriesBondReportsArgs = {
  portfolioId: Scalars['Int'];
};


export type QueriesFondReportsArgs = {
  portfolioId: Scalars['Int'];
};


export type QueriesPortfolioCostGraphArgs = {
  portfolioId: Scalars['Int'];
};


export type QueriesPortfolioPaymentsArgs = {
  portfolioId: Scalars['Int'];
};


export type QueriesSearchAssetArgs = {
  ticket?: Maybe<Scalars['String']>;
};


export type QueriesStockCandlesArgs = {
  from: Scalars['DateTime'];
  interval: CandleInterval;
  ticket?: Maybe<Scalars['String']>;
};


export type QueriesStockReportsArgs = {
  portfolioId: Scalars['Int'];
};

export type Mutations = {
  __typename?: 'Mutations';
  addPaymentInPortfolio?: Maybe<OperationResult>;
  buyAsset?: Maybe<OperationResult>;
  createPortfolio?: Maybe<OperationResult>;
  refillBalance?: Maybe<OperationResult>;
  sellAsset?: Maybe<OperationResult>;
  startAssetReportsUpdate?: Maybe<Scalars['String']>;
  startPortfoliosReportUpdate?: Maybe<Scalars['String']>;
  stopUpdate?: Maybe<Scalars['String']>;
  withdrawalBalance?: Maybe<OperationResult>;
};


export type MutationsAddPaymentInPortfolioArgs = {
  paymentInput?: Maybe<PaymentInput>;
};


export type MutationsBuyAssetArgs = {
  buyAssetInput?: Maybe<BuyAssetInput>;
};


export type MutationsCreatePortfolioArgs = {
  name?: Maybe<Scalars['String']>;
  portfolioType: Scalars['Int'];
};


export type MutationsRefillBalanceArgs = {
  refillBalanceInput?: Maybe<RefillBalanceInput>;
};


export type MutationsSellAssetArgs = {
  sellAssetInput?: Maybe<SellAssetInput>;
};


export type MutationsStopUpdateArgs = {
  handlerId?: Maybe<Scalars['String']>;
};


export type MutationsWithdrawalBalanceArgs = {
  withdrawalBalanceInput?: Maybe<WithdrawalBalanceInput>;
};

export type Subscriptions = {
  __typename?: 'Subscriptions';
  onUpdateBondReports?: Maybe<Array<Maybe<BondReport>>>;
  onUpdateFondReports?: Maybe<Array<Maybe<FondReport>>>;
  onUpdatePortfoliosReport?: Maybe<AllPortfoliosReport>;
  onUpdatePricesReport?: Maybe<AssetPricesReport>;
  onUpdateStockReports?: Maybe<Array<Maybe<StockReport>>>;
};


export type SubscriptionsOnUpdateBondReportsArgs = {
  portfolioId: Scalars['Int'];
};


export type SubscriptionsOnUpdateFondReportsArgs = {
  portfolioId: Scalars['Int'];
};


export type SubscriptionsOnUpdateStockReportsArgs = {
  portfolioId: Scalars['Int'];
};


export type Portfolio = {
  __typename?: 'Portfolio';
  assetOperations?: Maybe<Array<Maybe<AssetOperation>>>;
  dailyPortfolioReports?: Maybe<Array<Maybe<DailyPortfolioReport>>>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  payments?: Maybe<Array<Maybe<Payment>>>;
  portfolioType?: Maybe<PortfolioType>;
  portfolioTypeId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

export type OperationResultOfListOfPayment = {
  __typename?: 'OperationResultOfListOfPayment';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  result?: Maybe<Array<Maybe<Payment>>>;
};

export type OperationResultOfListOfPaymentData = {
  __typename?: 'OperationResultOfListOfPaymentData';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  result?: Maybe<Array<Maybe<PaymentData>>>;
};

export type OperationResultOfValuePercent = {
  __typename?: 'OperationResultOfValuePercent';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  result?: Maybe<ValuePercent>;
};

export type OperationResultOfInt32 = {
  __typename?: 'OperationResultOfInt32';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  result: Scalars['Int'];
};

export type OperationResultOfCostWithInvestSum = {
  __typename?: 'OperationResultOfCostWithInvestSum';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  result?: Maybe<CostWithInvestSum>;
};

export type StockReport = {
  __typename?: 'StockReport';
  allPrice: Scalars['Float'];
  amount: Scalars['Int'];
  boughtPrice: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  nearestDividend?: Maybe<PaymentData>;
  paidDividends: Scalars['Float'];
  paperProfit: Scalars['Float'];
  paperProfitPercent: Scalars['Float'];
  price: Scalars['Float'];
  priceChange: Scalars['Float'];
  ticket?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
};

export type FondReport = {
  __typename?: 'FondReport';
  allPrice: Scalars['Float'];
  amount: Scalars['Int'];
  boughtPrice: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  paperProfit: Scalars['Float'];
  paperProfitPercent: Scalars['Float'];
  price: Scalars['Float'];
  priceChange: Scalars['Float'];
  ticket?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
};

export type BondReport = {
  __typename?: 'BondReport';
  allPrice: Scalars['Float'];
  amortizationDate: Scalars['DateTime'];
  amount: Scalars['Int'];
  boughtPrice: Scalars['Float'];
  hasAmortized: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  nearestPayment?: Maybe<PaymentData>;
  paidPayments: Scalars['Float'];
  paperProfit: Scalars['Float'];
  paperProfitPercent: Scalars['Float'];
  price: Scalars['Float'];
  priceChange: Scalars['Float'];
  ticket?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
};

export type AllPortfoliosReport = {
  __typename?: 'AllPortfoliosReport';
  allCost: Scalars['Float'];
  allInvestSum: Scalars['Float'];
  allPaperProfit: Scalars['Float'];
  allPaperProfitPercent: Scalars['Float'];
  allPaymentProfit: Scalars['Float'];
  allPaymentProfitPercent: Scalars['Float'];
  allUserBalance: Scalars['Float'];
};

export type AssetPricesReport = {
  __typename?: 'AssetPricesReport';
  bondPrice: Scalars['Float'];
  fondPrice: Scalars['Float'];
  stockPrice: Scalars['Float'];
};

export type PaymentDataReport = {
  __typename?: 'PaymentDataReport';
  allPayment: Scalars['Float'];
  amount: Scalars['Int'];
  currencyId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  paymentValue: Scalars['Float'];
  registryCloseDate: Scalars['DateTime'];
  ticket?: Maybe<Scalars['String']>;
};

export type CommonMarketQuote = {
  __typename?: 'CommonMarketQuote';
  change: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type SearchData = {
  __typename?: 'SearchData';
  name?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeName?: Maybe<Scalars['String']>;
};

export type AssetData = {
  __typename?: 'AssetData';
  allPrice: Scalars['Float'];
  amount: Scalars['Int'];
  boughtPrice: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  nearestDividend?: Maybe<PaymentData>;
  paidDividends: Scalars['Float'];
  paperProfit: Scalars['Float'];
  paperProfitPercent: Scalars['Float'];
  payments?: Maybe<Array<Maybe<PaymentData>>>;
  price: Scalars['Float'];
  priceChange: Scalars['Float'];
  ticket?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
};

export type AssetOperation = {
  __typename?: 'AssetOperation';
  amount: Scalars['Int'];
  assetAction?: Maybe<AssetAction>;
  assetActionId: Scalars['Int'];
  assetType?: Maybe<AssetType>;
  assetTypeId: Scalars['Int'];
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  paymentPrice: Scalars['Int'];
  portfolio?: Maybe<Portfolio>;
  portfolioId: Scalars['Int'];
  ticket?: Maybe<Scalars['String']>;
};

export type CurrencyOperation = {
  __typename?: 'CurrencyOperation';
  currencyAction?: Maybe<CurrencyAction>;
  currencyActionId: Scalars['Int'];
  currencyId?: Maybe<Scalars['String']>;
  currencyName?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  portfolio?: Maybe<Portfolio>;
  portfolioId: Scalars['Int'];
  price: Scalars['Int'];
};

export type AssetType = {
  __typename?: 'AssetType';
  assetOperations?: Maybe<Array<Maybe<AssetOperation>>>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type AssetAction = {
  __typename?: 'AssetAction';
  assetOperations?: Maybe<Array<Maybe<AssetOperation>>>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type CurrencyAction = {
  __typename?: 'CurrencyAction';
  currencyOperations?: Maybe<Array<Maybe<CurrencyOperation>>>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type StockCandle = {
  __typename?: 'StockCandle';
  close: Scalars['Float'];
  date: Scalars['Long'];
  high: Scalars['Float'];
  low: Scalars['Float'];
  open: Scalars['Float'];
  value: Scalars['Float'];
  volume: Scalars['Float'];
};


export enum CandleInterval {
  Week = 'WEEK',
  Day = 'DAY',
  Month = 'MONTH',
  Hour = 'HOUR'
}

export type TimeValue = {
  __typename?: 'TimeValue';
  date: Scalars['Long'];
  value: Scalars['Int'];
};

export type CostGraphData = {
  __typename?: 'CostGraphData';
  data?: Maybe<Array<Maybe<TimeValue>>>;
  portfolioId: Scalars['Int'];
  portfolioName?: Maybe<Scalars['String']>;
};

export type OperationResult = {
  __typename?: 'OperationResult';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type BuyAssetInput = {
  amount: Scalars['Int'];
  assetTypeId: Scalars['Int'];
  date: Scalars['DateTime'];
  portfolioId: Scalars['Int'];
  price: Scalars['Int'];
  ticket?: Maybe<Scalars['String']>;
};

export type SellAssetInput = {
  amount: Scalars['Int'];
  assetTypeId: Scalars['Int'];
  date: Scalars['DateTime'];
  portfolioId: Scalars['Int'];
  price: Scalars['Int'];
  ticket?: Maybe<Scalars['String']>;
};

export type PaymentInput = {
  amount: Scalars['Int'];
  date: Scalars['DateTime'];
  paymentValue: Scalars['Int'];
  portfolioId: Scalars['Int'];
  ticket?: Maybe<Scalars['String']>;
};

export type RefillBalanceInput = {
  date: Scalars['DateTime'];
  portfolioId: Scalars['Int'];
  price: Scalars['Int'];
};

export type WithdrawalBalanceInput = {
  date: Scalars['DateTime'];
  portfolioId: Scalars['Int'];
  price: Scalars['Int'];
};

export type PortfolioType = {
  __typename?: 'PortfolioType';
  iconUrl?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  portfolios?: Maybe<Array<Maybe<Portfolio>>>;
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Int'];
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  paymentValue: Scalars['Int'];
  portfolio?: Maybe<Portfolio>;
  portfolioId: Scalars['Int'];
  ticket?: Maybe<Scalars['String']>;
};

export type DailyPortfolioReport = {
  __typename?: 'DailyPortfolioReport';
  cost: Scalars['Int'];
  id: Scalars['Int'];
  portfolio?: Maybe<Portfolio>;
  portfolioId: Scalars['Int'];
  profit: Scalars['Int'];
  time: Scalars['DateTime'];
};

export type PaymentData = {
  __typename?: 'PaymentData';
  allPayment: Scalars['Int'];
  amount: Scalars['Int'];
  currencyId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  paymentValue: Scalars['Int'];
  registryCloseDate: Scalars['DateTime'];
  ticket?: Maybe<Scalars['String']>;
};

export type ValuePercent = {
  __typename?: 'ValuePercent';
  percent: Scalars['Float'];
  value: Scalars['Int'];
};

export type CostWithInvestSum = {
  __typename?: 'CostWithInvestSum';
  cost: Scalars['Int'];
  investSum: Scalars['Int'];
};


export type AggregatePortfolioPaymentProfitQueryVariables = Exact<{
  portfolioIds?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type AggregatePortfolioPaymentProfitQuery = (
  { __typename?: 'Queries' }
  & { aggregatePortfolioPaymentProfit?: Maybe<(
    { __typename?: 'OperationResultOfValuePercent' }
    & Pick<OperationResultOfValuePercent, 'isSuccess' | 'message'>
    & { result?: Maybe<(
      { __typename?: 'ValuePercent' }
      & Pick<ValuePercent, 'value' | 'percent'>
    )> }
  )> }
);

export type AggregatePortfolioPaperProfitQueryVariables = Exact<{
  portfolioIds?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type AggregatePortfolioPaperProfitQuery = (
  { __typename?: 'Queries' }
  & { aggregatePortfolioPaperProfit?: Maybe<(
    { __typename?: 'OperationResultOfValuePercent' }
    & Pick<OperationResultOfValuePercent, 'isSuccess' | 'message'>
    & { result?: Maybe<(
      { __typename?: 'ValuePercent' }
      & Pick<ValuePercent, 'value' | 'percent'>
    )> }
  )> }
);

export type AggregatePortfolioCostWithInvestSumQueryVariables = Exact<{
  portfolioIds?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type AggregatePortfolioCostWithInvestSumQuery = (
  { __typename?: 'Queries' }
  & { aggregatePortfolioCostWithInvestSum?: Maybe<(
    { __typename?: 'OperationResultOfCostWithInvestSum' }
    & Pick<OperationResultOfCostWithInvestSum, 'isSuccess' | 'message'>
    & { result?: Maybe<(
      { __typename?: 'CostWithInvestSum' }
      & Pick<CostWithInvestSum, 'cost' | 'investSum'>
    )> }
  )> }
);

export type AggregateBalanceQueryVariables = Exact<{
  portfolioIds?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type AggregateBalanceQuery = (
  { __typename?: 'Queries' }
  & { aggregateBalance?: Maybe<(
    { __typename?: 'OperationResultOfInt32' }
    & Pick<OperationResultOfInt32, 'isSuccess' | 'message' | 'result'>
  )> }
);

export type AggregatePortfolioCostGraphQueryVariables = Exact<{
  portfolioIds?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type AggregatePortfolioCostGraphQuery = (
  { __typename?: 'Queries' }
  & { aggregatePortfolioCostGraph?: Maybe<Array<Maybe<(
    { __typename?: 'CostGraphData' }
    & Pick<CostGraphData, 'portfolioId' | 'portfolioName'>
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'TimeValue' }
      & Pick<TimeValue, 'date' | 'value'>
    )>>> }
  )>>> }
);

export type SparklineQueryVariables = Exact<{
  ticket: Scalars['String'];
  from: Scalars['DateTime'];
  interval: CandleInterval;
}>;


export type SparklineQuery = (
  { __typename?: 'Queries' }
  & { stockCandles?: Maybe<Array<Maybe<(
    { __typename?: 'StockCandle' }
    & Pick<StockCandle, 'date' | 'close'>
  )>>> }
);

export type PortfoliosQueryVariables = Exact<{ [key: string]: never; }>;


export type PortfoliosQuery = (
  { __typename?: 'Queries' }
  & { portfolios?: Maybe<Array<Maybe<(
    { __typename?: 'Portfolio' }
    & Pick<Portfolio, 'id' | 'name'>
    & { portfolioType?: Maybe<(
      { __typename?: 'PortfolioType' }
      & Pick<PortfolioType, 'iconUrl'>
    )> }
  )>>> }
);

export type StockReportsQueryVariables = Exact<{
  portfolioIds?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type StockReportsQuery = (
  { __typename?: 'Queries' }
  & { aggregateStocks?: Maybe<Array<Maybe<(
    { __typename?: 'StockReport' }
    & Pick<StockReport, 'name' | 'ticket' | 'amount' | 'price' | 'priceChange' | 'allPrice' | 'boughtPrice' | 'paperProfit' | 'paperProfitPercent' | 'paidDividends' | 'updateTime'>
    & { nearestDividend?: Maybe<(
      { __typename?: 'PaymentData' }
      & Pick<PaymentData, 'currencyId' | 'paymentValue' | 'allPayment' | 'registryCloseDate'>
    )> }
  )>>> }
);

export type FondReportsQueryVariables = Exact<{
  portfolioIds?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type FondReportsQuery = (
  { __typename?: 'Queries' }
  & { aggregateFonds?: Maybe<Array<Maybe<(
    { __typename?: 'FondReport' }
    & Pick<FondReport, 'name' | 'ticket' | 'amount' | 'price' | 'priceChange' | 'allPrice' | 'boughtPrice' | 'paperProfit' | 'paperProfitPercent' | 'updateTime'>
  )>>> }
);

export type BondReportsQueryVariables = Exact<{
  portfolioIds?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type BondReportsQuery = (
  { __typename?: 'Queries' }
  & { aggregateBonds?: Maybe<Array<Maybe<(
    { __typename?: 'BondReport' }
    & Pick<BondReport, 'name' | 'ticket' | 'amount' | 'price' | 'priceChange' | 'allPrice' | 'boughtPrice' | 'paperProfit' | 'paperProfitPercent' | 'paidPayments' | 'updateTime' | 'amortizationDate' | 'hasAmortized'>
    & { nearestPayment?: Maybe<(
      { __typename?: 'PaymentData' }
      & Pick<PaymentData, 'currencyId' | 'paymentValue' | 'allPayment' | 'registryCloseDate'>
    )> }
  )>>> }
);

export type AggregateFuturePaymentsQueryVariables = Exact<{
  portfolioIds?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type AggregateFuturePaymentsQuery = (
  { __typename?: 'Queries' }
  & { aggregateFuturePayments?: Maybe<(
    { __typename?: 'OperationResultOfListOfPaymentData' }
    & Pick<OperationResultOfListOfPaymentData, 'isSuccess' | 'message'>
    & { result?: Maybe<Array<Maybe<(
      { __typename?: 'PaymentData' }
      & Pick<PaymentData, 'name' | 'ticket' | 'amount' | 'allPayment' | 'paymentValue' | 'registryCloseDate' | 'currencyId'>
    )>>> }
  )> }
);

export type SecretQueryVariables = Exact<{ [key: string]: never; }>;


export type SecretQuery = (
  { __typename?: 'Queries' }
  & Pick<Queries, 'secretData'>
);


export const AggregatePortfolioPaymentProfitDocument = gql`
    query aggregatePortfolioPaymentProfit($portfolioIds: [Int!]) {
  aggregatePortfolioPaymentProfit(portfolioIds: $portfolioIds) {
    isSuccess
    message
    result {
      value
      percent
    }
  }
}
    `;

/**
 * __useAggregatePortfolioPaymentProfitQuery__
 *
 * To run a query within a React component, call `useAggregatePortfolioPaymentProfitQuery` and pass it any options that fit your needs.
 * When your component renders, `useAggregatePortfolioPaymentProfitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAggregatePortfolioPaymentProfitQuery({
 *   variables: {
 *      portfolioIds: // value for 'portfolioIds'
 *   },
 * });
 */
export function useAggregatePortfolioPaymentProfitQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AggregatePortfolioPaymentProfitQuery, AggregatePortfolioPaymentProfitQueryVariables>) {
        return ApolloReactHooks.useQuery<AggregatePortfolioPaymentProfitQuery, AggregatePortfolioPaymentProfitQueryVariables>(AggregatePortfolioPaymentProfitDocument, baseOptions);
      }
export function useAggregatePortfolioPaymentProfitLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AggregatePortfolioPaymentProfitQuery, AggregatePortfolioPaymentProfitQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AggregatePortfolioPaymentProfitQuery, AggregatePortfolioPaymentProfitQueryVariables>(AggregatePortfolioPaymentProfitDocument, baseOptions);
        }
export type AggregatePortfolioPaymentProfitQueryHookResult = ReturnType<typeof useAggregatePortfolioPaymentProfitQuery>;
export type AggregatePortfolioPaymentProfitLazyQueryHookResult = ReturnType<typeof useAggregatePortfolioPaymentProfitLazyQuery>;
export type AggregatePortfolioPaymentProfitQueryResult = ApolloReactCommon.QueryResult<AggregatePortfolioPaymentProfitQuery, AggregatePortfolioPaymentProfitQueryVariables>;
export const AggregatePortfolioPaperProfitDocument = gql`
    query aggregatePortfolioPaperProfit($portfolioIds: [Int!]) {
  aggregatePortfolioPaperProfit(portfolioIds: $portfolioIds) {
    isSuccess
    message
    result {
      value
      percent
    }
  }
}
    `;

/**
 * __useAggregatePortfolioPaperProfitQuery__
 *
 * To run a query within a React component, call `useAggregatePortfolioPaperProfitQuery` and pass it any options that fit your needs.
 * When your component renders, `useAggregatePortfolioPaperProfitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAggregatePortfolioPaperProfitQuery({
 *   variables: {
 *      portfolioIds: // value for 'portfolioIds'
 *   },
 * });
 */
export function useAggregatePortfolioPaperProfitQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AggregatePortfolioPaperProfitQuery, AggregatePortfolioPaperProfitQueryVariables>) {
        return ApolloReactHooks.useQuery<AggregatePortfolioPaperProfitQuery, AggregatePortfolioPaperProfitQueryVariables>(AggregatePortfolioPaperProfitDocument, baseOptions);
      }
export function useAggregatePortfolioPaperProfitLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AggregatePortfolioPaperProfitQuery, AggregatePortfolioPaperProfitQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AggregatePortfolioPaperProfitQuery, AggregatePortfolioPaperProfitQueryVariables>(AggregatePortfolioPaperProfitDocument, baseOptions);
        }
export type AggregatePortfolioPaperProfitQueryHookResult = ReturnType<typeof useAggregatePortfolioPaperProfitQuery>;
export type AggregatePortfolioPaperProfitLazyQueryHookResult = ReturnType<typeof useAggregatePortfolioPaperProfitLazyQuery>;
export type AggregatePortfolioPaperProfitQueryResult = ApolloReactCommon.QueryResult<AggregatePortfolioPaperProfitQuery, AggregatePortfolioPaperProfitQueryVariables>;
export const AggregatePortfolioCostWithInvestSumDocument = gql`
    query aggregatePortfolioCostWithInvestSum($portfolioIds: [Int!]) {
  aggregatePortfolioCostWithInvestSum(portfolioIds: $portfolioIds) {
    isSuccess
    message
    result {
      cost
      investSum
    }
  }
}
    `;

/**
 * __useAggregatePortfolioCostWithInvestSumQuery__
 *
 * To run a query within a React component, call `useAggregatePortfolioCostWithInvestSumQuery` and pass it any options that fit your needs.
 * When your component renders, `useAggregatePortfolioCostWithInvestSumQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAggregatePortfolioCostWithInvestSumQuery({
 *   variables: {
 *      portfolioIds: // value for 'portfolioIds'
 *   },
 * });
 */
export function useAggregatePortfolioCostWithInvestSumQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AggregatePortfolioCostWithInvestSumQuery, AggregatePortfolioCostWithInvestSumQueryVariables>) {
        return ApolloReactHooks.useQuery<AggregatePortfolioCostWithInvestSumQuery, AggregatePortfolioCostWithInvestSumQueryVariables>(AggregatePortfolioCostWithInvestSumDocument, baseOptions);
      }
export function useAggregatePortfolioCostWithInvestSumLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AggregatePortfolioCostWithInvestSumQuery, AggregatePortfolioCostWithInvestSumQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AggregatePortfolioCostWithInvestSumQuery, AggregatePortfolioCostWithInvestSumQueryVariables>(AggregatePortfolioCostWithInvestSumDocument, baseOptions);
        }
export type AggregatePortfolioCostWithInvestSumQueryHookResult = ReturnType<typeof useAggregatePortfolioCostWithInvestSumQuery>;
export type AggregatePortfolioCostWithInvestSumLazyQueryHookResult = ReturnType<typeof useAggregatePortfolioCostWithInvestSumLazyQuery>;
export type AggregatePortfolioCostWithInvestSumQueryResult = ApolloReactCommon.QueryResult<AggregatePortfolioCostWithInvestSumQuery, AggregatePortfolioCostWithInvestSumQueryVariables>;
export const AggregateBalanceDocument = gql`
    query aggregateBalance($portfolioIds: [Int!]) {
  aggregateBalance(portfolioIds: $portfolioIds) {
    isSuccess
    message
    result
  }
}
    `;

/**
 * __useAggregateBalanceQuery__
 *
 * To run a query within a React component, call `useAggregateBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useAggregateBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAggregateBalanceQuery({
 *   variables: {
 *      portfolioIds: // value for 'portfolioIds'
 *   },
 * });
 */
export function useAggregateBalanceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AggregateBalanceQuery, AggregateBalanceQueryVariables>) {
        return ApolloReactHooks.useQuery<AggregateBalanceQuery, AggregateBalanceQueryVariables>(AggregateBalanceDocument, baseOptions);
      }
export function useAggregateBalanceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AggregateBalanceQuery, AggregateBalanceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AggregateBalanceQuery, AggregateBalanceQueryVariables>(AggregateBalanceDocument, baseOptions);
        }
export type AggregateBalanceQueryHookResult = ReturnType<typeof useAggregateBalanceQuery>;
export type AggregateBalanceLazyQueryHookResult = ReturnType<typeof useAggregateBalanceLazyQuery>;
export type AggregateBalanceQueryResult = ApolloReactCommon.QueryResult<AggregateBalanceQuery, AggregateBalanceQueryVariables>;
export const AggregatePortfolioCostGraphDocument = gql`
    query aggregatePortfolioCostGraph($portfolioIds: [Int!]) {
  aggregatePortfolioCostGraph(portfolioIds: $portfolioIds) {
    portfolioId
    portfolioName
    data {
      date
      value
    }
  }
}
    `;

/**
 * __useAggregatePortfolioCostGraphQuery__
 *
 * To run a query within a React component, call `useAggregatePortfolioCostGraphQuery` and pass it any options that fit your needs.
 * When your component renders, `useAggregatePortfolioCostGraphQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAggregatePortfolioCostGraphQuery({
 *   variables: {
 *      portfolioIds: // value for 'portfolioIds'
 *   },
 * });
 */
export function useAggregatePortfolioCostGraphQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AggregatePortfolioCostGraphQuery, AggregatePortfolioCostGraphQueryVariables>) {
        return ApolloReactHooks.useQuery<AggregatePortfolioCostGraphQuery, AggregatePortfolioCostGraphQueryVariables>(AggregatePortfolioCostGraphDocument, baseOptions);
      }
export function useAggregatePortfolioCostGraphLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AggregatePortfolioCostGraphQuery, AggregatePortfolioCostGraphQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AggregatePortfolioCostGraphQuery, AggregatePortfolioCostGraphQueryVariables>(AggregatePortfolioCostGraphDocument, baseOptions);
        }
export type AggregatePortfolioCostGraphQueryHookResult = ReturnType<typeof useAggregatePortfolioCostGraphQuery>;
export type AggregatePortfolioCostGraphLazyQueryHookResult = ReturnType<typeof useAggregatePortfolioCostGraphLazyQuery>;
export type AggregatePortfolioCostGraphQueryResult = ApolloReactCommon.QueryResult<AggregatePortfolioCostGraphQuery, AggregatePortfolioCostGraphQueryVariables>;
export const SparklineDocument = gql`
    query Sparkline($ticket: String!, $from: DateTime!, $interval: CandleInterval!) {
  stockCandles(ticket: $ticket, from: $from, interval: $interval) {
    date
    close
  }
}
    `;

/**
 * __useSparklineQuery__
 *
 * To run a query within a React component, call `useSparklineQuery` and pass it any options that fit your needs.
 * When your component renders, `useSparklineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSparklineQuery({
 *   variables: {
 *      ticket: // value for 'ticket'
 *      from: // value for 'from'
 *      interval: // value for 'interval'
 *   },
 * });
 */
export function useSparklineQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SparklineQuery, SparklineQueryVariables>) {
        return ApolloReactHooks.useQuery<SparklineQuery, SparklineQueryVariables>(SparklineDocument, baseOptions);
      }
export function useSparklineLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SparklineQuery, SparklineQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SparklineQuery, SparklineQueryVariables>(SparklineDocument, baseOptions);
        }
export type SparklineQueryHookResult = ReturnType<typeof useSparklineQuery>;
export type SparklineLazyQueryHookResult = ReturnType<typeof useSparklineLazyQuery>;
export type SparklineQueryResult = ApolloReactCommon.QueryResult<SparklineQuery, SparklineQueryVariables>;
export const PortfoliosDocument = gql`
    query portfolios {
  portfolios {
    id
    name
    portfolioType {
      iconUrl
    }
  }
}
    `;

/**
 * __usePortfoliosQuery__
 *
 * To run a query within a React component, call `usePortfoliosQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortfoliosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortfoliosQuery({
 *   variables: {
 *   },
 * });
 */
export function usePortfoliosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PortfoliosQuery, PortfoliosQueryVariables>) {
        return ApolloReactHooks.useQuery<PortfoliosQuery, PortfoliosQueryVariables>(PortfoliosDocument, baseOptions);
      }
export function usePortfoliosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PortfoliosQuery, PortfoliosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PortfoliosQuery, PortfoliosQueryVariables>(PortfoliosDocument, baseOptions);
        }
export type PortfoliosQueryHookResult = ReturnType<typeof usePortfoliosQuery>;
export type PortfoliosLazyQueryHookResult = ReturnType<typeof usePortfoliosLazyQuery>;
export type PortfoliosQueryResult = ApolloReactCommon.QueryResult<PortfoliosQuery, PortfoliosQueryVariables>;
export const StockReportsDocument = gql`
    query stockReports($portfolioIds: [Int!]) {
  aggregateStocks(portfolioIds: $portfolioIds) {
    name
    ticket
    amount
    price
    priceChange
    allPrice
    boughtPrice
    paperProfit
    paperProfitPercent
    nearestDividend {
      currencyId
      paymentValue
      allPayment
      registryCloseDate
    }
    paidDividends
    updateTime
  }
}
    `;

/**
 * __useStockReportsQuery__
 *
 * To run a query within a React component, call `useStockReportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockReportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockReportsQuery({
 *   variables: {
 *      portfolioIds: // value for 'portfolioIds'
 *   },
 * });
 */
export function useStockReportsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<StockReportsQuery, StockReportsQueryVariables>) {
        return ApolloReactHooks.useQuery<StockReportsQuery, StockReportsQueryVariables>(StockReportsDocument, baseOptions);
      }
export function useStockReportsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StockReportsQuery, StockReportsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<StockReportsQuery, StockReportsQueryVariables>(StockReportsDocument, baseOptions);
        }
export type StockReportsQueryHookResult = ReturnType<typeof useStockReportsQuery>;
export type StockReportsLazyQueryHookResult = ReturnType<typeof useStockReportsLazyQuery>;
export type StockReportsQueryResult = ApolloReactCommon.QueryResult<StockReportsQuery, StockReportsQueryVariables>;
export const FondReportsDocument = gql`
    query fondReports($portfolioIds: [Int!]) {
  aggregateFonds(portfolioIds: $portfolioIds) {
    name
    ticket
    amount
    price
    priceChange
    allPrice
    boughtPrice
    paperProfit
    paperProfitPercent
    updateTime
  }
}
    `;

/**
 * __useFondReportsQuery__
 *
 * To run a query within a React component, call `useFondReportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFondReportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFondReportsQuery({
 *   variables: {
 *      portfolioIds: // value for 'portfolioIds'
 *   },
 * });
 */
export function useFondReportsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FondReportsQuery, FondReportsQueryVariables>) {
        return ApolloReactHooks.useQuery<FondReportsQuery, FondReportsQueryVariables>(FondReportsDocument, baseOptions);
      }
export function useFondReportsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FondReportsQuery, FondReportsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FondReportsQuery, FondReportsQueryVariables>(FondReportsDocument, baseOptions);
        }
export type FondReportsQueryHookResult = ReturnType<typeof useFondReportsQuery>;
export type FondReportsLazyQueryHookResult = ReturnType<typeof useFondReportsLazyQuery>;
export type FondReportsQueryResult = ApolloReactCommon.QueryResult<FondReportsQuery, FondReportsQueryVariables>;
export const BondReportsDocument = gql`
    query bondReports($portfolioIds: [Int!]) {
  aggregateBonds(portfolioIds: $portfolioIds) {
    name
    ticket
    amount
    price
    priceChange
    allPrice
    boughtPrice
    paperProfit
    paperProfitPercent
    nearestPayment {
      currencyId
      paymentValue
      allPayment
      registryCloseDate
    }
    paidPayments
    updateTime
    amortizationDate
    hasAmortized
  }
}
    `;

/**
 * __useBondReportsQuery__
 *
 * To run a query within a React component, call `useBondReportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBondReportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBondReportsQuery({
 *   variables: {
 *      portfolioIds: // value for 'portfolioIds'
 *   },
 * });
 */
export function useBondReportsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BondReportsQuery, BondReportsQueryVariables>) {
        return ApolloReactHooks.useQuery<BondReportsQuery, BondReportsQueryVariables>(BondReportsDocument, baseOptions);
      }
export function useBondReportsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BondReportsQuery, BondReportsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BondReportsQuery, BondReportsQueryVariables>(BondReportsDocument, baseOptions);
        }
export type BondReportsQueryHookResult = ReturnType<typeof useBondReportsQuery>;
export type BondReportsLazyQueryHookResult = ReturnType<typeof useBondReportsLazyQuery>;
export type BondReportsQueryResult = ApolloReactCommon.QueryResult<BondReportsQuery, BondReportsQueryVariables>;
export const AggregateFuturePaymentsDocument = gql`
    query aggregateFuturePayments($portfolioIds: [Int!]) {
  aggregateFuturePayments(portfolioIds: $portfolioIds) {
    isSuccess
    message
    result {
      name
      ticket
      amount
      allPayment
      paymentValue
      registryCloseDate
      currencyId
    }
  }
}
    `;

/**
 * __useAggregateFuturePaymentsQuery__
 *
 * To run a query within a React component, call `useAggregateFuturePaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAggregateFuturePaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAggregateFuturePaymentsQuery({
 *   variables: {
 *      portfolioIds: // value for 'portfolioIds'
 *   },
 * });
 */
export function useAggregateFuturePaymentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AggregateFuturePaymentsQuery, AggregateFuturePaymentsQueryVariables>) {
        return ApolloReactHooks.useQuery<AggregateFuturePaymentsQuery, AggregateFuturePaymentsQueryVariables>(AggregateFuturePaymentsDocument, baseOptions);
      }
export function useAggregateFuturePaymentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AggregateFuturePaymentsQuery, AggregateFuturePaymentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AggregateFuturePaymentsQuery, AggregateFuturePaymentsQueryVariables>(AggregateFuturePaymentsDocument, baseOptions);
        }
export type AggregateFuturePaymentsQueryHookResult = ReturnType<typeof useAggregateFuturePaymentsQuery>;
export type AggregateFuturePaymentsLazyQueryHookResult = ReturnType<typeof useAggregateFuturePaymentsLazyQuery>;
export type AggregateFuturePaymentsQueryResult = ApolloReactCommon.QueryResult<AggregateFuturePaymentsQuery, AggregateFuturePaymentsQueryVariables>;
export const SecretDocument = gql`
    query Secret {
  secretData
}
    `;

/**
 * __useSecretQuery__
 *
 * To run a query within a React component, call `useSecretQuery` and pass it any options that fit your needs.
 * When your component renders, `useSecretQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSecretQuery({
 *   variables: {
 *   },
 * });
 */
export function useSecretQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SecretQuery, SecretQueryVariables>) {
        return ApolloReactHooks.useQuery<SecretQuery, SecretQueryVariables>(SecretDocument, baseOptions);
      }
export function useSecretLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SecretQuery, SecretQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SecretQuery, SecretQueryVariables>(SecretDocument, baseOptions);
        }
export type SecretQueryHookResult = ReturnType<typeof useSecretQuery>;
export type SecretLazyQueryHookResult = ReturnType<typeof useSecretLazyQuery>;
export type SecretQueryResult = ApolloReactCommon.QueryResult<SecretQuery, SecretQueryVariables>;