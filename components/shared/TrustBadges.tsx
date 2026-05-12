import { Shield, Award, Phone } from "lucide-react";
const badges = [
  { icon: Shield, text: "Secure payment & data protection" },
  { icon: Award,  text: "Best price guarantee" },
  { icon: Phone,  text: "24/7 customer support" },
];
export default function TrustBadges() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-3">
      {badges.map(({ icon: Icon, text }) => (
        <div key={text} className="flex items-center gap-3 text-sm text-gray-500">
          <div className="w-8 h-8 bg-sand rounded-xl flex items-center justify-center shrink-0">
            <Icon size={14} className="text-coral" />
          </div>
          {text}
        </div>
      ))}
    </div>
  );
}
