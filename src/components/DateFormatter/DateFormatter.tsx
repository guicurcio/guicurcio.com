import { parseISO, format } from "date-fns";
import clsx from "clsx";
import mergeClasses from "utils/mergeClasses";

interface DateFormatterProps {
  post?: boolean;
  dateString: string;
}

export default function DateFormatter({
  post,
  dateString,
}: DateFormatterProps) {
  const date = parseISO(dateString);
  return (
    <time className={mergeClasses("text-white")} dateTime={dateString}>
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
}
