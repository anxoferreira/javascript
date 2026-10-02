try {
  let division = 5 / 0;
  if (num < 0) throw new Exception();
} catch (error) {
  console.log("error");
}finally{
  console.log("esto se ejecuta siempre");
}
