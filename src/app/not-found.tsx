import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="max-w-md mx-auto text-center">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3 text-[#126336]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            404 — Not Found
          </p>
          <h1
            className="text-3xl sm:text-4xl font-semibold mb-4 text-[#183D32]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Page not found
          </h1>
          <p
            className="text-sm sm:text-base mb-8 leading-relaxed text-[#526157]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            The page you are looking for does not exist or has been moved.
          </p>
          <Button as="a" href="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
