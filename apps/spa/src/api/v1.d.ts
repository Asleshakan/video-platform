/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/users/": {
    get: operations["api_users_list"];
    post: operations["api_users_create"];
  };
  "/api/users/{id}/": {
    get: operations["api_users_retrieve"];
    put: operations["api_users_update"];
    delete: operations["api_users_destroy"];
    patch: operations["api_users_partial_update"];
  };
  "/api/videos/": {
    get: operations["api_videos_list"];
    post: operations["api_videos_create"];
  };
  "/api/videos/{id}/": {
    get: operations["api_videos_retrieve"];
    put: operations["api_videos_update"];
    delete: operations["api_videos_destroy"];
    patch: operations["api_videos_partial_update"];
  };
  "/auth/jwt/create/": {
    /**
     * @description Takes a set of user credentials and returns an access and refresh JSON web
     * token pair to prove the authentication of those credentials.
     */
    post: operations["auth_jwt_create_create"];
  };
  "/auth/jwt/refresh/": {
    /**
     * @description Takes a refresh type JSON web token and returns an access type JSON web
     * token if the refresh token is valid.
     */
    post: operations["auth_jwt_refresh_create"];
  };
  "/auth/jwt/verify/": {
    /**
     * @description Takes a token and indicates if it is valid.  This view provides no
     * information about a token's fitness for a particular use.
     */
    post: operations["auth_jwt_verify_create"];
  };
  "/auth/users/": {
    get: operations["auth_users_list"];
    post: operations["auth_users_create"];
  };
  "/auth/users/{id}/": {
    get: operations["auth_users_retrieve"];
    put: operations["auth_users_update"];
    delete: operations["auth_users_destroy"];
    patch: operations["auth_users_partial_update"];
  };
  "/auth/users/activation/": {
    post: operations["auth_users_activation_create"];
  };
  "/auth/users/me/": {
    get: operations["auth_users_me_retrieve"];
    put: operations["auth_users_me_update"];
    delete: operations["auth_users_me_destroy"];
    patch: operations["auth_users_me_partial_update"];
  };
  "/auth/users/resend_activation/": {
    post: operations["auth_users_resend_activation_create"];
  };
  "/auth/users/reset_password/": {
    post: operations["auth_users_reset_password_create"];
  };
  "/auth/users/reset_password_confirm/": {
    post: operations["auth_users_reset_password_confirm_create"];
  };
  "/auth/users/reset_username/": {
    post: operations["auth_users_reset_username_create"];
  };
  "/auth/users/reset_username_confirm/": {
    post: operations["auth_users_reset_username_confirm_create"];
  };
  "/auth/users/set_password/": {
    post: operations["auth_users_set_password_create"];
  };
  "/auth/users/set_username/": {
    post: operations["auth_users_set_username_create"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Activation: {
      uid: string;
      token: string;
    };
    PasswordResetConfirm: {
      uid: string;
      token: string;
      new_password: string;
    };
    PatchedUser: {
      /**
       * Email address
       * Format: email
       */
      email?: string;
      id?: number;
      /** @description Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
      username?: string;
    };
    PatchedUserModel: {
      id?: number;
      /** @description Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
      username?: string;
      /**
       * Email address
       * Format: email
       */
      email?: string;
      first_name?: string;
      last_name?: string;
    };
    PatchedVideo: {
      id?: number;
      title?: string;
      description?: string;
      /** Format: uri */
      video?: string;
      /** Format: date-time */
      created_at?: string;
      /** Format: date-time */
      updated_at?: string;
    };
    SendEmailReset: {
      /** Format: email */
      email: string;
    };
    SetPassword: {
      new_password: string;
      current_password: string;
    };
    SetUsername: {
      current_password: string;
      /**
       * Username
       * @description Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
       */
      new_username: string;
    };
    TokenObtainPair: {
      username: string;
      password: string;
      access: string;
      refresh: string;
    };
    TokenRefresh: {
      access: string;
      refresh: string;
    };
    TokenVerify: {
      token: string;
    };
    User: {
      /**
       * Email address
       * Format: email
       */
      email?: string;
      id: number;
      /** @description Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
      username: string;
    };
    UserCreate: {
      /**
       * Email address
       * Format: email
       */
      email?: string;
      /** @description Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
      username: string;
      id: number;
      password: string;
    };
    UserModel: {
      id: number;
      /** @description Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
      username: string;
      /**
       * Email address
       * Format: email
       */
      email?: string;
      first_name?: string;
      last_name?: string;
    };
    UsernameResetConfirm: {
      /**
       * Username
       * @description Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
       */
      new_username: string;
    };
    Video: {
      id: number;
      title: string;
      description: string;
      /** Format: uri */
      video: string;
      /** Format: date-time */
      created_at: string;
      /** Format: date-time */
      updated_at: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  api_users_list: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["UserModel"][];
        };
      };
    };
  };
  api_users_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserModel"];
        "application/x-www-form-urlencoded": components["schemas"]["UserModel"];
        "multipart/form-data": components["schemas"]["UserModel"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["UserModel"];
        };
      };
    };
  };
  api_users_retrieve: {
    parameters: {
      path: {
        /** @description A unique integer value identifying this user. */
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["UserModel"];
        };
      };
    };
  };
  api_users_update: {
    parameters: {
      path: {
        /** @description A unique integer value identifying this user. */
        id: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserModel"];
        "application/x-www-form-urlencoded": components["schemas"]["UserModel"];
        "multipart/form-data": components["schemas"]["UserModel"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["UserModel"];
        };
      };
    };
  };
  api_users_destroy: {
    parameters: {
      path: {
        /** @description A unique integer value identifying this user. */
        id: number;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
    };
  };
  api_users_partial_update: {
    parameters: {
      path: {
        /** @description A unique integer value identifying this user. */
        id: number;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["PatchedUserModel"];
        "application/x-www-form-urlencoded": components["schemas"]["PatchedUserModel"];
        "multipart/form-data": components["schemas"]["PatchedUserModel"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["UserModel"];
        };
      };
    };
  };
  api_videos_list: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Video"][];
        };
      };
    };
  };
  api_videos_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["Video"];
        "application/x-www-form-urlencoded": components["schemas"]["Video"];
        "multipart/form-data": components["schemas"]["Video"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["Video"];
        };
      };
    };
  };
  api_videos_retrieve: {
    parameters: {
      path: {
        /** @description A unique integer value identifying this video. */
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Video"];
        };
      };
    };
  };
  api_videos_update: {
    parameters: {
      path: {
        /** @description A unique integer value identifying this video. */
        id: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Video"];
        "application/x-www-form-urlencoded": components["schemas"]["Video"];
        "multipart/form-data": components["schemas"]["Video"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Video"];
        };
      };
    };
  };
  api_videos_destroy: {
    parameters: {
      path: {
        /** @description A unique integer value identifying this video. */
        id: number;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
    };
  };
  api_videos_partial_update: {
    parameters: {
      path: {
        /** @description A unique integer value identifying this video. */
        id: number;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["PatchedVideo"];
        "application/x-www-form-urlencoded": components["schemas"]["PatchedVideo"];
        "multipart/form-data": components["schemas"]["PatchedVideo"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Video"];
        };
      };
    };
  };
  /**
   * @description Takes a set of user credentials and returns an access and refresh JSON web
   * token pair to prove the authentication of those credentials.
   */
  auth_jwt_create_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["TokenObtainPair"];
        "application/x-www-form-urlencoded": components["schemas"]["TokenObtainPair"];
        "multipart/form-data": components["schemas"]["TokenObtainPair"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["TokenObtainPair"];
        };
      };
    };
  };
  /**
   * @description Takes a refresh type JSON web token and returns an access type JSON web
   * token if the refresh token is valid.
   */
  auth_jwt_refresh_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["TokenRefresh"];
        "application/x-www-form-urlencoded": components["schemas"]["TokenRefresh"];
        "multipart/form-data": components["schemas"]["TokenRefresh"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["TokenRefresh"];
        };
      };
    };
  };
  /**
   * @description Takes a token and indicates if it is valid.  This view provides no
   * information about a token's fitness for a particular use.
   */
  auth_jwt_verify_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["TokenVerify"];
        "application/x-www-form-urlencoded": components["schemas"]["TokenVerify"];
        "multipart/form-data": components["schemas"]["TokenVerify"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["TokenVerify"];
        };
      };
    };
  };
  auth_users_list: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["User"][];
        };
      };
    };
  };
  auth_users_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserCreate"];
        "application/x-www-form-urlencoded": components["schemas"]["UserCreate"];
        "multipart/form-data": components["schemas"]["UserCreate"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["UserCreate"];
        };
      };
    };
  };
  auth_users_retrieve: {
    parameters: {
      path: {
        /** @description A unique integer value identifying this user. */
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
    };
  };
  auth_users_update: {
    parameters: {
      path: {
        /** @description A unique integer value identifying this user. */
        id: number;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["User"];
        "application/x-www-form-urlencoded": components["schemas"]["User"];
        "multipart/form-data": components["schemas"]["User"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
    };
  };
  auth_users_destroy: {
    parameters: {
      path: {
        /** @description A unique integer value identifying this user. */
        id: number;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
    };
  };
  auth_users_partial_update: {
    parameters: {
      path: {
        /** @description A unique integer value identifying this user. */
        id: number;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["PatchedUser"];
        "application/x-www-form-urlencoded": components["schemas"]["PatchedUser"];
        "multipart/form-data": components["schemas"]["PatchedUser"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
    };
  };
  auth_users_activation_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["Activation"];
        "application/x-www-form-urlencoded": components["schemas"]["Activation"];
        "multipart/form-data": components["schemas"]["Activation"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Activation"];
        };
      };
    };
  };
  auth_users_me_retrieve: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
    };
  };
  auth_users_me_update: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["User"];
        "application/x-www-form-urlencoded": components["schemas"]["User"];
        "multipart/form-data": components["schemas"]["User"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
    };
  };
  auth_users_me_destroy: {
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
    };
  };
  auth_users_me_partial_update: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["PatchedUser"];
        "application/x-www-form-urlencoded": components["schemas"]["PatchedUser"];
        "multipart/form-data": components["schemas"]["PatchedUser"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
    };
  };
  auth_users_resend_activation_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["SendEmailReset"];
        "application/x-www-form-urlencoded": components["schemas"]["SendEmailReset"];
        "multipart/form-data": components["schemas"]["SendEmailReset"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SendEmailReset"];
        };
      };
    };
  };
  auth_users_reset_password_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["SendEmailReset"];
        "application/x-www-form-urlencoded": components["schemas"]["SendEmailReset"];
        "multipart/form-data": components["schemas"]["SendEmailReset"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SendEmailReset"];
        };
      };
    };
  };
  auth_users_reset_password_confirm_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["PasswordResetConfirm"];
        "application/x-www-form-urlencoded": components["schemas"]["PasswordResetConfirm"];
        "multipart/form-data": components["schemas"]["PasswordResetConfirm"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PasswordResetConfirm"];
        };
      };
    };
  };
  auth_users_reset_username_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["SendEmailReset"];
        "application/x-www-form-urlencoded": components["schemas"]["SendEmailReset"];
        "multipart/form-data": components["schemas"]["SendEmailReset"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SendEmailReset"];
        };
      };
    };
  };
  auth_users_reset_username_confirm_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["UsernameResetConfirm"];
        "application/x-www-form-urlencoded": components["schemas"]["UsernameResetConfirm"];
        "multipart/form-data": components["schemas"]["UsernameResetConfirm"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["UsernameResetConfirm"];
        };
      };
    };
  };
  auth_users_set_password_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["SetPassword"];
        "application/x-www-form-urlencoded": components["schemas"]["SetPassword"];
        "multipart/form-data": components["schemas"]["SetPassword"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SetPassword"];
        };
      };
    };
  };
  auth_users_set_username_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["SetUsername"];
        "application/x-www-form-urlencoded": components["schemas"]["SetUsername"];
        "multipart/form-data": components["schemas"]["SetUsername"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SetUsername"];
        };
      };
    };
  };
}
