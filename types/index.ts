export interface NotificationType {
  title: string;
  isRead: boolean;
  created: string;
  id: number;
  type: string;
}

export interface UserState {
  userData:
     {
        name: string;
        id: number;
        role: string;
        notifications: NotificationType[];
      }
    | undefined;
}

export interface Action {
  type: string;
  payload: any;
}