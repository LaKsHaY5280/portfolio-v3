import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoveUpRight } from "lucide-react";

const workDetails = [
  {
    years: "Present",
    projectName: "LaaungLaachi store",
    companyName: "LaaungLaachi",
    role: "Shopify developer",
    link: "https://launglaachi.co",
  },
  {
    years: "2023",
    projectName: "TodoBlitz",
    companyName: "BharatiQ",
    role: "Full-stack developer",
    link: "https://www.bharatiq.com/",
  },
  {
    years: "2023",
    projectName: "CuraHunt site",
    companyName: "CuraHunt",
    role: "Back-end developer",
    link: "https://futureforward5-lakshay5280.vercel.app/",
  },
  //   {
  //     years: "2023",
  //     projectName: "TaskForge",
  //     companyName: "-",
  //     role: "Full-stack developer",
  //     link: "https://www.bharatiq.com/",
  //   },
];

const ExpTable = ({
  textEnter,
  textLeave,
}: {
  textEnter: () => void;
  textLeave: () => void;
}) => {
  return (
    <div className=" text-day">
      <Table className=" text-xl leading-[3.5rem] tracking-[0.2rem] font-['snow'] text-center">
        <TableCaption className=" text-lg leading-[3.5rem] tracking-[0.1rem] font-['Snow'] text-primary">
          My experienced marvels!!
        </TableCaption>
        <TableHeader>
          <TableRow className=" text-primary hover:bg-night">
            <TableCell className=" ">When</TableCell>
            <TableCell className=" w-60">What</TableCell>
            <TableCell className=" pr-10">For</TableCell>
            <TableCell className=" pl-10 w-72">As</TableCell>
            <TableCell className=" ">See</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workDetails.map((detail, i) => (
            <TableRow key={i} className=" hover:bg-muted/10">
              <TableCell
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className=" text-2xl tracking-[0.2rem] font-['Santika']"
              >
                {detail.years}
              </TableCell>
              <TableCell
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className=" w-60"
              >
                {detail.projectName}
              </TableCell>
              <TableCell
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className=" pr-10"
              >
                {detail.companyName}
              </TableCell>
              <TableCell
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className=" pl-10 w-72"
              >
                {detail.role}
              </TableCell>
              <TableCell
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className=" "
              >
                <a
                  href={detail.link}
                  target="blank"
                  className=" flex justify-center items-center"
                >
                  <MoveUpRight
                    size={40}
                    color="#846c5b"
                    strokeWidth={3}
                    absoluteStrokeWidth
                  />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ExpTable;
