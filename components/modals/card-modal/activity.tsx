"use client"

import { AuditLog } from "@prisma/client";

import { ActivityIcon } from "lucide-react";
import { ActivityItem } from "../../activity-item";
import { Skeleton } from "@/components/ui/skeleton";

interface ActivityProps {
  items: AuditLog[];
};

export const Activity = ({ items }: ActivityProps) => {
  return (
    <div className="flex items-start gap-x-3 w-full">
      <ActivityIcon className="w-5 h-5 mr-0.5 text-neutral-700"/>
      <div className="w-full">
        <p className="font-semibold text-neutral-700 mb-2">
          Activity
        </p>
        <ol className="mt-2 space-y-2">
          {items.map((itm) => (
            <ActivityItem
              key={itm.id}
              data={itm}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

Activity.Skeleton = function ActivitySkeleton() {
  return (
    <div className="flex items-start gap-x-3 w-full">
      <Skeleton className="w-6 h-6 bg-neutral-200"/>
      <div className="w-full">
      <Skeleton className="w-24 h-6 mb-2 bg-neutral-200"/>
      <Skeleton className="w-full h-10 bg-neutral-200"/>
      </div>
    </div>
  );
};