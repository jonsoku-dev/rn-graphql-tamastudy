import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type PostComment = {
  __typename?: 'PostComment';
  id: Scalars['ID'];
  body: Scalars['String'];
  user: Auth;
  post: Post;
};

export type Post = PostInterface & {
  __typename?: 'Post';
  id: Scalars['ID'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: Auth;
  comments: Array<PostComment>;
};

export type PostInterface = {
  id: Scalars['ID'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: Auth;
  comments: Array<PostComment>;
};


export type BoardCommentReply = BoardCommentReplyInterface & {
  __typename?: 'BoardCommentReply';
  id: Scalars['ID'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  user: Auth;
  boardCommentId: Scalars['String'];
  boardComment: BoardComment;
};

export type BoardCommentReplyInterface = {
  id: Scalars['ID'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  user: Auth;
  boardCommentId: Scalars['String'];
  boardComment: BoardComment;
};

export type BoardComment = BoardCommentInterface & {
  __typename?: 'BoardComment';
  id: Scalars['ID'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: Auth;
  board: Board;
  boardCommentReplies: Array<BoardCommentReply>;
};

export type BoardCommentInterface = {
  id: Scalars['ID'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: Auth;
  board: Board;
  boardCommentReplies: Array<BoardCommentReply>;
};

export type BoardLike = {
  __typename?: 'BoardLike';
  id: Scalars['ID'];
  userId: Scalars['String'];
};

export type Board = BoardInterface & {
  __typename?: 'Board';
  id: Scalars['ID'];
  title: Scalars['String'];
  desc: Scalars['String'];
  view: Scalars['Float'];
  category: BoardCategory;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: Auth;
  comments: Array<BoardComment>;
  likes: Array<BoardLike>;
  filepath: Scalars['String'];
};

export type BoardInterface = {
  id: Scalars['ID'];
  title: Scalars['String'];
  desc: Scalars['String'];
  view: Scalars['Float'];
  category: BoardCategory;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: Auth;
  comments: Array<BoardComment>;
  likes: Array<BoardLike>;
  filepath: Scalars['String'];
};

export enum BoardCategory {
  All = 'ALL',
  Trade = 'TRADE',
  Job = 'JOB',
  Free = 'FREE',
  Fq = 'FQ'
}

export type GourmetComment = GourmetCommentInterface & {
  __typename?: 'GourmetComment';
  id: Scalars['ID'];
  body: Scalars['String'];
  images?: Maybe<Scalars['String']>;
  score: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: Auth;
  gourmet: Gourmet;
};

export type GourmetCommentInterface = {
  id: Scalars['ID'];
  body: Scalars['String'];
  images?: Maybe<Scalars['String']>;
  score: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: Auth;
  gourmet: Gourmet;
};

export type Gourmet = GourmetInterface & {
  __typename?: 'Gourmet';
  id: Scalars['ID'];
  name: Scalars['String'];
  desc: Scalars['String'];
  category: GourmetCategory;
  score: Scalars['Float'];
  lat: Scalars['String'];
  lng: Scalars['String'];
  address: Scalars['String'];
  images?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: Auth;
  comments: Array<GourmetComment>;
};

export type GourmetInterface = {
  id: Scalars['ID'];
  name: Scalars['String'];
  desc: Scalars['String'];
  category: GourmetCategory;
  score: Scalars['Float'];
  lat: Scalars['String'];
  lng: Scalars['String'];
  address: Scalars['String'];
  images?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: Auth;
  comments: Array<GourmetComment>;
};

export enum GourmetCategory {
  Noodle = 'NOODLE',
  Rice = 'RICE',
  Bread = 'BREAD',
  Meat = 'MEAT'
}

export type Auth = AuthInterface & {
  __typename?: 'Auth';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  followers: Array<Auth>;
  following: Array<Auth>;
};

export type AuthInterface = {
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  followers: Array<Auth>;
  following: Array<Auth>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String'];
};

export type GetNoticeListResponseDto = {
  __typename?: 'GetNoticeListResponseDto';
  id: Scalars['String'];
  title: Scalars['String'];
  desc: Scalars['String'];
  view: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: Auth;
};

export type GetNoticeResponseDto = {
  __typename?: 'GetNoticeResponseDto';
  id: Scalars['String'];
  title: Scalars['String'];
  desc: Scalars['String'];
  view: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: Auth;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type Edges = {
  __typename?: 'Edges';
  cursor: Scalars['String'];
  node: Board;
};

export type BoardListResponseDto = {
  __typename?: 'BoardListResponseDto';
  edges: Array<Edges>;
  pageInfo: PageInfo;
};

export type PlaceholderResponse = {
  __typename?: 'PlaceholderResponse';
  userId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
};

export type GetNewsListResponse = {
  __typename?: 'GetNewsListResponse';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  press?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  portal?: Maybe<Scalars['String']>;
  flag: NewsFlagEnum;
};

export enum NewsFlagEnum {
  Kr = 'KR',
  Jp = 'JP',
  Us = 'US'
}

export type Openchat = OpenchatInterface & {
  __typename?: 'Openchat';
  id: Scalars['ID'];
  name: Scalars['String'];
  desc: Scalars['String'];
  category: OpenchatCategory;
  participationNumber: Scalars['String'];
  link: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type OpenchatInterface = {
  id: Scalars['ID'];
  name: Scalars['String'];
  desc: Scalars['String'];
  category: OpenchatCategory;
  participationNumber: Scalars['String'];
  link: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export enum OpenchatCategory {
  It = 'IT',
  Study = 'STUDY',
  Info = 'INFO'
}

export type GetOpenchatListResponseDto = {
  __typename?: 'GetOpenchatListResponseDto';
  id: Scalars['ID'];
  name: Scalars['String'];
  category: OpenchatCategory;
  participationNumber: Scalars['String'];
  link: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type GetGourmetListResponseDto = {
  __typename?: 'GetGourmetListResponseDto';
  id: Scalars['ID'];
  name: Scalars['String'];
  desc: Scalars['String'];
  category: GourmetCategory;
  score: Scalars['Float'];
  lat: Scalars['String'];
  lng: Scalars['String'];
  address: Scalars['String'];
  images?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: Auth;
  comments: Array<GourmetComment>;
};

export type GetGourmetResponseDto = {
  __typename?: 'GetGourmetResponseDto';
  id: Scalars['ID'];
  name: Scalars['String'];
  desc: Scalars['String'];
  category: GourmetCategory;
  score: Scalars['Float'];
  lat: Scalars['String'];
  lng: Scalars['String'];
  address: Scalars['String'];
  images?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: Auth;
  comments: Array<GourmetComment>;
};

export type Query = {
  __typename?: 'Query';
  currentUser: Auth;
  getPostList: Array<Post>;
  getPost: Post;
  getNoticeList: Array<GetNoticeListResponseDto>;
  getNotice: GetNoticeResponseDto;
  getBoardListByCategory: Array<Board>;
  getBoardList: BoardListResponseDto;
  getBoard: Board;
  getPlaceholder: Array<PlaceholderResponse>;
  getNewsList: Array<GetNewsListResponse>;
  getOpenchatList: Array<GetOpenchatListResponseDto>;
  getGourmetList: Array<GetGourmetListResponseDto>;
  getGourmet: GetGourmetResponseDto;
};


export type QueryGetPostListArgs = {
  filter?: Maybe<GetPostListFilter>;
};


export type QueryGetPostArgs = {
  postId: Scalars['String'];
};


export type QueryGetNoticeListArgs = {
  search?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Float']>;
  offset?: Maybe<Scalars['Float']>;
};


export type QueryGetNoticeArgs = {
  noticeId: Scalars['String'];
};


export type QueryGetBoardListByCategoryArgs = {
  category: BoardCategory;
};


export type QueryGetBoardListArgs = {
  after?: Maybe<Scalars['Float']>;
  first?: Maybe<Scalars['Float']>;
  search?: Maybe<Scalars['String']>;
  category?: Maybe<BoardCategory>;
};


export type QueryGetBoardArgs = {
  boardId: Scalars['String'];
  isRefetch?: Maybe<Scalars['Boolean']>;
};


export type QueryGetNewsListArgs = {
  flag: NewsFlagEnum;
};


export type QueryGetOpenchatListArgs = {
  category?: Maybe<OpenchatCategory>;
  take?: Maybe<Scalars['Float']>;
  offset?: Maybe<Scalars['Float']>;
  search?: Maybe<Scalars['String']>;
};


export type QueryGetGourmetListArgs = {
  search?: Maybe<Scalars['String']>;
  category?: Maybe<GourmetCategory>;
  limit?: Maybe<Scalars['Float']>;
  offset?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  lat: Scalars['String'];
  lng: Scalars['String'];
};


export type QueryGetGourmetArgs = {
  gourmetId: Scalars['String'];
};

export type GetPostListFilter = {
  search?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: Auth;
  login: LoginResponse;
  follow: Auth;
  unFollow: Scalars['String'];
  createPost: Scalars['String'];
  editPost: Scalars['String'];
  deletePost: Scalars['String'];
  createPostComment: Scalars['String'];
  editPostComment: Scalars['String'];
  deletePostComment: Scalars['String'];
  createNotice: Scalars['String'];
  editNotice: Scalars['String'];
  deleteNotice: Scalars['String'];
  uploadFile: Scalars['Boolean'];
  createBoard: Scalars['String'];
  editBoard: Scalars['String'];
  deleteBoard: Scalars['String'];
  createBoardComment: Scalars['String'];
  editBoardComment: Scalars['String'];
  deleteBoardComment: Scalars['String'];
  like: Scalars['String'];
  unLike: Scalars['String'];
  createBoardCommentReply: Scalars['String'];
  deleteBoardCommentReply: Scalars['String'];
  editBoardCommentReply: Scalars['String'];
  createOpenchat: Openchat;
  editOpenchat: Scalars['String'];
  deleteOpenchat: Scalars['String'];
  createGourmet: Gourmet;
  editGourmet: Scalars['String'];
  deleteGourmet: Scalars['String'];
  createGourmetComment: GourmetComment;
  editGourmetComment: Scalars['String'];
  deleteGourmetComment: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: RegisterRequest;
};


export type MutationLoginArgs = {
  input: LoginRequest;
};


export type MutationFollowArgs = {
  targetUserId: Scalars['String'];
};


export type MutationUnFollowArgs = {
  targetUserId: Scalars['String'];
};


export type MutationCreatePostArgs = {
  input: CreatePostRequest;
};


export type MutationEditPostArgs = {
  input: EditPostRequest;
  postId: Scalars['String'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['String'];
};


export type MutationCreatePostCommentArgs = {
  input: CreatePostCommentRequest;
  postId: Scalars['String'];
};


export type MutationEditPostCommentArgs = {
  input: EditPostCommentRequest;
  postCommentId: Scalars['String'];
};


export type MutationDeletePostCommentArgs = {
  postCommentId: Scalars['String'];
};


export type MutationCreateNoticeArgs = {
  input: CreateNoticeRequestDto;
};


export type MutationEditNoticeArgs = {
  input: EditNoticeRequestDto;
  noticeId: Scalars['String'];
};


export type MutationDeleteNoticeArgs = {
  noticeId: Scalars['String'];
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};


export type MutationCreateBoardArgs = {
  file?: Maybe<Scalars['Upload']>;
  input: CreateBoardRequestDto;
};


export type MutationEditBoardArgs = {
  input: EditBoardRequestDto;
  boardId: Scalars['String'];
};


export type MutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type MutationCreateBoardCommentArgs = {
  input: CreateBoardCommentRequestDto;
  boardId: Scalars['String'];
};


export type MutationEditBoardCommentArgs = {
  input: EditBoardCommentRequestDto;
  boardCommentId: Scalars['String'];
};


export type MutationDeleteBoardCommentArgs = {
  boardCommentId: Scalars['String'];
};


export type MutationLikeArgs = {
  boardId: Scalars['String'];
};


export type MutationUnLikeArgs = {
  boardId: Scalars['String'];
};


export type MutationCreateBoardCommentReplyArgs = {
  body: Scalars['String'];
  boardCommentId: Scalars['String'];
};


export type MutationDeleteBoardCommentReplyArgs = {
  boardCommentReplyId: Scalars['String'];
};


export type MutationEditBoardCommentReplyArgs = {
  input: EditBoardCommentReplyRequestDto;
  boardCommentReplyId: Scalars['String'];
};


export type MutationCreateOpenchatArgs = {
  input: CreateOpenchatRequestDto;
};


export type MutationEditOpenchatArgs = {
  input: EditOpenchatRequestDto;
  openchatId: Scalars['String'];
};


export type MutationDeleteOpenchatArgs = {
  openchatId: Scalars['String'];
};


export type MutationCreateGourmetArgs = {
  input: CreateGourmetRequestDto;
};


export type MutationEditGourmetArgs = {
  input: EditGourmetRequestDto;
  gourmetId: Scalars['String'];
};


export type MutationDeleteGourmetArgs = {
  gourmetId: Scalars['String'];
};


export type MutationCreateGourmetCommentArgs = {
  input: CreateGourmetCommentRequestDto;
  gourmetId: Scalars['String'];
};


export type MutationEditGourmetCommentArgs = {
  input: EditGourmetCommentRequestDto;
  gourmetCommentId: Scalars['String'];
};


export type MutationDeleteGourmetCommentArgs = {
  gourmetCommentId: Scalars['String'];
};

export type RegisterRequest = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginRequest = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreatePostRequest = {
  content: Scalars['String'];
};

export type EditPostRequest = {
  content?: Maybe<Scalars['String']>;
};

export type CreatePostCommentRequest = {
  body: Scalars['String'];
};

export type EditPostCommentRequest = {
  body?: Maybe<Scalars['String']>;
};

export type CreateNoticeRequestDto = {
  title: Scalars['String'];
  desc: Scalars['String'];
};

export type EditNoticeRequestDto = {
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
};


export type CreateBoardRequestDto = {
  title: Scalars['String'];
  desc: Scalars['String'];
  category: BoardCategory;
};

export type EditBoardRequestDto = {
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  category?: Maybe<BoardCategory>;
};

export type CreateBoardCommentRequestDto = {
  body: Scalars['String'];
};

export type EditBoardCommentRequestDto = {
  body?: Maybe<Scalars['String']>;
};

export type EditBoardCommentReplyRequestDto = {
  body?: Maybe<Scalars['String']>;
};

export type CreateOpenchatRequestDto = {
  name: Scalars['String'];
  desc: Scalars['String'];
  category: OpenchatCategory;
  participationNumber: Scalars['String'];
  link: Scalars['String'];
};

export type EditOpenchatRequestDto = {
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  category?: Maybe<OpenchatCategory>;
  participationNumber?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type CreateGourmetRequestDto = {
  name: Scalars['String'];
  desc: Scalars['String'];
  category: GourmetCategory;
  score: Scalars['Int'];
  lat: Scalars['String'];
  lng: Scalars['String'];
  address: Scalars['String'];
  images?: Maybe<Scalars['String']>;
};

export type EditGourmetRequestDto = {
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  category?: Maybe<GourmetCategory>;
  score?: Maybe<Scalars['Int']>;
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['String']>;
};

export type CreateGourmetCommentRequestDto = {
  body: Scalars['String'];
  score: Scalars['Int'];
  images?: Maybe<Scalars['String']>;
};

export type EditGourmetCommentRequestDto = {
  body?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  images?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  followAlert: Auth;
};


export type SubscriptionFollowAlertArgs = {
  userId: Scalars['Float'];
};

export type GetNoticeListQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Float']>;
  offset?: Maybe<Scalars['Float']>;
}>;


export type GetNoticeListQuery = (
  { __typename?: 'Query' }
  & { getNoticeList: Array<(
    { __typename?: 'GetNoticeListResponseDto' }
    & Pick<GetNoticeListResponseDto, 'id' | 'title' | 'desc' | 'view' | 'createdAt' | 'updatedAt'>
    & { user: (
      { __typename?: 'Auth' }
      & Pick<Auth, 'id' | 'username' | 'email' | 'avatar'>
    ) }
  )> }
);


export const GetNoticeListDocument = gql`
    query getNoticeList($search: String, $limit: Float, $offset: Float) {
  getNoticeList(search: $search, limit: $limit, offset: $offset) {
    id
    title
    desc
    view
    createdAt
    updatedAt
    user {
      id
      username
      email
      avatar
    }
  }
}
    `;

/**
 * __useGetNoticeListQuery__
 *
 * To run a query within a React component, call `useGetNoticeListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNoticeListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNoticeListQuery({
 *   variables: {
 *      search: // value for 'search'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetNoticeListQuery(baseOptions?: Apollo.QueryHookOptions<GetNoticeListQuery, GetNoticeListQueryVariables>) {
        return Apollo.useQuery<GetNoticeListQuery, GetNoticeListQueryVariables>(GetNoticeListDocument, baseOptions);
      }
export function useGetNoticeListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNoticeListQuery, GetNoticeListQueryVariables>) {
          return Apollo.useLazyQuery<GetNoticeListQuery, GetNoticeListQueryVariables>(GetNoticeListDocument, baseOptions);
        }
export type GetNoticeListQueryHookResult = ReturnType<typeof useGetNoticeListQuery>;
export type GetNoticeListLazyQueryHookResult = ReturnType<typeof useGetNoticeListLazyQuery>;
export type GetNoticeListQueryResult = Apollo.QueryResult<GetNoticeListQuery, GetNoticeListQueryVariables>;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "INTERFACE",
        "name": "PostInterface",
        "possibleTypes": [
          {
            "name": "Post"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "BoardCommentReplyInterface",
        "possibleTypes": [
          {
            "name": "BoardCommentReply"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "BoardCommentInterface",
        "possibleTypes": [
          {
            "name": "BoardComment"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "BoardInterface",
        "possibleTypes": [
          {
            "name": "Board"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "GourmetCommentInterface",
        "possibleTypes": [
          {
            "name": "GourmetComment"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "GourmetInterface",
        "possibleTypes": [
          {
            "name": "Gourmet"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "AuthInterface",
        "possibleTypes": [
          {
            "name": "Auth"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "OpenchatInterface",
        "possibleTypes": [
          {
            "name": "Openchat"
          }
        ]
      }
    ]
  }
};
      export default result;
    