import { quotes } from "../assets";

function FeedbackCard(props) {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 ms:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="quote"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-poppins text-[18px] leding-[32px] text-white my-10">
        {props.content}
      </p>
      <div className="flex">
        <img
          src={props.img}
          alt={props.name}
          className="w-[48px] h-[48px] rounded-full"
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins text-semibold text-[20px] leding-[32px] text-white">
            {props.name}
          </h4>
          <p className="font-poppins text-[16px] leding-[24px] text-dimWhite">
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
}
export default FeedbackCard;
