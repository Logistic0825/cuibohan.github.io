import ChatRobot from "@/pages/ChatRobot";
import LayoutPage from "@/pages/Layout";
import '@ant-design/v5-patch-for-react-19';


export default function Home() {
  return (
    <div>
      <LayoutPage>
        <ChatRobot/>
      </LayoutPage>
    </div>
  );
}
