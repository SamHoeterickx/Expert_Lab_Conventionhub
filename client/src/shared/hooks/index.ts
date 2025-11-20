//AUTH HOOKS
export { useAuth } from './auth/useAuth.hook';
export { useLogin } from './auth/useLogin.hook';
export { useRegister } from './auth/useRegister.hook';
export { useGetUserData } from './auth/useGetUserData.hook';

//CONVENTION HOOKS
export { useGetConventions } from './conventions/useGetConventions.hook';
export { useGetSingleConvention } from './conventions/useGetSingleConvention.hook';
export { getConventionsPreview } from './conventions/useGetConventionsPreview.hook';
export { useCreateConvention } from './conventions/useCreateConvention.hook'
export { useGetUsersConventions } from './conventions/useGetUsersConventions.hook';

//LIKE HOOKS
export { useLikeConvention } from './likes/useLikeConvention.hook';
export { useGetLikeStatus } from './likes/useGetLikeStatus.hook';
export { useGetUserLikedConventions } from './likes/useGetUserLikedConventions.hook';

//Title
export { useDocumentTitle } from './title/useDocumentTitle.hook';