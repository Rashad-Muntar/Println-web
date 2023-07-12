import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  UUID: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Edge = {
  __typename?: 'Edge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Job>;
};

export type File = {
  __typename?: 'File';
  price: Scalars['Float']['output'];
  url: Scalars['String']['output'];
};

export type Job = {
  __typename?: 'Job';
  Id: Scalars['Int']['output'];
  completed: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  file: Scalars['String']['output'];
  onGoing: Scalars['Boolean']['output'];
};

export type JobResult = {
  __typename?: 'JobResult';
  edges?: Maybe<Array<Maybe<Edge>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount?: Maybe<Scalars['String']['output']>;
};

export type LoggedUser = {
  __typename?: 'LoggedUser';
  token: Scalars['String']['output'];
  user: User;
};

export type LoginUser = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createJob: Job;
  deleteJob: Scalars['String']['output'];
  login: LoggedUser;
  processFile: File;
  signup: User;
  updateJob: Job;
};


export type MutationCreateJobArgs = {
  input: NewJob;
};


export type MutationDeleteJobArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  input: LoginUser;
};


export type MutationProcessFileArgs = {
  url: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  input: NewUser;
};


export type MutationUpdateJobArgs = {
  id: Scalars['Int']['input'];
  input: NewJob;
};

export type NewJob = {
  completed: Scalars['Boolean']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['String']['input'];
  onGoing: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};

export type NewUser = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  startCurso?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  job: Job;
  jobs: JobResult;
  placeholder?: Maybe<Scalars['String']['output']>;
  user: User;
  users: Array<User>;
};


export type QueryJobArgs = {
  id: Scalars['Int']['input'];
};


export type QueryJobsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  currentTime: Time;
  jobCreated: Job;
  payload?: Maybe<Scalars['String']['output']>;
};

export type Time = {
  __typename?: 'Time';
  timeStamp: Scalars['String']['output'];
  unixTime: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  Id: Scalars['Int']['output'];
  email: Scalars['String']['output'];
  jobs?: Maybe<Array<Job>>;
  password: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type SignupMutationVariables = Exact<{
  input: NewUser;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', Id: number, username: string, email: string, password: string } };

export type LoginMutationVariables = Exact<{
  input: LoginUser;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoggedUser', token: string, user: { __typename?: 'User', Id: number, username: string, email: string } } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', Id: number, username: string, email: string }> };

export type CreateJobMutationVariables = Exact<{
  input: NewJob;
}>;


export type CreateJobMutation = { __typename?: 'Mutation', createJob: { __typename?: 'Job', Id: number, onGoing: boolean, completed: boolean, description?: string | null, file: string } };

export type ProcessFileMutationVariables = Exact<{
  url: Scalars['String']['input'];
}>;


export type ProcessFileMutation = { __typename?: 'Mutation', processFile: { __typename?: 'File', url: string, price: number } };

export type CurrentTimeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type CurrentTimeSubscription = { __typename?: 'Subscription', currentTime: { __typename?: 'Time', unixTime: number, timeStamp: string } };

export type JobCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type JobCreatedSubscription = { __typename?: 'Subscription', jobCreated: { __typename?: 'Job', Id: number, description?: string | null, onGoing: boolean, completed: boolean, file: string } };

export type MeQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type MeQuery = { __typename?: 'Query', user: { __typename?: 'User', Id: number, username: string, email: string } };


export const SignupDocument = gql`
    mutation signup($input: NewUser!) {
  signup(input: $input) {
    Id
    username
    email
    password
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const LoginDocument = gql`
    mutation login($input: LoginUser!) {
  login(input: $input) {
    user {
      Id
      username
      email
    }
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    Id
    username
    email
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const CreateJobDocument = gql`
    mutation createJob($input: NewJob!) {
  createJob(input: $input) {
    Id
    onGoing
    completed
    description
    file
  }
}
    `;
export type CreateJobMutationFn = Apollo.MutationFunction<CreateJobMutation, CreateJobMutationVariables>;

/**
 * __useCreateJobMutation__
 *
 * To run a mutation, you first call `useCreateJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJobMutation, { data, loading, error }] = useCreateJobMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateJobMutation(baseOptions?: Apollo.MutationHookOptions<CreateJobMutation, CreateJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJobMutation, CreateJobMutationVariables>(CreateJobDocument, options);
      }
export type CreateJobMutationHookResult = ReturnType<typeof useCreateJobMutation>;
export type CreateJobMutationResult = Apollo.MutationResult<CreateJobMutation>;
export type CreateJobMutationOptions = Apollo.BaseMutationOptions<CreateJobMutation, CreateJobMutationVariables>;
export const ProcessFileDocument = gql`
    mutation processFile($url: String!) {
  processFile(url: $url) {
    url
    price
  }
}
    `;
export type ProcessFileMutationFn = Apollo.MutationFunction<ProcessFileMutation, ProcessFileMutationVariables>;

/**
 * __useProcessFileMutation__
 *
 * To run a mutation, you first call `useProcessFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProcessFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [processFileMutation, { data, loading, error }] = useProcessFileMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useProcessFileMutation(baseOptions?: Apollo.MutationHookOptions<ProcessFileMutation, ProcessFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ProcessFileMutation, ProcessFileMutationVariables>(ProcessFileDocument, options);
      }
export type ProcessFileMutationHookResult = ReturnType<typeof useProcessFileMutation>;
export type ProcessFileMutationResult = Apollo.MutationResult<ProcessFileMutation>;
export type ProcessFileMutationOptions = Apollo.BaseMutationOptions<ProcessFileMutation, ProcessFileMutationVariables>;
export const CurrentTimeDocument = gql`
    subscription currentTime {
  currentTime {
    unixTime
    timeStamp
  }
}
    `;

/**
 * __useCurrentTimeSubscription__
 *
 * To run a query within a React component, call `useCurrentTimeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCurrentTimeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentTimeSubscription({
 *   variables: {
 *   },
 * });
 */
export function useCurrentTimeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<CurrentTimeSubscription, CurrentTimeSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CurrentTimeSubscription, CurrentTimeSubscriptionVariables>(CurrentTimeDocument, options);
      }
export type CurrentTimeSubscriptionHookResult = ReturnType<typeof useCurrentTimeSubscription>;
export type CurrentTimeSubscriptionResult = Apollo.SubscriptionResult<CurrentTimeSubscription>;
export const JobCreatedDocument = gql`
    subscription JobCreated {
  jobCreated {
    Id
    description
    onGoing
    completed
    file
  }
}
    `;

/**
 * __useJobCreatedSubscription__
 *
 * To run a query within a React component, call `useJobCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useJobCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobCreatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useJobCreatedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<JobCreatedSubscription, JobCreatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<JobCreatedSubscription, JobCreatedSubscriptionVariables>(JobCreatedDocument, options);
      }
export type JobCreatedSubscriptionHookResult = ReturnType<typeof useJobCreatedSubscription>;
export type JobCreatedSubscriptionResult = Apollo.SubscriptionResult<JobCreatedSubscription>;
export const MeDocument = gql`
    query me($id: Int!) {
  user(id: $id) {
    Id
    username
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMeQuery(baseOptions: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;