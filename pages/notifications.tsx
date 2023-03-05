import dynamic from "next/dynamic";

const NotificationComponent = dynamic(() => import("~/components/Notifications/NotificationsList"), {
  ssr: false,
});
export default function Notifications() {
  return (
    <NotificationComponent/>
  )
}