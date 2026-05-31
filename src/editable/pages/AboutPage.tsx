import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/site-config";
import { siteContent } from "@/editable/content/siteContent";

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description={siteContent.about.description}
      actions={
        <>
          <Button asChild>
            {/* <Link href="/contact">Contact Us</Link> */}
          </Button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border bg-card">
          <CardContent className="space-y-4 p-6">
            <Badge variant="secondary">{siteContent.about.badge}</Badge>
            <h2 className="text-2xl font-semibold text-foreground">
              {siteContent.about.title}
            </h2>
            <p className="text-sm text-muted-foreground">{siteContent.about.description}</p>
            {siteContent.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
        <div className="space-y-4">
          {siteContent.about.values.map((value) => (
            <Card key={value.title} className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
