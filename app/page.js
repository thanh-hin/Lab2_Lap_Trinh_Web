import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import TrackList from "./components/TrackList";
import Player from "./components/Player";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <Section title="🔥 Top Hits">
        <TrackList />
      </Section>

      <Section title="🎶 Recommended">
        <TrackList />
      </Section>

      <Player />
    </main>
  );
}
