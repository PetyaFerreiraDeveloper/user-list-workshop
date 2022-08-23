
export const isPositive = (e, setErrors) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: Number(e.target.value) <= 0,
    }));
    console.log(e.target.value);
};