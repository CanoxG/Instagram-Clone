import Navbar from "./components/navbar/Navbar";
import Layout from "./components/layout/Layout";
import ContentFlow from "./components/content-flow/ContentFlow";
import { HorizontalAvatar } from "./components/horizontal-avatar-list/HorizontalAvatar";
import SideMenu from "./components/sidemenu/SideMenu";
import { CenterPostList } from "./components/center-post-list/CenterPostList";

function App() {



  return (
    <>
      <Navbar />
      <Layout>
        <ContentFlow>
          <HorizontalAvatar />
          <CenterPostList />
        </ContentFlow>
        <SideMenu />
      </Layout>
    </>
  );
}

export default App;
