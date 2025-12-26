import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // 建议将参数改为只接收 data，或者在调用时传入 url
  const submit = async (url, data) => {
    const random = Math.random();
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      
      // 创建结果对象
      const successResponse = {
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      };

      setResponse(successResponse);
      return successResponse; // keypoint:必须 return 给调用者 

    } catch (error) {
      const errorResponse = {
        type: 'error',
        message: 'Something went wrong, please try again later!',
      };

      setResponse(errorResponse);
      return errorResponse;      // keypoint: return false when get an error
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;


/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
