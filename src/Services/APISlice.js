import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASEURL = "http://127.0.0.1:8000/";
export const portalApi = createApi({
  reducerPath: "portalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().portalApi.token
     
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set('authorization', `Token ${token}`)
        }
    
        return headers
      },
  }),

  endpoints: (build) => ({
    getExampleApi: build.query({
      query: () => "api/users/",
    }),

    // Staff Authentication
    userAuthSignUp: build.mutation({
      query: (user) => ({
        url: "api/users/sign-up/",
        method: "POST",
        body: user,
      }),
    }),
    userAuthSignIn: build.mutation({
      query: (user) => ({
        url: "api/users/staff/sign-in/",
        method: "POST",
        body: user,
      }),
    }),

    // Student Authentication
    studentSignIn: build.mutation({
      query: (user) => ({
        url: "api/users/student/sign-in/",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const {
  useGetExampleApiQuery,
  useUserAuthSignUpMutation,
  useUserAuthSignInMutation,
  useStudentSignInMutation
} = portalApi;
