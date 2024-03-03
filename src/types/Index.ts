// data
export interface Data<T> {
  records: T[];
}
// resData
export interface ResponseData<T> {
  data: Data<T>;
}

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

// 图片定义
export interface PicData {
  title: string;
  url: string;
}

// 统一搜索Data
export interface SearchData {
  userPage: SearchPage;
  postPage: SearchPage;
  picturePage: SearchPage;
  dataPage: SearchPage;
}

// 统一搜索 Page
export interface SearchPage {
  records: SearchRecord[];
  total: string;
  size: string;
  current: string;
  orders: any[];
  optimizeCountSql: boolean;
  searchCount: boolean;
  countId: any;
  maxLimit: any;
  pages: string;
}

// 统一搜索 Record
export interface SearchRecord {
  id: string;
  userName?: string;
  userAvatar?: string | null;
  userProfile?: string;
  userRole?: string;
  createTime?: string;
  title?: string;
  content?: string;
  thumbNum?: number;
  favourNum?: number;
  userId?: string;
  updateTime?: string;
  tagList?: string[];
  user?: any;
  hasThumb?: boolean;
  hasFavour?: boolean;
  url?: string;
}
