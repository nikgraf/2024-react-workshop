import { useOptimistic, useState } from "react";
import { sleep } from "../utils/sleep";

let likesOnServer = 0;

const incrementApiCall = async (newLikes: number) => {
  await sleep();

  likesOnServer += newLikes;
  return likesOnServer;
};

export const Likes: React.FC<{
  likes: number;
  onUpdate: (likes: number) => void;
}> = ({ likes, onUpdate }) => {
  const [optimisticLikes, updateOptimisticLikes] = useOptimistic<
    number,
    number
  >(likes, (likes, newLikes) => {
    return likes + newLikes;
  });

  async function incrementByTwoAction() {
    updateOptimisticLikes(2);
    const result = await incrementApiCall(2);
    onUpdate(result);
  }

  return (
    <form>
      <div>{optimisticLikes}</div>
      <button
        formAction={incrementByTwoAction}
        // disabled={optimisticLikes !== likes}
      >
        +2
      </button>
    </form>
  );
};

export const Comment: React.FC = () => {
  const [likes, setLikes] = useState(0);

  return <Likes likes={likes} onUpdate={setLikes} />;
};
