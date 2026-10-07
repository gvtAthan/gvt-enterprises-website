import { Image as ImageIcon } from "lucide-react";

/**
 * Image slot from the mockup. The caption says what the real photo must show;
 * replace with next/image once GVT supplies photography.
 */
export function ImagePlaceholder({
  caption,
  className = "",
}: {
  caption: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${caption}`}
      className={`flex flex-col items-center justify-center gap-2 overflow-hidden bg-[linear-gradient(150deg,#eef7f1_14%,#d3ecdc_86%)] px-4 text-center ${className}`}
    >
      <ImageIcon aria-hidden className="size-8 text-brand" strokeWidth={2} />
      <span className="text-caption font-medium text-brand">{caption}</span>
    </div>
  );
}
