export const organizationsData = [
  { id:"org1",
    name:"Organization 1",
    invoicesGenerated:12,
    approvedCampaigns:["camp1", "camp3", "camp5", "camp8"],
  },
  { id:"org2",
    name:"Organization 2",
    invoicesGenerated:8,
    approvedCampaigns:["camp2", "camp3", "camp5", "camp9", "camp19"],
  },
  { id:"org3",
    name:"Organization 3",
    invoicesGenerated:6,
    approvedCampaigns:["camp19"],
  },
]

export const notifications = [
  {
    id: 1,
    title: "New Landing page added",
    type: "CAMPAIGN_LANDING_PAGE",
    created: "2023-03-01T18:25:43.511Z",
    isRead: 0,
    campaignId:"camp3",
    organizationId:null

  },
  {
    id: 2,
    title: "New Landing page added",
    type: "CAMPAIGN_LANDING_PAGE",
    created: "2023-02-27T18:25:43.511Z",
    isRead: 0,
    campaignId:"camp1",
    organizationId:null

  },
  {
    id: 3,
    title: "New invoice generated",
    type: "INVOICE_GENERATED",
    created: "2023-02-28T18:25:43.511Z",
    isRead: 0,
    campaignId:null,
    organizationId:"org2"
  },
  {
    id: 4,
    title: "John signed up using your referral link",
    type: "REFERRAL",
    created: "2023-02-21T18:25:43.511Z",
    isRead: 1,
    organizationId:null,
    campaignId:null
  },
  {
    id: 5,
    title: "Campaign Stopped",
    type: "CAMPAIGN_STATUS",
    created: "2023-02-27T18:25:43.511Z",
    isRead: 0,
    campaignId:"camp19",
    organizationId:null

  },
];

export const userData = {
  name:"Himanshu Sain",
  id:123123,
  role:"consumer",
  notifications
}