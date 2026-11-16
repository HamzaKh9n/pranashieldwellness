import Container from "@/components/ui/Container";

export default function AnnouncementBar() {
  return (
    <aside
      aria-label="Announcement"
      className="w-full bg-[#183D32] text-white flex items-center justify-center min-h-[34px] sm:min-h-[36px] py-1 px-4"
    >
      <Container>
        <p className="text-[12px] sm:text-[13px] leading-tight font-normal text-[#FFFFFF] !text-white tracking-wide text-center m-0 p-0 font-[var(--font-inter)]">
          Welcome to Pranashieldwellness — Premium wellness supplements for your journey.
        </p>
      </Container>
    </aside>
  );
}
