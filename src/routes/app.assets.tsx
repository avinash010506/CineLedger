import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Stat, Card, PrimaryButton, GhostButton, Pill } from "@/components/app/ui";
import { Boxes, Truck, Camera, Package } from "lucide-react";

export const Route = createFileRoute("/app/assets")({
  component: AssetsPage,
  head: () => ({ meta: [{ title: "Assets & Vendors — CineLedger" }] }),
});

const vendors = [
  {
    name: "Eclipse Camera Rentals",
    category: "Camera & lenses",
    spend: "₹4.2 Cr",
    rating: 4.8,
    status: "Preferred",
    tone: "green" as const,
  },
  {
    name: "Skybeam Lighting",
    category: "Lighting & grip",
    spend: "₹2.1 Cr",
    rating: 4.5,
    status: "Preferred",
    tone: "green" as const,
  },
  {
    name: "Atlas VFX Studio",
    category: "Post-production",
    spend: "₹11.8 Cr",
    rating: 4.9,
    status: "Exclusive",
    tone: "gold" as const,
  },
  {
    name: "Helios Catering",
    category: "Unit support",
    spend: "₹0.6 Cr",
    rating: 4.2,
    status: "Active",
    tone: "neutral" as const,
  },
  {
    name: "Stagecraft Builders",
    category: "Set construction",
    spend: "₹6.4 Cr",
    rating: 4.7,
    status: "Active",
    tone: "neutral" as const,
  },
  {
    name: "Mira Insurance",
    category: "Cast & equipment",
    spend: "₹1.9 Cr",
    rating: 4.6,
    status: "Renewing",
    tone: "crimson" as const,
  },
];

const assets = [
  { name: "Arri Alexa Mini LF · #A1", type: "Camera", loc: "Midnight in Bombay", until: "12 Jun" },
  { name: "Cooke S7/i Prime Set", type: "Lenses", loc: "Aurora Falls", until: "30 May" },
  { name: "DJI Ronin 4D", type: "Stabiliser", loc: "Vault", until: "—" },
  { name: "Mole Beam Projector", type: "Lighting", loc: "Studio C", until: "24 May" },
  { name: "Mercedes Sprinter · Unit Van", type: "Vehicle", loc: "Mumbai shoot", until: "12 Jun" },
];

function AssetsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Production"
        title="Assets & Vendors"
        sub="Equipment, vendor contracts and spend across the studio supply chain."
        actions={
          <>
            <GhostButton>Vendor RFQs</GhostButton>
            <PrimaryButton>Check out asset</PrimaryButton>
          </>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Active vendors" value="47" delta="6 renewing" />
        <Stat label="Asset utilisation" value="78%" delta="Idle: 14 items" accent="teal" />
        <Stat label="Vendor spend YTD" value="₹62 Cr" delta="11% under plan" />
        <Stat label="Insurance coverage" value="₹980 Cr" delta="2 riders due" accent="crimson" />
      </div>

      <div className="grid lg:grid-cols-5 gap-6 mt-6">
        <Card title="Vendors" className="lg:col-span-3">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs uppercase tracking-widest text-muted-foreground">
                <tr className="border-b border-white/5">
                  <th className="text-left py-3 font-normal">Vendor</th>
                  <th className="text-left font-normal">Category</th>
                  <th className="text-left font-normal">Spend</th>
                  <th className="text-left font-normal">Rating</th>
                  <th className="text-left font-normal">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {vendors.map((v) => (
                  <tr key={v.name} className="hover:bg-white/[0.02]">
                    <td className="py-3.5 font-medium flex items-center gap-2">
                      <Truck className="h-3.5 w-3.5 text-muted-foreground" />
                      {v.name}
                    </td>
                    <td className="text-muted-foreground">{v.category}</td>
                    <td>{v.spend}</td>
                    <td className="text-gold">★ {v.rating}</td>
                    <td>
                      <Pill tone={v.tone}>{v.status}</Pill>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Assets on the floor" className="lg:col-span-2">
          <ul className="divide-y divide-white/5 text-sm">
            {assets.map((a) => (
              <li key={a.name} className="py-3 flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-white/5 grid place-items-center shrink-0">
                  {a.type === "Camera" ? (
                    <Camera className="h-4 w-4 text-gold" />
                  ) : a.type === "Vehicle" ? (
                    <Truck className="h-4 w-4 text-teal" />
                  ) : (
                    <Package className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate">{a.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {a.loc} · returns {a.until}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
