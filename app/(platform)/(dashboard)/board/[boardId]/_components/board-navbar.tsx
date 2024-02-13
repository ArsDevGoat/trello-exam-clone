import { Board } from "@prisma/client";
import { BoardTittleForm } from "./board-title-form";
import { Boardoptions } from "./board-options";

interface BoardNavbarProps {
  data: Board
}

export const BoardNavbar = async ({ data }: BoardNavbarProps) => {

  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-4 text-white">
      <BoardTittleForm data={data}/>
      <div className="ml-auto">
        <Boardoptions id={data.id}/>
      </div>
    </div>
  )
};
