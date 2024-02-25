export type MyRecord = {
  id: string;
  title: string;
  content: string;
  thumbNum: number;
  favourNum: number;
  userId: string;
  createTime: string;
  updateTime: string;
  tagList: string[];
  user: {
    id: string;
    userName: string | null;
    userAvatar: string | null;
    userProfile: string | null;
    userRole: string;
    createTime: string;
  };
  hasThumb: boolean;
  hasFavour: boolean;
};

export type Data = {
  records: MyRecord[];
  total: string;
  size: string;
  current: string;
  orders: any[];
  optimizeCountSql: boolean;
  searchCount: boolean;
  countId: any;
  maxLimit: any;
  pages: string;
};
