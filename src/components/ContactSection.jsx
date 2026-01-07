import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const formRef = useRef();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thanks for reaching out. I’ll get back to you soon.",
          });
          formRef.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast({
            title: "Failed to send message",
            description: "Something went wrong. Please try again.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let’s build something meaningful together. Whether you have a project,
          an idea, or just want to connect — my inbox is always open.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* CONTACT INFO */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-left">Email</p>
                  <a
                    href="mailto:dzackyahmad.career@gmail.com"
                    className="text-muted-foreground hover:text-primary transition text-left"
                  >
                    dzackyahmad.career@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-left">Phone</p>
                  <a
                    href="tel:+62895413967160"
                    className="text-muted-foreground hover:text-primary transition text-left"
                  >
                    +62 895 4139 67160
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-left">Location</p>
                  <p className="text-muted-foreground text-left">
                    Jalan Kamper Indah No. 6, Cileunyi, Kabupaten Bandung
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="pt-6">
              <h4 className="font-medium mb-4 text-center">
                Connect With Me
              </h4>

              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/dzacky-ahmad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/dzacky_ahmad_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Instagram />
                </a>
                <a
                  href="https://github.com/dzackyahmad-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>
        
          {/* FORM */}
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-md
                             bg-background text-foreground
                             placeholder:text-muted-foreground
                             border border-border
                             focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="reply_to"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-md
                             bg-background text-foreground
                             placeholder:text-muted-foreground
                             border border-border
                             focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-md resize-none
                             bg-background text-foreground
                             placeholder:text-muted-foreground
                             border border-border
                             focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
