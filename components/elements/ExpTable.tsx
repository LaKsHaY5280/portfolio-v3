import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoveUpRight } from "lucide-react";

const ExpTable = ({
  textEnter,
  textLeave,
  card,
}: {
  textEnter: () => void;
  textLeave: () => void;
  card: {
    caption: string;
    tableTitles: string[];
    workDetails: {
      years: string;
      projectName: string;
      companyName: string;
      role: string;
      link: string;
    }[];
  };
}) => {
  return (
    // <div className=" w-full h-full text-day">
    <Table className=" w-full h-1/5 aboutBody text-center text-day">
      <TableCaption className=" text-primary">{card.caption}</TableCaption>
      <TableHeader>
        <TableRow className=" text-primary hover:bg-night">
          <TableCell className=" ">{card.tableTitles[0]}</TableCell>
          <TableCell className=" max-lg:hidden w-60">
            {card.tableTitles[1]}
          </TableCell>
          <TableCell className=" pr-10">{card.tableTitles[2]}</TableCell>
          <TableCell className=" max-md:hidden pl-10 w-72">
            {card.tableTitles[3]}
          </TableCell>
          <TableCell className=" ">{card.tableTitles[4]}</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {card.workDetails.map((detail, i) => (
          <TableRow key={i} className=" hover:bg-muted/10">
            <TableCell
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className=" aboutBody font-['Santika']"
            >
              {detail.years}
            </TableCell>
            <TableCell
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className=" max-lg:hidden w-60"
            >
              {detail.projectName}
            </TableCell>
            <TableCell
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className=" lg:pr-10"
            >
              {detail.companyName}
            </TableCell>
            <TableCell
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className=" max-md:hidden pl-10 w-72"
            >
              {detail.role}
            </TableCell>
            <TableCell onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <a
                href={detail.link}
                target="blank"
                className=" flex justify-center items-center"
              >
                <MoveUpRight
                  className=" lg:w-10 lg:h-10"
                  color="#846c5b"
                  strokeWidth={2}
                  absoluteStrokeWidth
                />
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    // </div>
  );
};

export default ExpTable;
