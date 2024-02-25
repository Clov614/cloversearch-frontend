// 帖子定义
export interface Post {
  content: string;
  tagList: string[];
  title: string;
}
// 用户定义
export interface UserData {
  id: string;
  userName: string | null;
  userAvatar: string | null;
  userProfile: string | null;
  userRole: string;
  createTime: string;
}
// data
export interface Data {
  records: UserData[];
}
// resData
export interface ResponseData {
  data: Data;
}
