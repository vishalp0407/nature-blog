import Container from "@components/Container";

const App = () => {
  return (
    <div className=" text-foreground min-h-screen flex items-center bg-yellow-500">
      <Container className="py-10 bg-card text-card-foreground rounded-lg border border-border shadow">
        <h1 className="font-serif text-3xl mb-2">Container ✅</h1>
        <p className="font-sans text-muted-foreground">
          This content is centered, has a max width, and responsive padding.
        </p>
      </Container>
    </div>
  );
};

export default App;
