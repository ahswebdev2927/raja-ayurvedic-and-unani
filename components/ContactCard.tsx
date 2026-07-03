import React from "react";
import * as Icons from "lucide-react";

interface ContactCardProps {
  iconName: string;
  title: string;
  details: React.ReactNode;
}

export default function ContactCard({ iconName, title, details }: ContactCardProps) {
  const IconComponent = (Icons as any)[iconName];

  return (
    <article className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl shadow-xs">
      <div className="p-3 bg-white text-accent rounded-xl shadow-xs shrink-0 h-fit border border-slate-100/50">
        {IconComponent ? (
          <IconComponent className="w-5 h-5" />
        ) : (
          <Icons.HelpCircle className="w-5 h-5" />
        )}
      </div>
      <div className="space-y-1">
        <h3 className="font-heading text-base font-bold text-primary">{title}</h3>
        <div className="text-sm font-light text-neutral-gray leading-relaxed">
          {details}
        </div>
      </div>
    </article>
  );
}
