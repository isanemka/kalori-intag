export default defineEventHandler(async (event) => {
  return { message: "Ditt API fungerar!", date: new Date().toISOString() };
});