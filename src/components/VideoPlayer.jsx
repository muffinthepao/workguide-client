import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";


export default function VideoPlayer({ answer }) {

  return (
    <div className="">
      <video
        className="w-full"
        controls
        src={answer?.answerUrl}
        style={{ width: 720 }}
      ></video>
      <div className="w-full flex flex-row ">
        <span className="grow inline-block p-3 rounded-bl-lg bg-slate-200 text-slate-500 border-r-2 border-slate-300 text-xs font-medium tracking-widest space-x-6 text-center">
          <FontAwesomeIcon
            className="pr-3"
            icon={icon({ name: "heart", style: "regular" })}
          />
          LIKE
        </span>
        <span className="grow inline-block p-3 rounded-br-lg bg-slate-200 text-slate-500 text-xs font-medium tracking-widest text-center">
          <FontAwesomeIcon
            className="pr-3"
            icon={icon({ name: "share-nodes", style: "solid" })}
          />
          SHARE
        </span>
      </div>
    </div>
  );
}
