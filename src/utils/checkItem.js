export const checkItem = (array, id) => {
  return !!array?.some((item) => item._id === id)
}
