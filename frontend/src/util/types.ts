export interface CreateUsernameData {
  createUsername: {
    success: boolean;
    error: string;
  };
}

export interface CreateUsernameVariables {
  username: string;
}

export interface SearchUsersInput {
  username: String;
}

export interface SearchUsersData {
  searchUsers: Array<SearchedUsers>;
}

export interface SearchedUsers {
  id: string;
  username: string;
}
