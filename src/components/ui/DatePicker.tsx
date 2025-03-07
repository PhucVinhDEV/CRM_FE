"use client";

import { CalendarIcon, X } from "lucide-react";
import { useMemo } from "react";
import { DateRange } from "react-day-picker";
import i18next from "i18next";

import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { useTranslation } from "@/i18n/client";
import { cn } from "@/utils";
import {
  convertUnixTimeToNewDate,
  formatDateTimelllddy,
} from "@/utils/datetime";

interface DatePickerProps {
  date: { from: number | undefined; to: number | undefined } | undefined;
  onSelectDate: (dateRange: DateRange | undefined) => void;
  onResetDate: () => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  date,
  onSelectDate,
  onResetDate,
}) => {
  const { t } = useTranslation();

  const dateFrom = useMemo(() => {
    if (date?.from) {
      return formatDateTimelllddy(convertUnixTimeToNewDate(date.from));
    }
  }, [date]);

  const dateTo = useMemo(() => {
    if (date?.to) {
      return formatDateTimelllddy(convertUnixTimeToNewDate(date.to));
    }
  }, [date]);

  const chooseDateValue = useMemo(() => {
    if (dateFrom) {
      return dateTo ? `${dateFrom} - ${dateTo}` : dateFrom;
    }
    return t("commons.chooseDate");
  }, [dateFrom, dateTo, i18next.language]);

  return (
    <div className="flex items-center gap-2">
      <p className="whitespace-nowrap text-sm text-grayBlue400">
        {t("commons.timeLabel")}
      </p>
      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild className="my-3">
            <Button
              id="date"
              variant="outline"
              className={cn(
                "m-0 w-full justify-start border border-none px-2 py-0 text-left font-normal text-blackBase dark:bg-dark300 dark:text-whiteBase",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>{chooseDateValue}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              selected={{
                from: date?.from
                  ? convertUnixTimeToNewDate(date?.from)
                  : undefined,
                to: date?.to ? convertUnixTimeToNewDate(date?.to) : undefined,
              }}
              onSelect={(props) => {
                onSelectDate(props);
              }}
              numberOfMonths={2}
              className="max-h-[270px] overflow-y-auto rounded-xl border border-solid border-bgray500 dark:border-bgray400 dark:bg-blackBase sm:max-h-full sm:overflow-y-visible"
            />
          </PopoverContent>
        </Popover>
        {date?.from || date?.to ? (
          <Button
            variant="outline"
            className="h-7 rounded-md border-bgray500 p-2 text-xs hover:bg-gray500/30 dark:border-[#56595e] dark:hover:bg-gray500/20"
            onClick={onResetDate}
          >
            <X width={14} height={14} />
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default DatePicker;
