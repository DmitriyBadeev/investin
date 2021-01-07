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
};



export type Queries = {
  __typename?: 'Queries';
  aggregatePortfolioPaymentProfit?: Maybe<OperationResultOfInt32>;
  aggregatePortfolioPaymentProfitPercent?: Maybe<OperationResultOfDouble>;
  aggregatePortfolioPayments?: Maybe<OperationResultOfListOfPayment>;
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
  currentUserBalance: Scalars['Float'];
  fondReports?: Maybe<Array<Maybe<FondReport>>>;
  marketQuotes?: Maybe<Array<Maybe<CommonMarketQuote>>>;
  portfolioPayments?: Maybe<OperationResultOfListOfPayment>;
  portfolios?: Maybe<Array<Maybe<Portfolio>>>;
  searchAsset?: Maybe<SearchData>;
  secretData?: Maybe<Scalars['String']>;
  stockCandles?: Maybe<Array<Maybe<StockCandle>>>;
  stockReports?: Maybe<Array<Maybe<StockReport>>>;
  test?: Maybe<Scalars['String']>;
};


export type QueriesAggregatePortfolioPaymentProfitArgs = {
  portfolioIds?: Maybe<Array<Scalars['Int']>>;
};


export type QueriesAggregatePortfolioPaymentProfitPercentArgs = {
  portfolioIds?: Maybe<Array<Scalars['Int']>>;
};


export type QueriesAggregatePortfolioPaymentsArgs = {
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
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  payments?: Maybe<Array<Maybe<Payment>>>;
  userId: Scalars['Int'];
};

export type OperationResultOfListOfPayment = {
  __typename?: 'OperationResultOfListOfPayment';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  result?: Maybe<Array<Maybe<Payment>>>;
};

export type OperationResultOfInt32 = {
  __typename?: 'OperationResultOfInt32';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  result: Scalars['Int'];
};

export type OperationResultOfDouble = {
  __typename?: 'OperationResultOfDouble';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  result: Scalars['Float'];
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
  dateTime: Scalars['DateTime'];
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

export type PortfoliosQueryVariables = Exact<{ [key: string]: never; }>;


export type PortfoliosQuery = (
  { __typename?: 'Queries' }
  & { portfolios?: Maybe<Array<Maybe<(
    { __typename?: 'Portfolio' }
    & Pick<Portfolio, 'id' | 'name'>
  )>>> }
);


export const PortfoliosDocument = gql`
    query portfolios {
  portfolios {
    id
    name
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