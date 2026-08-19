import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { BottomNav, DesktopRail, TopBar } from "@/components/seyram/Chrome";
import { ImportSheet } from "@/components/seyram/ImportSheet";
import { Reader } from "@/components/seyram/Reader";
import { AiScreen, HomeScreen, LibraryScreen, ProgressScreen, SettingsScreen } from "@/components/seyram/Screens";
import { libraryFiles, type LibraryFile, type ScreenId } from "@/components/seyram/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SeyramReads — Offline Accounting Study Reader" },
      {
        name: "description",
        content:
          "SeyramReads is a mobile accounting study app: read IFRS notes offline, extract formulas, make flashcards and track revision progress.",
      },
      { property: "og:title", content: "SeyramReads — Offline Accounting Study Reader" },
      {
        property: "og:description",
        content: "Read IFRS notes, extract formulas, listen to documents and revise with flashcards — online or offline.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SeyramReads,
});

function SeyramReads() {
  const [screen, setScreen] = useState<ScreenId>("home");
  const [dark, setDark] = useState(false);
  const [offline, setOffline] = useState(true);
  const [sync, setSync] = useState(true);
  const [importOpen, setImportOpen] = useState(false);
  const [readerFile, setReaderFile] = useState<LibraryFile | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const notify = (msg: string) => toast(msg);
  const go = (id: ScreenId) => {
    setScreen(id);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen pb-28 lg:pb-8 lg:pl-[250px]">
      <DesktopRail active={screen} onSelect={go} />
      <TopBar dark={dark} onToggleDark={() => setDark((d) => !d)} />

      <main className="mx-auto w-[min(100%,1180px)] px-4 pb-10 pt-2 lg:px-8">
        {screen === "home" && (
          <HomeScreen
            onImport={() => setImportOpen(true)}
            onOpenReader={() => setReaderFile(libraryFiles[0])}
            onGo={go}
            onToast={notify}
          />
        )}
        {screen === "library" && <LibraryScreen onOpen={setReaderFile} />}
        {screen === "ai" && <AiScreen onToast={notify} />}
        {screen === "progress" && <ProgressScreen />}
        {screen === "settings" && (
          <SettingsScreen
            dark={dark}
            onDark={setDark}
            offline={offline}
            onOffline={(v) => {
              setOffline(v);
              notify(v ? "Downloads kept on this device" : "Offline downloads disabled");
            }}
            sync={sync}
            onSync={(v) => {
              setSync(v);
              notify(v ? "Notes will sync when online" : "Sync paused");
            }}
          />
        )}
      </main>

      <BottomNav active={screen} onSelect={go} />

      {importOpen && (
        <ImportSheet
          onClose={() => setImportOpen(false)}
          onImport={() => {
            setImportOpen(false);
            notify("Document added to your library");
          }}
        />
      )}
      {readerFile && <Reader file={readerFile} onClose={() => setReaderFile(null)} onToast={notify} />}
    </div>
  );
}
