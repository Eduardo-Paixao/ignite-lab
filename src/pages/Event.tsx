import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export const Event = () => {
  const { slugUrl } = useParams<{ slugUrl: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slugUrl ? <Video lessonSlug={slugUrl} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
};
