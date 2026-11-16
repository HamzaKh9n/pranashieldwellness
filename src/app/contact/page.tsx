import type { Metadata } from "next";
import ContactPageClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Pranashieldwellness team. We're here to answer your questions.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
