// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  FOODS_URL: "/api/foods",
  FOODS_TAGS_URL: "/api/foods/tags",
  FOODS_BY_SEARCH_URL: "/api/foods/search/",
  FOODS_BY_TAG_URL: "/api/foods/tag/",
  FOOD_BY_ID_URL: "/api/foods/",

  USER_LOGIN_URL: "/api/users/login",
  USER_REGISTER_URL: "/api/users/register",
  USER_GET_PROFILE_URL: "/api/user/",
  USER_UPDATE_URL: "/api/user/",

  ORDERS_URL: "/api/orders",
  ORDER_CREATE_URL: "/api/orders/create",
  ORDER_NEW_FOR_CURRENT_USER_URL: "/api/orders/newOrderForCurrentUser",
  ORDER_PAY_URL: "/api/orders/pay",
  ORDER_TRACK_URL: "/api/orders/track/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
