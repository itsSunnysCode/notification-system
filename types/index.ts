export interface NotificationType {
  title: string;
  isRead: boolean;
  created: string;
  id: number;
  type: string;
  campaignId: string | null | undefined;
  organizationId: string | null | undefined;
  landingPageId:string;
}

export interface UserState {
  userData:
    | {
        name: string;
        id: number;
        role: string;
        notifications: NotificationType[];
        markZero:boolean;
      }
    | undefined;
}

export interface Action {
  type: string;
  payload: any;
}

export interface OrganizationType {
  id: string;
  name: string;
  invoicesGenerated: number;
  approvedCampaigns: string[];
}
