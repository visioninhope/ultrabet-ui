import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type EventFragment = { __typename?: 'Event', id: string, externalId?: string | null, name: string, startTime: string, homeTeamName: string, awayTeamName: string, isLive: boolean, completed: boolean, sport: { __typename?: 'Sport', id: string, key: string, title: string, description: string, active: boolean, group: string, hasOutrights: boolean }, markets?: Array<{ __typename?: 'Market', id: string, isLive: boolean, name: string, source: string, lastUpdated?: string | null, options?: Array<{ __typename?: 'MarketOption', id: string, name: string, odds: number } | null> | null } | null> | null, scoreUpdates?: Array<{ __typename?: 'ScoreUpdate', id: string, name: string, score: string } | null> | null };

export type ListEventsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ListEventsQuery = { __typename?: 'Query', listEvents?: Array<{ __typename?: 'Event', id: string, externalId?: string | null, name: string, startTime: string, homeTeamName: string, awayTeamName: string, isLive: boolean, completed: boolean, sport: { __typename?: 'Sport', id: string, key: string, title: string, description: string, active: boolean, group: string, hasOutrights: boolean }, markets?: Array<{ __typename?: 'Market', id: string, isLive: boolean, name: string, source: string, lastUpdated?: string | null, options?: Array<{ __typename?: 'MarketOption', id: string, name: string, odds: number } | null> | null } | null> | null, scoreUpdates?: Array<{ __typename?: 'ScoreUpdate', id: string, name: string, score: string } | null> | null } | null> | null };

export type ListLiveEventsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ListLiveEventsQuery = { __typename?: 'Query', listLiveEvents?: Array<{ __typename?: 'Event', id: string, externalId?: string | null, name: string, startTime: string, homeTeamName: string, awayTeamName: string, isLive: boolean, completed: boolean, sport: { __typename?: 'Sport', id: string, key: string, title: string, description: string, active: boolean, group: string, hasOutrights: boolean }, markets?: Array<{ __typename?: 'Market', id: string, isLive: boolean, name: string, source: string, lastUpdated?: string | null, options?: Array<{ __typename?: 'MarketOption', id: string, name: string, odds: number } | null> | null } | null> | null, scoreUpdates?: Array<{ __typename?: 'ScoreUpdate', id: string, name: string, score: string } | null> | null } | null> | null };

export type ListBetsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ListBetsQuery = { __typename?: 'Query', listBets?: Array<{ __typename?: 'Bet', id: string, stake: number, potentialWinnings: number, createdAt: string, status: Types.BetStatus, betOptions?: Array<{ __typename?: 'BetOption', id: number, marketOption: { __typename?: 'MarketOption', id: string, name: string, odds: number, market?: { __typename?: 'Market', id: string, name: string, event?: { __typename?: 'Event', id: string, awayTeamName: string, completed: boolean, homeTeamName: string } | null } | null } } | null> | null } | null> | null };

export type MarketOptionUpdatesSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type MarketOptionUpdatesSubscription = { __typename?: 'Subscription', liveMarketOptionsUpdated?: Array<{ __typename?: 'MarketOption', id: string, name: string, odds: number, lastUpdated?: string | null } | null> | null };

export type ScoreUpdatesSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type ScoreUpdatesSubscription = { __typename?: 'Subscription', eventScoresUpdated?: Array<{ __typename?: 'Event', id: string, externalId?: string | null, name: string, startTime: string, homeTeamName: string, awayTeamName: string, isLive: boolean, completed: boolean, sport: { __typename?: 'Sport', id: string, key: string, title: string, description: string, active: boolean, group: string, hasOutrights: boolean }, markets?: Array<{ __typename?: 'Market', id: string, isLive: boolean, name: string, source: string, lastUpdated?: string | null, options?: Array<{ __typename?: 'MarketOption', id: string, name: string, odds: number } | null> | null } | null> | null, scoreUpdates?: Array<{ __typename?: 'ScoreUpdate', id: string, name: string, score: string } | null> | null } | null> | null };

export type EventStatusUpdatesSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type EventStatusUpdatesSubscription = { __typename?: 'Subscription', eventStatusUpdated?: Array<{ __typename?: 'Event', id: string, externalId?: string | null, name: string, startTime: string, homeTeamName: string, awayTeamName: string, isLive: boolean, completed: boolean, sport: { __typename?: 'Sport', id: string, key: string, title: string, description: string, active: boolean, group: string, hasOutrights: boolean }, markets?: Array<{ __typename?: 'Market', id: string, isLive: boolean, name: string, source: string, lastUpdated?: string | null, options?: Array<{ __typename?: 'MarketOption', id: string, name: string, odds: number } | null> | null } | null> | null, scoreUpdates?: Array<{ __typename?: 'ScoreUpdate', id: string, name: string, score: string } | null> | null } | null> | null };

export type PlaceBetMutationVariables = Types.Exact<{
  betType: Types.BetType;
  marketOptions: Array<Types.Scalars['ID']> | Types.Scalars['ID'];
  stake: Types.Scalars['Float'];
}>;


export type PlaceBetMutation = { __typename?: 'Mutation', placeBet?: { __typename?: 'Bet', id: string, status: Types.BetStatus } | null };

export type PlaceSingleBetsMutationVariables = Types.Exact<{
  options: Array<Types.BetOptionInput> | Types.BetOptionInput;
}>;


export type PlaceSingleBetsMutation = { __typename?: 'Mutation', placeSingleBets?: Array<{ __typename?: 'Bet', id: string, status: Types.BetStatus } | null> | null };

export const EventFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Event"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamName"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamName"}},{"kind":"Field","name":{"kind":"Name","value":"sport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"hasOutrights"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"markets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdated"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"odds"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoreUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]} as unknown as DocumentNode<EventFragment, unknown>;
export const ListEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Event"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Event"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamName"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamName"}},{"kind":"Field","name":{"kind":"Name","value":"sport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"hasOutrights"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"markets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdated"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"odds"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoreUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]} as unknown as DocumentNode<ListEventsQuery, ListEventsQueryVariables>;
export const ListLiveEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListLiveEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listLiveEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Event"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Event"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamName"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamName"}},{"kind":"Field","name":{"kind":"Name","value":"sport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"hasOutrights"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"markets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdated"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"odds"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoreUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]} as unknown as DocumentNode<ListLiveEventsQuery, ListLiveEventsQueryVariables>;
export const ListBetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListBets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listBets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"betOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"marketOption"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"odds"}},{"kind":"Field","name":{"kind":"Name","value":"market"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamName"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamName"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stake"}},{"kind":"Field","name":{"kind":"Name","value":"potentialWinnings"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<ListBetsQuery, ListBetsQueryVariables>;
export const MarketOptionUpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"marketOptionUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"liveMarketOptionsUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"odds"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdated"}}]}}]}}]} as unknown as DocumentNode<MarketOptionUpdatesSubscription, MarketOptionUpdatesSubscriptionVariables>;
export const ScoreUpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"scoreUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventScoresUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Event"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Event"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamName"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamName"}},{"kind":"Field","name":{"kind":"Name","value":"sport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"hasOutrights"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"markets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdated"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"odds"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoreUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]} as unknown as DocumentNode<ScoreUpdatesSubscription, ScoreUpdatesSubscriptionVariables>;
export const EventStatusUpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"eventStatusUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventStatusUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Event"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Event"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamName"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamName"}},{"kind":"Field","name":{"kind":"Name","value":"sport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"hasOutrights"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"markets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdated"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"odds"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoreUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]} as unknown as DocumentNode<EventStatusUpdatesSubscription, EventStatusUpdatesSubscriptionVariables>;
export const PlaceBetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"placeBet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"betType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BetType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"marketOptions"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stake"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placeBet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"betType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"betType"}}},{"kind":"Argument","name":{"kind":"Name","value":"marketOptions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"marketOptions"}}},{"kind":"Argument","name":{"kind":"Name","value":"stake"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stake"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<PlaceBetMutation, PlaceBetMutationVariables>;
export const PlaceSingleBetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"placeSingleBets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BetOptionInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placeSingleBets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<PlaceSingleBetsMutation, PlaceSingleBetsMutationVariables>;